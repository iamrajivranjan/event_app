var express = require('express');
var router = express.Router();


var Event = require('../app/Controller/Event')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET only published events */
router.get('/events', Event.getEvents);


module.exports = router;
