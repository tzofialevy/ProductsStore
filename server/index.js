const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const ProductsRouter=require("./Router/ProductsRouter")
const UserRouter=require("./Router/UserRouter")
let app = express();
app.use(express.json());




console.log("it conected");

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use('/api/products',ProductsRouter);
app.use('/api/user',UserRouter);


mongoose.connect(
    'mongodb://localhost:27017/Store',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
),
  () => {
    try {
      //something
    } catch (error) {
      console.error(error);
    }
  };
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('🖥 Connection to DB was succesful jjj');
});

app.listen(8000);

