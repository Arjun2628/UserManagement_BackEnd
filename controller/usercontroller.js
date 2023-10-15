import db from "../database/db.js";
import User from "../model/userModel.js";
const sample = async (req, res) => {
  try {
    res.json({
      status: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};

const test = async (req, res) => {
  try {
    res.send("message");
  } catch (err) {
    console.log(err.message);
  }
};

const adduser = async (req, res) => {
  const { username,age } = req.params;

  if (username) {
    try {
      const user = await User.create({ name: username});

      console.log("hello00000000000000000000000000000000000");
      if(res.status(200)){
        const allusers=await User.find({})
        res.json(allusers)
      }
      // res.status(200).json({ message: "User added successfully" });
    } catch (error) {
      console.log("Helllooooooooooooooooo");
      res.status(500).json({ err: "Server error" });
    }
  }
};

const updateuser =async (req,res)=>{
  try {

    const {id,name}=req.body
    console.log(req.body);


    
       const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { name: name }, // Replace 'name' with your desired field to update
      { new: true } // To return the modified document rather than the original
    );
    
   
    const allusers=await User.find({})
    res.json(allusers)
    // res.json({message:"user updated succesfully",USER:updatedUser})
  } catch (error) {
    console.log(error);
  }
}


const getAllUsers=async (req,res)=>{
    try{
        const allusers=await User.find({})
        res.json(allusers)
    }catch(error){
        console.log("error");
    }
}

const addData = async (req, res) => {
  try {
    const name = {
      name: "Sinsha",
    };
  await db
      .collection("users")
      .insertOne(name)
      .then(() => {
        console.log("data inserted");
      });

  if(result.status(200)){
   const allusers=await User.find({})
   res.json(allusers)   
  }else{
    console.log("error");
  }   

  
  } catch (error) {
    console.log(error);
  }
};

const deleteuser = async (req, res) => {
  try {
    const { id } = req.body;
     await User.findOneAndDelete({ _id: id });
    
      console.log("User deleted successfully");
      const allUsers = await User.find({});
      res.json(allUsers);
      // res.json({message:"deleted succesfully"});
    
  } catch (error) {
    console.log(error);
  }
};

export default {
  sample,
  test,
  adduser,
  addData,
  getAllUsers,
  updateuser,
  deleteuser
};
