/**
 * Created by litonghui on 2016/5/21.
 */
var mongoose = require('mongoose');
var Config = mongoose.model('Config');

function setConfig(req,callback){
    var config = new Config({
        title:'splash',
        type:'normal',
    });
    config.save(function(err){
        if (err) {
            callback('保存失败');
            return;
        }
        callback('保存成功');
        return;
    })
}
function getConfig(req,callback){
    Config.find({},function(err,doce){
        if(err){
            callback('读取失败');
            return;
        }
        callback(doce);
    });
}

module.exports.setConfig = setConfig;
module.exports.getConfig = getConfig;