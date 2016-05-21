/**
 * Created by litonghui on 2016/5/18.
 */

var request = require('request');

function getrequest(_url,callback){
    request(_url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body);
            console.log(body)
        }
    })
}
module.exports.getrequest = getrequest;