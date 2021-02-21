const mongoose=require('mongoose');


mongoose.Promise=global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/amazon',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("database is connected"))
.catch((error)=>{
    console.log(error);
    process.exit();});

module.exports=mongoose;