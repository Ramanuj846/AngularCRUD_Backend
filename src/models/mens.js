const mongoose =require("mongoose")

const menSchema= new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true

    },
    dob:{
        type:Date,
        trim:true

    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    events:{
        type:String,
        default:"100m",
        trim:true
    }
})

const mensRanking = new mongoose.model("MenRanking", menSchema)

module.exports=mensRanking;