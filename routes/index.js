var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var db = require('../queries');

router.get('/api/puppies', db.getAllPuppies);



module.exports = router;