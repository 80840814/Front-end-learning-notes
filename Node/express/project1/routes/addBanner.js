var express = require('express');
var router = express.Router();
var db = require('../sql.js')
var multiparty = require('multiparty')

router.post('/', function (req, res, next) {
    var form = new multiparty.Form();
    //上传的文件保留在摸一个目录
    form.uploadDir = './public/upload';
    form.parse(req, function (err, fields, files) {
        var imgName = fields.imgName[0];
        var pic = files.pic[0].path;
        db.query('insert into banner value (?,?,?)', [0, imgName, pic], function (err, data) {
            if (err) {
                throw err;
            } else {
                db.query('select * from banner', function (err, data) {
                    var pager = {};
                    //当前第几页，默认第一
                    pager.pageCurrent = 1;
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
            }
        })

    })
});


module.exports = router;