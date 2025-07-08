import { postsData } from "../data/postData.js"



export const posts=(req,res)=>
{
    res.send(postsData)
}

export const post=(req,res)=>
{
    const id=Number(req.params.id)
    res.send(postsData[id-1])
    
}