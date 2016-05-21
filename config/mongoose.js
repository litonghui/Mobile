/**
 * Created by litonghui on 2016/5/21.
 */

var mongoose = require('mongoose');
var config = require('./config');

module.exports = function(){
    var db = mongoose.connect(config.mongodb);
    require('../models/mongodb/config.server.models.js');
    return db;
}

