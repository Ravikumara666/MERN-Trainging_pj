import express from 'express'
import router from "./routes/user.route.js"
import logger from "morgan"
import mongoose from 'mongoose'
import { DBconnection } from './utils/db.js'
const app=express()

app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use(logger('dev'))
app.use("/api/user",router)

DBconnection()
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
