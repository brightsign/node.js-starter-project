var express = require('express');
var app = express();

function main() {
  process.chdir('/storage/sd');

  app.use(express.static('www'));

  app.listen(9090, function() {
    console.log('Example app listening on port 9090!');
  });
}
window.main = main;
