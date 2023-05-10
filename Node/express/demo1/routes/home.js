var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home');
});
router.get('/login',function (req,res,next){
    res.render('login',{
        msg:'demo1s=msg',
        arr:['a','b','c']
    });
})

module.exports = router;
