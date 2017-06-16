var express = require('express');
var router = express.Router();

router.post('/', function(req, res,next) {
    console.log('doLogin');
    var user={
        username:'admin',
        password:'22'
    };
    if(req.body.username===user.username && req.body.password===user.password){
        var retMsg = {"success":true,"data":"hehe"};
        return res.send(retMsg);
        // res.render('error.html');
    }else {
        res.redirect('/login');
    }

});

module.exports = router;
