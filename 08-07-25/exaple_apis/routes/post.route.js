import express from 'express'
import { posts,post } from '../controller/postController.js'

const postRouter=express.Router()

postRouter.route("/posts").get(posts)

postRouter.route("/post/:id").get(post)

export default postRouter