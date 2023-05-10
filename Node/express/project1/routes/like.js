var express = require('express');
var router = express.Router();
var db = require('../sql')

router.get('/', function (req, res, next) {
    //拿到的搜索数据
    console.log('like2' + req.query.selectVal);


    var like = req.query.like || req.query.selectVal;
    console.log(like);
    var pageNum = req.query.page;
    db.query(`select * from banner where name like '%${like}%'`, function (err, data) {
        var pager = {};
        //当前第几页，默认第一
        pager.pageCurrent = pageNum || 1;
        pager.maxNum = data.length;
        //每一页显示多少条记录  显示五条
        pager.pageSize = 5;
        //一共有多少页
        pager.pageCount = parseInt(Math.ceil(pager.maxNum / pager.pageSize))
        //修改了传递的数量
        var dataList = data.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize)
        if (err) {
            throw err
        } else {
            res.render('bannerList', {
                bannerList: dataList,
                pager: pager
            })
        }
    })

});

module.exports = router;