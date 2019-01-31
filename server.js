var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});