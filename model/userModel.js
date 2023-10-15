import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    // age: {
    //     type:BigInt,
    //     required:true
    // },
    // phone: {
    //     type:Number,
    //     required: true
    // }
})

 const User=mongoose.model('User',userSchema)
 export default User