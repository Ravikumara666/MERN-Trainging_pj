import mongoose from 'mongoose'
export const DBconnection=async()=>{
    try{
         await mongoose.connect('mongodb://127.0.0.1:27017/engineerMinds', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully!');
 
    
    }
    catch(err)
    {
        console.error('MongoDB connection failed:', err);
        console.err("Error is ",err)
    }
}