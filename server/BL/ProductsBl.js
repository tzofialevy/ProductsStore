const jfile = require("jsonfile");
const ProductModel=require("../Models/ProductsModel")


exports.getAllProducts = function()
{
    return new Promise((resolve, reject) =>
    {
        ProductModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

exports.getProductByID = function(id)
{
    return new Promise((resolve, reject) =>
    {
        ProductModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                
                resolve(data)
            }
        })
    })
}

exports.createProduct = function(obj)
{
    return new Promise((resolve, reject) =>
    {

        let product=new ProductModel({
           "_id":obj._id,
           "name":obj.name,
           "price":obj.price,
           "img":obj.img
        });
        product.save(function(err)
        { 
            if(err)
            {
                reject(err)
            }
            else
            {

             
                resolve("Created !")
            }
        })
    })
}

exports.updateProduct = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {
console.log("in update")

        ProductModel.findByIdAndUpdate(id,
            {
              "_id":obj._id,
              "name":obj.name,
              "price":obj.price,
              "img":obj.img
              
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    console.log(obj._id,obj.name,obj.price)
                    resolve("Updated !")
                }
            })

    })

}

exports.deleteProduct = function(id)
{
    return new Promise((resolve, reject) =>
    {
        ProductModel.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                
                resolve("deleted!")
                
            }
        })
    })
}

