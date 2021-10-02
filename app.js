const express = require('express')
require('dotenv').config()
const path = require('path')
const app = express()
const expressHbs =  require('express-handlebars');
hbs = expressHbs.create({ })
const db = require("./config/database");
const Book = require('./models/Book')
const User = require('./models/User')
const Genre = require('./models/Genre')
const Tag = require('./models/Tag')
const sequelize = require('./config/database')
const Op = require('sequelize')
var paginateHelper = require('express-handlebars-paginate');
const { RSA_NO_PADDING } = require('constants');
const { json } = require('sequelize');

hbs.handlebars.registerHelper('paginateHelper', paginateHelper.createPagination);
const port = process.env.PORT || 6000;



app.listen(port,(req, res)=>{
    console.log(`app is running on ${port}`)
})




app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }));


app.engine('.hbs', expressHbs({ defaultLayout: 'main', extname: '.hbs',


runtimeOptions: {
  allowProtoPropertiesByDefault: true,

  allowProtoMethodsByDefault: true,
},


}))



app.set('view engine', '.hbs');


// app.engine(
//   "handlebars",

//   exphbs({
//     defaultLayout: "main",

//     runtimeOptions: {
//       allowProtoPropertiesByDefault: true,

//       allowProtoMethodsByDefault: true,
//     },
//   })
// );

app.use(express.json())
// app.set('view engine', 'handlebars')

db.authenticate().then(()=>{
    console.log(`connection established`)
})  .catch((err) => {
    console.log(err);
  });
// app.get('/', (req, res)=> {res.status(200).json('hello there')})
// app.get('/home', (req, res)=>{
//     res.render('index',{ layout: 'landing'})
// })


app.get('/home', async(req, res)=>{
  try {
   const book = await Book.findAll()

const awards = await book.filter(book =>book.dataValues.special_tag ==='award');
const newbook = await book.filter(book =>book.dataValues.special_tag ==='new');

    // Award winning partial 

   await res.render('home',{
      awards,
      newbook
   })
  
   
    console.log(newbook)
 
    
  } catch (error) {
    console.log(error)
    
  }

})
app.get('/booklist/', async (req, res)=> {
  var currentPage = '1';


  try {
    const allBooks = await  Book.findAll({
      raw: true,

    })


    
    await res.render('renderViewHTML', { page: currentPage, limit:'7',totalRows: '1010',allBooks });


  } catch (error) {
    console.log(error)
    
  }
  

})


app.get('/bookview/:id', async (req, res)=>{

const requestBody =  parseInt(req.params.id);

try {
  
 const bookId = await Book.findAll({
  where:{
    id: requestBody
  }
 })
//  const singleBook = await bookId.filter(bookId =>bookId.dataValues.id ===requestBody);

 

 await res.render('bookview',{
  bookId
 })
 


} catch (error) {
  
}
  


  
 
})



// app.get("/books",  async(req, res) =>{


//   Book.findAll({limit :6})
//     .then((book) =>
//       res.render("features", {
     
//         book,   
        
      
//       })

//     )
//     .catch((err) =>
//       res.render("error", {
//         error: err,
//       })
//     )
    
//     });




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
         await res.status(200).json('ok')
  
        
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


app.get('/delete/:id', async (req, res)=>{

  await Book.destroy({
    where: {id: req.params.id}
  })
  await res.render('success')
  
})


