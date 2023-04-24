var express = require('express');
var app = express();

function main() {
  
  app.use(express.static('/storage/sd'));

  app.listen(9090, function() {
    console.log('Example nodejs app listening on port 9090!');
  });
}
main();
