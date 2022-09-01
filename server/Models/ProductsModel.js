const mongoose=require("mongoose")

let ProductSchema=new mongoose.Schema({
    "_id":String,
    "name":String,
    "price":Number,
    "img":String
})
let ProductModel=mongoose.model('products',ProductSchema)
module.exports=ProductModel;