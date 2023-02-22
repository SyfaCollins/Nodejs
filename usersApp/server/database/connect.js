const mongoose = require('mongoose');


// we create a function that helps us to connect to the database
const connectDB = async()=>{

    //try and catch that helps us to know if the connection is on or off

    
    try {

    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
  
    })

    console.log(`MongoDB connected:${conn.connection.host}`)

        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

    
}


module.exports = connectDB