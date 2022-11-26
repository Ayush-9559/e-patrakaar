const  mongoose = require('mongoose');

const newsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    keywords:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    }
})