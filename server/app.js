'use strict'
// const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const data_dir = path.join(__dirname, '/data');

app.use( function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.get('/email', (req, res) => {
  fs.readFile(`${data_dir}/email.json`, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get('/email/:id', (req, res) => {
  console.log(req.params.id)
  fs.readFile(`${data_dir}/email.json`, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(JSON.parse(data).list.find(c => c.id === req.params.id))
      res.send(JSON.parse(data).list.find(c => c.id === req.params.id))
    }
  });
});

let port = process.env.PORT || 3000
app.listen(port, () => console.log(`Application worker ${process.pid} started at ${port}...`))

