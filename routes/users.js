var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('加载主框架');
  res.render('login.html');

});

module.exports = router;
