const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const Book = require('./Book')

const Genre = sequelize.define('genre',{
    id:{
       type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    crime_and_mystery:{
        type: Sequelize.INTEGER,       
    },
    thriller:{
        type: Sequelize.INTEGER,       
    },
    horror:{
        type: Sequelize.INTEGER,       
    },
    historical:{
        type: Sequelize.INTEGER,       
    },
    romance:{
        type: Sequelize.INTEGER,       
    },
    science_fiction:{
        type: Sequelize.INTEGER,       
    },
    
    classic_fiction:{
        type: Sequelize.INTEGER,       
    },
    
    western:{
        type: Sequelize.INTEGER,       
    },
    
    fantasy:{
        type: Sequelize.INTEGER,       
    },
    adventure:{
        type: Sequelize.INTEGER,       
    },
    graphic_novels:{
        type: Sequelize.INTEGER,       
    },
    arts_Books:{
        type: Sequelize.INTEGER,       
    },
    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE    
})

Book.hasOne(Genre)
Genre.belongsTo(Book)


module.exports = Genre
