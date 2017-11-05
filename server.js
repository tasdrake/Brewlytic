'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('Listening on port: ', port);
});

module.exports = app;
