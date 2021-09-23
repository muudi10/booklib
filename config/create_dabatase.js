const sequelize = require('./database')
const Book = require('../models/Book')
const User = require('../models/User')
const Genre = require('../models/Genre')
const Tag = require('../models/Tag')




sequelize.sync({force:true})
