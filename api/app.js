var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/health', function(req, res) {
    res.send('OK').status(200);
  });

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })