import express from "express"

import { comments } from "../controller/commentController.js"

const commentRoute=express.Router()

commentRoute.route("/comments").get(comments)

export default commentRoute