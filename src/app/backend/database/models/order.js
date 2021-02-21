const mongoose=require('mongoose');

const ProductSchema= new mongoose.Schema({
  
  
    src:{
        type:String
    },
    ProductName:{
        type:String
    },
    Status:{
        type:String
    },
    price:{
        type:Number
    }
});

const order = mongoose.model('order', ProductSchema);

module.exports=order;