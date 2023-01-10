const express=require('express');
const User = require('../model/userSchema');
const router=express.Router()
require('../db/conn')
router.get('/',(req,res)=>{
    res.send("home page through router")
})
router.post('/register',(req,res)=>{
    const {name,phone,email,message}=req.body;
    if(!name ||  !phone || !email || !message){
        return res.json({error:"fill all the details"});
    }
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"email already exists"});
        }
        const user=new User({name,phone,email,message});
        user.save().then(()=>{
            res.status(201).json({message:"register succesfully"})
        }).catch((err)=> res.status(500).json({error:"Failed to register"}));
    }).catch(err=>{console.log(err)});
})
module.exports=router;