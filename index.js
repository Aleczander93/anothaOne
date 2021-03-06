var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(express.static(__dirname + '/public'));

mongoose.connect(mongoURI);

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root:__dirname});
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
