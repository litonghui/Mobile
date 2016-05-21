/**
 * Created by litonghui on 2016/5/18.
 */
var express = require('express');
var reader = require('../models/requestdb/local');
var service = require('../models/requestdb/remote');
var dbhelper = require('../models/mongodb/dbhelper')


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
/*router.use('/',function(req,res){
    service.getrequest(req.url,function(result){
        res.send(result);
    });
});*/
router.use('/setting.html?',function(req,res){
    dbhelper.setConfig(req,function(result){
        res.send(result);
    });
});

router.use('/getting.html?',function(req,res){
   dbhelper.getConfig(req,function(result){
       res.send(result);
   });
});

module.exports = router;