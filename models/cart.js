const mongoose = require('mongoose');
const {Schema} = mongoose

const cartSchema = new Schema({

    Pimage:{
        type:String,
        require:true,
    },

    Pname:{
        type:String,
        require:true,
    },

    Pprice:{
        type:String,
        require:true,
    },

    Psize:{
        type:String,
        require:true,
    },

    Pquantity:{
        type:String,
        require:true,
    },



})


module.exports=mongoose.model('cart',cartSchema)