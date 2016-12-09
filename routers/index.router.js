var express= require('exrpess');
var index = express.Router();
var path = require('path');

index.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: path.resolve('./')});
});

module.exports = index;
