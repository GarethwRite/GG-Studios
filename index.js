const server = require('./server')
const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
console.log(config[env])
const connection = knex(config[env])

const PORT = 3000

server.listen(PORT, ()=> {
  console.log('server is up on port', PORT)
})