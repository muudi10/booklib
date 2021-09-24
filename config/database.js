const Sequelize = require("sequelize");
require('dotenv').config()
const path = require("path");

const sequalize = new Sequelize( 'booklibrary', 'root','password', {
    host: 'localhost',
    port: 3307,
    dialect: "mysql",
  });
  

  module.exports = sequalize