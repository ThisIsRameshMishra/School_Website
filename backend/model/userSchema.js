const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required: true
    }
})
const User=mongoose.model('USER',userSchema);
module.exports=User;
