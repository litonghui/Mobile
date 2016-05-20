/**
 * Created by litonghui on 2016/5/19.
 */
var mongoose = require('mongoose');
var url = 'mongodb://localhost/ashion';
mongoose.connect(url);

var Schema = mongoose.Schema;
//骨架模版
var movieSchema = new Schema({
    doctor   : String,
    title    : String,
    language : String,
    country  : String,
})
//模型
var Movie = mongoose.model('Movie', movieSchema);
//存储数据
var moive = new Movie({
    title: '黑衣人三',
    doctor: '史密斯',
    country: '美国',
    language: '英语',
})

function getFromDb(info){
}
function writeToDb(){
    moive.save(function(err) {
        if (err) {
            console.log('保存失败')
            return;
        }
        console.log('ok');
    });
}

module.exports.getFromDb = getFromDb;
module.exports.writeToDb = writeToDb;





