import { usersData } from "../data/userData.js"


export const users=(req,res)=>
{
    res.send(usersData)
    console.log("This is users Page")
    res.send("This is Working users")
}

export const user=(req,res)=>
{
    const id=Number(req.params.id)
    res.send(usersData[id-1])
}