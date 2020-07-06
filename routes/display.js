const express = require('express')
const router = express.Router()
const List = require('../models/schema')

router.get('/', async (req, res) => {
  var d = await List.find({})
  res.render('display', { items: d })
})

router.post('/', async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const newDoc = await List.create(req.body)
  console.log('DB Working')
  res.redirect('/')
})

router.post('/delete', async (req, res) => {
  var j = req.body.itemm
  await List.findByIdAndDelete(j)
  res.redirect('/')
})

router.post('/update', async (req, res) => {
  var d = req.body.itemm1
  await List.findByIdAndUpdate(d, { text: req.body.newtext })
  res.redirect('/')
})

module.exports = router
