const mongoose= require("mongoose")

const newSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    regno:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    votecnt:{
        type: Number ,
        required:true
    }
})

const collection = mongoose.model("licetians",newSchema)



module.exports=collection


