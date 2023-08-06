const mongoose= require("mongoose")

const newSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
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
    position:{
        type: String ,
        required:true
    },
    votecnt:{
        type: Number ,
        required:true
    },
    voted:{
        type: Boolean ,
        required:true
    }
})

const collection = mongoose.model("candidates",newSchema)



module.exports=collection
