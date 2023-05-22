const mongoose =require('mongoose')
const {Schema} =mongoose

const userSchema=new Schema({

    name:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    dob:{
        type:String
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    },
    gender:{
        type:String
    },
    country:{
        type:String
    }
})

module.exports=mongoose.model('User',userSchema)