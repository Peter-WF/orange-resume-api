'use strict';

const express = require('express')
const path = require('path')
require('nodejs-mock-server')

const utils = require('../utils')

const app = express()

MS.init({
  app,
  appDir: path.resolve(__dirname, '../..')
})

// add intercept
app.use('/api/*', utils.cors, MS.intercept())

app.options('/api/*', function(req, res) {
  res.sendStatus(200)
})

app.listen(3001, function() {
  console.log('Example app listening on port 3001!')
})
