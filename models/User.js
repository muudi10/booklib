const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const Book = require('./Book')

const User = sequelize.define('user',{
    id:{
       type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,   
        allowNull:false    
    },
    user_name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    email:{
         type:Sequelize.STRING,
         allowNull:false,
    },
    
    password:{
         type:Sequelize.STRING,
         allowNull:false,
    },
    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    

   

    
})
    User.hasMany(Book)
    Book.belongsTo(User)

module.exports = User
