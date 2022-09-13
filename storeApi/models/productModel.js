const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        require : [true, 'Name is required']
    },

    price:{
        type:Number,
        // required:[true, 'product price must be provided']
    },
    feature:{
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
        // message:'{VALUE} is not supported', 
    }
})

module.exports = mongoose.model('Product',productSchema)