//-------------------Imported Modules---------------
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

//------------------Variables----------------------
const app = express();


//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set('view engine','ejs');
// app.set('views'

//load asset
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))


//-----------Server running-----

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3300;

app.get('/',(req ,res)=>{
    res.render('index')
});

app.get('/register',(req ,res)=>{
    res.render('register')
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})