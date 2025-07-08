import express from 'express'
import { users,user } from '../controller/userController.js'
const router=express.Router()

router.route("/users").get(users)

router.route("/user/:id").get(user)

export default router