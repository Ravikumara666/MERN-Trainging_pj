import { commentsData } from "../data/commentData.js"


export const comments=(req,res)=>
{
        res.send(commentsData)
}