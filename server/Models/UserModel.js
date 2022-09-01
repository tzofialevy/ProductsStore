const mongoose=require("mongoose")

let Userschema=new mongoose.Schema({
    "FullName":String,
    "email":String,
    "password":String
})
let UserModel=mongoose.model('user',Userschema)
module.exports=UserModel;