const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Book = sequelize.define('book',{
    id:{
       type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    book_ident:{
        type: Sequelize.INTEGER,       
    },
    book_title:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    book_author:{
         type:Sequelize.STRING,
         allowNull:false,
    },
    
    book_genre:{
         type:Sequelize.STRING,
         allowNull:false,
    },
    book_isbn:{
         type:Sequelize.STRING,
         allowNull:false,
    },
    book_publisher:{
         type:Sequelize.STRING,
         allowNull:false,
    },
    book_publication_year:{
         type:Sequelize.DATE,
         allowNull:false,
    },
    book_audience:{
        type: Sequelize.BOOLEAN,
    },
    book_summary:{
        type: Sequelize.STRING,
    },
    book_description:{
        type: Sequelize.STRING,
    },
    page_count:{
        type:Sequelize.STRING
    },
    image:{
        type: Sequelize.STRING
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE

    
})

module.exports = Book
