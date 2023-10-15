import  express from "express";
import user from "../controller/usercontroller.js"
import bodyParser from "body-parser";





const router=express.Router()
router.use(bodyParser.json());
router.get("/",user.sample)
router.get("/user",user.test)
router.post("/adduser/:username",user.adduser)
router.put("/edituser",user.updateuser)
router.get("/allusers",user.getAllUsers)
router.delete("/deleteuser",user.deleteuser)


  export default router