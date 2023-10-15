import express from "express"
import userrouter from "./routes/index.js"
import db from "./database/db.js"


const app=express()

app.listen(3001,()=>{
    console.log('Server started');
})

app.use("/",userrouter)

db