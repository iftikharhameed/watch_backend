const express=require('express')
const router=express.Router()
const {addUser , getAllUsers} =require('../controllers/addUser')
const userform =require('../controllers/userform')
const {newProduct, getAllProducts} =require('../controllers/addProduct')
const {newCart, getcart}= require('../controllers/addcart')

router.route('/addUser').post(addUser)
router.route('/getAllUsers').get(getAllUsers)

router.route('/userform').post(userform)

router.route('/addproduct').post(newProduct)
router.route('/getAllProducts').get(getAllProducts)


router.route('/addcart').post(newCart)
router.route('/getcart').get(getcart)

module.exports=router