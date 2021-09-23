const express = require('express')
const handlebars = require('handlebars')
require('dotenv').config()
const path = require('path')
const app = express()
const exphbs = require("express-handlebars");
const db = require('./config/database')

const port = process.env.PORT || 6000;


app.listen(port,(req, res)=>{
    console.log(`app is running on ${port}`)
})

app.get('/', (req, res)=> {res.status(200).json('hello there')})
app.get('/home', (req, res)=>{
    res.render('index',{ layout: 'landing'})
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }));


app.engine(
    "handlebars",
  
    exphbs({
      defaultLayout: "main",
    })
  );

app.set('view engine', 'handlebars')

db.authenticate().then(()=>{
    console.log(`connection established`)
})  .catch((err) => {
    console.log(err);
  });
