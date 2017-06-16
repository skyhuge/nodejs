var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("start");
    res.render('login.html');

});


module.exports = router;
