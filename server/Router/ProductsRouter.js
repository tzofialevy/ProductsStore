const express = require("express");
const router =express.Router();
const ProductsBl=require("../BL/ProductsBl")

router.route('/')
.get(async function(req,res){   
   let data=await ProductsBl.getAllProducts();
   return res.json(data)
})

router.route('/:id')
.get(async function(req,res){
   let id=req.params.id;   
   let data=await ProductsBl.getProductByID(id);
   return res.json(data)
})

router.route('/')
.post(async function(req,res){
   let body=req.body
   let data=await ProductsBl.createProduct(body);
   return res.json(data)
})

router.route('/:id')
.put(async function(req,res){
   let id=req.params.id;
   let body=req.body;
   let data=await ProductsBl.updateProduct(id,body);
   return res.json(data)
})

router.route('/:id')
.delete(async function(req,res){
   let id=req.params.id;
   let data=await ProductsBl.deleteProduct(id);
   return res.json(data)
})


module.exports=router