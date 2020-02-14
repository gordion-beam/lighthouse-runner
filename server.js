'use strict';
const moment = require('moment');
const helloworld = require('./src/helloworld');
const express = require('express')
const app = express()
const port = 9000

app.get('/', async (req, res) => {
  const startTime = moment();
  console.log(5);
  const result = await helloworld();
  const time = moment().diff(startTime) / 1000;
  res.json({ time });
})

app.listen(port, () => console.log(`Examplessss app listening on port ${port}!`))
