var XML=require('xml');

module.exports=function(data){
    
    var time = getCurrentTime();
    
    var msg="";
    if(data.MsgType=="text"){
        msg="谢谢关注,你说的是："+ data.Content;
    }else if (data.MsgType="location"){
        msg="你所在的位置: 经度："+ data.Location_X+"纬度："+ data.Location_Y;
    }else if (data.MsgType="image"){
        msg="你发的图片是："+ data.PicUrl;
    }
    console.log(msg);

    var response = [ { xml: [  { ToUserName : { _cdata: data.FromUserName }} , {FromUserName : { _cdata: data.ToUserName }} ,{CreateTime : time.toString()}, {MsgType : { _cdata: "text"}} , {content : { _cdata: msg }} ] } ];

    var result = XML(response, true);
    console.log(result);

    return result;
}

function getCurrentTime(){

    var date=new Date();
    var yy=date.getYear();
    var MM=date.getMonth() + 1;
    var dd=date.getDay();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var sss=date.getMilliseconds(); 
    return Date.UTC(yy,MM,dd,hh,mm,ss,sss);
    
}
