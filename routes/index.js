var express = require('express');
var checkSignature=require('./checkSignature');
var config=require('../config');

var router = express.Router();
/* GET home page. */
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
        res.send();
    }else{
        //  res.render('index', { title: 'Express' });
    }

});

module.exports = router;
