// package needed for backend api
const express=require('express');

const app=express();

//gettting the moogoose package
const mongoose=require('./database/mongoose');

//get the db models
const order=require('./database/models/order');

//setting up CORS
const cors = require('cors');
app.use(cors());

//use json as the structure for passing data between frontend and backend
app.use(express.json());

//server starts listening at 3000 port 
app.listen(3000,()=>console.log('Server is working')); 

//setting the routes for product
app.get('/orders',(req,res)=>{
    order.find({})
         .then(lists=>res.send(lists))
         .catch((error)=>console.log(error));
});

// getting specific ordr
app.get('/orders/:orderNum',(req,res)=>{
    order.find({ _id: req.params.orderNum})
         .then(lists => res.send(lists))
         .catch((error) => console.log(error));
})


//creating one order
app.post('/orders',(req,res)=>{
    (new order(req.body))
         .save()
         .then((_order)=>res.send(_order)
         .catch((error)=>console.log(error)))
})

//updating one order
app.patch('/orders/:orderNum', (req,res)=>{
    order.findByIdAndUpdate(req.params.orderNum,req.body)
        .then(lists => res.send(lists))
        .catch((error) => console.log(error));
}
)


 //deleting one order
app.delete('/orders/:orderNum', (req, res) => {
    order.findByIdAndDelete(req.params.orderNum)
        .then(lists => res.send(lists))
        .catch((error) => console.log(error));
}
)
