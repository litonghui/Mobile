/**
 * Created by litonghui on 2016/5/20.
 */

var dbhelper = require('./mongodb/dbhelper')

function saveConfig(req){
    dbhelper.writeToDb();
}

module.exports.saveConfig = saveConfig;
