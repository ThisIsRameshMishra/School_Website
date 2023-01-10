const mongoose=require('mongoose')
const express=require('express')
const app=express();
const cors = require("cors");
const dotenv=require('dotenv');
app.use(cors());
require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));
app.listen(3001,()=>{
    console.log('server is running')
})