const mongoose=require('mongoose')
const mongoURL='mongodb://127.0.0.1:27017/firstdb'

const connectToMong=()=>{
    
        mongoose.connect(mongoURL).then((data)=>{
            console.log("conncted to db");
        }).catch(()=>{
            console.log("error accured");
        })
 
}

module.exports =connectToMong;