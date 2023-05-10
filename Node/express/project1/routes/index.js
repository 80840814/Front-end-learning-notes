var express = require('express');
var router = express.Router();
var db = require('../sql')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/main', function (req, res, next) {
  //获取用户输入的内容
  var val = req.body;
  var userName = val.userName;
  var userPwd = val.userPwd;
  //查询数据库
  db.query('select * from user where username=? and userpwd=?', [userName, userPwd], function (err, data) {
    if (err) {
      throw err;
    } else if (data.length > 0) {
      res.render('main')
    } else {
      res.send('登录失败') 
    }

  })
});

module.exports = router;
