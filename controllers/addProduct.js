const Product=require('../models/NewProduct')

exports.newProduct=async(req,res)=>{
    await Product.create(req.body)
    res.json({message:"Product added successfuly"})
}
exports.getAllProducts=async(req,res)=>{
    const products=await Product.find()
    res.json(products)
}



