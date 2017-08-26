const express = require('express')
const config = require('config')

const router = express.Router()

module.exports = db => {
  router.get('/setting', (req, res) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(config)
  })

  return router
}
