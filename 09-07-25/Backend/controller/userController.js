import { User } from "../model/userModel.js";
import bcrypt from "bcryptjs"

export const login = async(req, res) => {

   const {email,password,role}=req.body

   if(!email|| !password || !role)
   {
      res.status(400).json({message:"All Feilds Must Fill"})
   }
   const user=await User.findOne({email})

   if(!user)
   {
     return res.status(400).json({message:"Invalid Credentials",success:false})
   }

   const validPass=bcrypt.compare(user.password,password)
   if(!validPass)
   {
     return res.status(400).json({message:"Invalid Credentials",success:false})
   }
   if(user.role!=role)
   {
     return res.status(400).json({message:"User Does'nt Exsits",success:false})
   }


   return res.status(200).json({message:"Login Successful"})
};

export const logout =async (req, res) => {
   return res.send("User Logout Successful");
};

export const register =async (req, res) => {
   try{
   const {fullName,email,password,phone,role}=req.body

   if(!fullName||!email||!password||!phone||!role)
   {
      return res.status(400).json({ "message":"Full Details Should Upload"})
      

   }
   const userExists=await User.findOne({email})

   if(userExists)
   {
      return res.status(400).json({"message":"User Already Exsits"})
      
   }
   const encryptPassword=bcrypt(password,10)
   const newUser=new User({fullName,email,phone,password:encryptPassword,role})
   await newUser.save()

   res.status(200).json({message:"User Successful Registerd",newUser})


}catch(err)
{
   console.error("Error ",err)
   res.status(500).json({message:"Server Error in Registartion"})

}

};

export const ProfileUpdate =async (req, res) => {
   return res.send("User Profile Updated");
};
