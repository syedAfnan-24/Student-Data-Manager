const mongoose = require("mongoose")
const validator = require("validator")

const MarksSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    usn:{
        type:String,
        required:true,
        minLength:10
    },
    subject:{
        type:String,
        required:true,
        minLength:3
    },
    a1:{
        type:Number,
        required:false,
    },
    b1:{
        type:Number,
        required:false,
    },
    c1:{
        type:Number,
        required:false,
    },
    a2:{
        type:Number,
        required:false,
    },
    b2:{
        type:Number,
        required:false,
    },
    c2:{
        type:Number,
        required:false,
    },
    a3:{
        type:Number,
        required:false,
    },
    b3:{
        type:Number,
        required:false,
    },
    c3:{
        type:Number,
        required:false,
    }
})
const Student = mongoose.model("Student",MarksSchema)
module.exports = Student;