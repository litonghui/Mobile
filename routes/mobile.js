/**
 * Created by litonghui on 2016/5/18.
 */
var express = require('express');
var reader = require('../modules/local');
var service = require('../modules/remote');

var router = express.Router();


router.use('/serverconfig.html?',function(req,res){
    reader.getfile('serverconfig.html',function(result){
        res.send(result);
    });
});
router.use('/focus.html?',function(req,res){
    reader.getfile('focus.html',function(result){
        res.send(result);
    });
});
router.use('/',function(req,res){
    service.getrequest(req.url,function(result){
        res.send(result);
    });
});
module.exports = router;