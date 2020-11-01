const fs = require('fs')
const express = require('express')
const router = express.Router()




router.get('/', (req, res) => {
  res.render('home')
  
})
router.get('/about', (req,res) => {
  res.render('about')
})

router.get('/newsletter', (req,res) => {
  res.render('newsletter')
})

router


module.exports = router