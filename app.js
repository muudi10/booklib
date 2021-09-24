const express = require('express')
const handlebars = require('handlebars')
require('dotenv').config()
const path = require('path')
const app = express()
const exphbs = require("express-handlebars");
const db = require("./config/database");
const Book = require('./models/Book')
const User = require('./models/User')
const Genre = require('./models/Genre')
const Tag = require('./models/Tag')
const sequelize = require('./config/database')



const port = process.env.PORT || 6000;


app.listen(port,(req, res)=>{
    console.log(`app is running on ${port}`)
})

app.get('/', (req, res)=> {res.status(200).json('hello there')})
app.get('/home', (req, res)=>{
    res.render('index',{ layout: 'landing'})
})

app.get("/books", (req, res) =>{


  Book.findAll()
    .then((book) =>
      res.render("index", {
     
        book,   
        
      
      })

    )
    .catch((err) =>
      res.render("error", {
        error: err,
      })
    )
    
    });



app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }));


app.engine(
  "handlebars",

  exphbs({
    defaultLayout: "main",

    runtimeOptions: {
      allowProtoPropertiesByDefault: true,

      allowProtoMethodsByDefault: true,
    },
  })
);


app.set('view engine', 'handlebars')

db.authenticate().then(()=>{
    console.log(`connection established`)
})  .catch((err) => {
    console.log(err);
  });
  app.get('/addbook',(req,res)=> res.render('addbook'))
  app.post('/add', async(req, res)=>{
    try {
      const userId = 1;
        const {title,author,genre,publicationYear, isbn, summary,description,image ,publisher,book_audience }= req.body
        
         await Book.create({
             book_title: title,
             book_author:author,
             book_genre:genre,
             book_isbn:isbn,
             book_publication_year: publicationYear,
             book_publisher:publisher,
             book_summary: summary,
             book_description: description,
             book_audience:book_audience,
             userId: userId
  
         });
         await res.render('index')
         console.log(req.body)
        
    } catch (error) {
        console.log(error)
        
    }
  })
  
  app.get('/register',(req, res)=>{
    res.render('register')
  })

  app.get('/login',(req,res)=>{
    res.render('login')
  })