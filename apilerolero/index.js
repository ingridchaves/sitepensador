var express = require('express');
var lerolero = require('lerolero');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res) {
  var frase = lerolero();
  res.send(frase);
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});