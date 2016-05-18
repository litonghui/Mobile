/**
 * Created by litonghui on 2016/5/18.
 */
var rf = require('fs');
function getfile(_filename,callback){
   rf.readFile('./data/'+_filename,'utf-8',function(err,data){
       if(err){
           callback(err);
       }else{
           callback(data);
       }
   })

}

module.exports.getfile = getfile;
