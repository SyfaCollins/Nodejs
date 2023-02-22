const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
,

    email:{
        type:String,
        required:true
    }
,
    gender: String
,
    status:String
})

const UserDB = mongoose.model('userdb',userSchema);

module.exports = UserDB;