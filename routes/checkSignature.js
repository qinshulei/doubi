var crypto = require('crypto');

//sha1
function sha1(str) {
    var md5sum = crypto.createHash('sha1');
    md5sum.update(str,'utf8');
    str = md5sum.digest('hex');
    return str;
}

/**
 * check the signature of massage,
 * if correct return true.otherwise false.
 *
 * @param {String} signature  ,from weixin
 * @param {String} timestamp  ,from weixin
 * @param {String} nonce      ,from weixin
 * @param {String} token      ,set in config.js
 * @return {Boolean} true or false
 * @api public
 */
module.exports=function(signature,timestamp,nonce,token){
    var tmpArr =[token, timestamp, nonce];
    tmpArr.sort();
	var tmpStr =  tmpArr.join("");
    var md5sum = crypto.createHash('sha1');
	tmpStr = sha1( tmpStr );
	
	if( tmpStr == signature ){
		return true;
	}else{
		return false;
	}
};
