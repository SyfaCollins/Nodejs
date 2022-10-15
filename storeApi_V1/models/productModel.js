//This file holds the structure of the data to be collected 

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        require : [true, 'Name is required']
    },

    price:{
        type:Number,
        required:[true, 'product price must be provided']
    },
    featured:{
        type:Boolean,
        default:false,
    },

    rating:{
        type:Number,
        default:4.5,
    },
    createAt:{
        type:Date,
        default:Date.now(),
    },
    enum:{
        values:['ikea','liddy','caressa', 'marcos'],
        // message:' is not supported', 
    }
})

module.exports = mongoose.model('Product',productSchema)