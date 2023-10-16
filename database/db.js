import mongoose from "mongoose";
const obj={} 
mongoose.connect("mongodb://127.0.0.1:27017/UserManagement").then((res)=>{
    console.log("db connected");
    obj.db=res
}).catch((err)=>{
    console.log(err);
})

// const db=mongoose.connection()

export default obj.db