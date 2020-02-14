'use strict';
const moment = require('moment');
const helloworld = require('./src/helloworld');
const express = require('express')
const app = express()
const port = 9000

app.get('/', async (req, res) => {
  const startTime = moment();
  console.log(3);
  const result = await helloworld();
  console.log((moment().diff(startTime) / 1000))
  res.send(result);
})

app.listen(port, () => console.log(`Examplessss app listening on port ${port}!`))
