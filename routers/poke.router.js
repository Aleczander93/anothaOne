var express = require('express');
var router = express.Router();

router.get('', function(request, response){

  .then(function(){
    response.send(data);
  })
  .catch(function(error){
    response.send(error);
  });
});
