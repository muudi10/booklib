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
booktag:{
        type: Sequelize.BOOLEAN,       
    },
   
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    
})
Book.hasOne(Tag)
Tag.belongsTo(Book)
module.exports = Tag
