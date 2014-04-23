var express = require('express');

var checkSignature=require('./checkSignature');
var parsexml=require('./parsexml');
var replydata=require('./replydata');
var config=require('../config');

var router = express.Router();

/* check signature. */
router.get('/', function(req, res) {
    var signature = req.signature;
    console.log("signature:"+signature);
    var timestamp = req.timestamp;
    console.log("timestamp:"+timestamp);
    var nonce = req.nonce;
    console.log("nonce:"+nonce);
    var echostr = req.echostr;
    console.log("echostr:"+echostr);
  

    if(checkSignature(signature,timestamp,nonce,token)){

        res.send(echostr);

    }else{
        //  res.render('index', { title: 'Express' });
        res.send("error");
    }


});

/* process message from weixin. */
router.post('/',function(req,res){

    var str="";

    req.on("data", function(data){
        str = str + data.toString();
    });

    req.on("end",function(){
        parsexml(str,function(data){

            res.send(replydata(data));

        });
    });

});

module.exports = router;
