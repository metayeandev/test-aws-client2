var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  var options = {
    'method': 'GET',
    'url': 'https://cnxelection.com/test',
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    let input = JSON.parse(response.body)
    console.log(input)
    res.render('index', { title: 'Express', data: input });
  });
  
  
});

module.exports = router;
