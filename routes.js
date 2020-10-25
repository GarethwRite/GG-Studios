const fs = require('fs')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const name = req.query.name || 'person'
  const viewData = {
    name: name
  }
  res.render('home', viewData)
})


router.get('/', (req, res) => {
 
  res.render('home')
  
})


module.exports = router