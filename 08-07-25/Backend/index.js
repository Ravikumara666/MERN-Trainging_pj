import express from 'express'
import router from "./routes/user.route.js"
import logger from "morgan"
const app=express()

app.use(logger('dev'))
app.use("/api/user",router)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
