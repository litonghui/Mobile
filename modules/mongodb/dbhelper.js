/**
 * Created by litonghui on 2016/5/19.
 */
var mongoose = require('mongoose');
var config = 'mongodb://localhost/mobile';
var db = mongoose.connect(config);

var interfaceSchema = new mongoose.Schema({
    id: Number,
    title: String,
    type: String,
    time: Date
});
var interfaceModel = mongoose.model('InterfaceSchema',interfaceSchema);

function getFromDb(info){

}
function writeToDb(info){
    var newInfo = new interfaceModel(info);
    newInfo.save(function(err){
        if(err){
            console.log('err')
        }else{
            console.log('ok')
        }
    }
    );
}

module.exports.getFromDb = getFromDb;
module.exports.writeToDb = writeToDb;





