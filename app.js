const express= require('express');
const mongoose=require('mongoose');
const bodyParser= require('body-parser');
const path=require('path');
const routef= require('./routes/display')
const app=express();
mongoose.connect('mongodb+srv://strtiwari28:qwerty1@cluster0-8ac9j.mongodb.net/listitems?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}
);

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.listen(3000,()=>{
    console.log("listening to port 3000");
});

app.use('/',routef);