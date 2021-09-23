const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const Book =  require('./Book')

const Tag = sequelize.define('tag',{
    id:{
       type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    good_read:{
        type: Sequelize.BOOLEAN,       
    },
    featured:{
        type: Sequelize.BOOLEAN,
    },
    new_book:{
         type:Sequelize.BOOLEAN,
      
    },

    book_week:{
         type:Sequelize.BOOLEAN,
         allowNull:false,
    },
    book_month:{
        type: Sequelize.BOOLEAN,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    
})
Book.hasOne(Tag)
Tag.belongsTo(Book,{as:'promoted'})
module.exports = Tag
