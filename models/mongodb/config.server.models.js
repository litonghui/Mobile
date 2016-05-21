/**
 * Created by litonghui on 2016/5/21.
 */

var mongoose = require('mongoose');

var configSchema  = new mongoose.Schema({
    title:String,
    type:String,
    time:Date
});

mongoose.model('Config', configSchema);
