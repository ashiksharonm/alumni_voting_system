const mongoose= require("mongoose")

const newSchema=new mongoose.Schema({

    uid:{
        type:String,
        required:true
    },
   id:{
        type:Number,
        required:true
    },
    voted:{
        type:Boolean,
        required:true
    }
})

const collection = mongoose.model("users",newSchema)



module.exports=collection


