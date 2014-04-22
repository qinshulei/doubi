var xml = require('node-xml');

/**
 * parse xml string to data object. 
 * and callback when parse success.
 *
 * @param {String} str  ,message from weixin
 * @param {Function} callback      ,be invoked when parse success
 * @api public
 */
module.exports = function(str,callback){

    var data = {
        ToUserName : "",
        FromUserName : "",
        CreateTime : "",
        MsgType : "",
        Content : "",
        Location:X = "",
        Location:Y = "",
        Scale : 1,
        Label : "",
        PicUrl : "",
        FuncFlag : "",
    }

    var tempName="";
    var parse=new xml.SaxParser(function(cb){

        cb.onStartDocument(function() {

        });

        cb.onStartElementNS(function(elem,attra,prefix,uri,namespaces){
            tempName=elem;
        });
        
        cb.onCharacters(function(chars){
            chars=chars.replace(/(^\s*)|(\s*$)/g, "");
            if(tempName=="CreateTime"){
                data.CreateTime=chars;
            }else if(tempName=="Location_X"){
                data.Location_X=chars;
            }else if(tempName=="Location_Y"){
                 data.Location_Y=chars;
            }else if(tempName=="Scale"){
                 data.Scale=chars;
            }
        });


        cb.onCdata(function(cdata){
            if(tempName=="ToUserName"){
                 data.ToUserName=cdata;
            }else if(tempName=="FromUserName"){
                 data.FromUserName=cdata;
            }else if(tempName=="MsgType"){
                 data.MsgType=cdata;
            }else if(tempName=="Content"){
                 data.Content=cdata;
            }else if(tempName=="PicUrl"){
                 data.PicUrl=cdata;
            }else if(tempName=="Label"){
                 data.Label=cdata;
            }
            console.log("cdata:"+cdata);
        });

        cb.onComment(function(msg) {

        });

        cb.onEndElementNS(function(elem,prefix,uri){
            tempName="";
        });

        cb.onEndDocument(function(){
            console.log("onEndDocument");
            tempName="";

            callback(data);
        });

        cb.onWarning(function(msg) {
            console.log("warning:"+ msg);
        });
        
        cb.onError(function(err) {
            console.log("error:"+ err);
        });

    });
    
    parse.parseString(str);
}
