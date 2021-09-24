const express = require("express");
const router = express.Router();
const db = require("../../config/database");
const Book = require("../../models/Book");
const Sequelize = require("sequelize");
const path = require("path");

router.post('/add', async(req, res)=>{
    try {
        const {title,author,genre,publicationYear, isbn, summary,description,image  }= req.body
        
         await Book.create({
             book_title: title,
             book_author:author,
             book_genre:genre,
             book_isbn:isbn,
             book_publication_year: publicationYear

         });
         await res.render('index')
        
    } catch (error) {
        console.log(error)
        
    }
})

module.exports =router