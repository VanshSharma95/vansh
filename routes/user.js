const express=require('express');
const usercontroller=require('../controllers/usercontroller');
const router=express.Router();

router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res)
})
router.get('/user/:id',(req,res)=>{
    usercontroller.getparticularUser(req,res)
})
router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res)
})
// export the router
module.exports=router;
