var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

<<<<<<< HEAD
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'..src/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  }
  else{
    open('http://localhost' + port);
  }
});
=======
app.get('/', function(req, res) {
    res.sendFile(path.join (__dirname, '../src/index.html'));

});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    }
    else{
        open('http://localhost:' + port);
    }
});
>>>>>>> 6d521b3c7ad438fbbb4354f3e6d15c30b1a0d7e7
