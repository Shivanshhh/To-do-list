const express= require('express');
const mongoose=require('mongoose');
const bodyParser= require('body-parser');
const path=require('path');
const routef= require('./routes/display')
const app=express();
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.mongo_url,(err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Mongo Connection Success');
    }
});

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.listen(3000,()=>{
    console.log("listening to port 3000");
});

app.use('/',routef);