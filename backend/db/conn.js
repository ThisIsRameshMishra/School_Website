const mongoose=require('mongoose')
const DB='mongodb+srv://student:0825ramesh@cluster0.ylr7abf.mongodb.net/mernstack?retryWrites=true&w=majority'
mongoose.set("strictQuery", false);
mongoose.connect(DB).then(()=>{
    console.log("connect with mongo")
    
}).catch((err)=>console.log("failed"));
