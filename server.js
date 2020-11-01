const express =  require('express')
const server = express()
const hbs  = require('express-handlebars')
const routes = require('./routes.js')

//Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
   extname: 'hbs'
  }))
  
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

//Routes
server.use('/', routes)


module.exports = server


 

 
