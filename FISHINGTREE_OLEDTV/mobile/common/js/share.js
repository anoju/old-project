function windowOpen() {
	var nUrl; var nWidth; var nHeight; var nLeft; var nTop; var nScroll;
	nUrl = arguments[0];
	nWidth = arguments[1];
	nHeight = arguments[2];
	nScroll = (arguments.length > 3 ? arguments[3] : "no");
	nLeft = (arguments.length > 4 ? arguments[4] : (screen.width / 2 - nWidth / 2));
	nTop = (arguments.length > 5 ? arguments[5] : (screen.height / 2 - nHeight / 2));
	
	if(IsMobile.detect()){
		top.location.href = nUrl;
	}else{
		winopen = window.open(nUrl, 'pbml_win', "left=" + nLeft + ",top=" + nTop + ",width=" + nWidth + ",height=" + nHeight + ",scrollbars=" + nScroll + ",toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no");
	}
	
}
function fbshare(){
	var thisHost = "http://" + location.host;
	var url = "http://lgoled.tv";
	
	imgUrl = thisHost + "/images/share/facebook_th.jpg";
	fbtitle = "Above and Beyond – LG OLED TV";
	fbSummary = "55 inches and only 4mm thin, the world’s largest and slimmest OLED TV with picture quality that is sheer perfection.";			

	if(IsMobile.detect()){
		url = "http://www.facebook.com/sharer.php?u=" + url + "&t=" + fbtitle + "&feature=share";
	}else{
		url = "http://www.facebook.com/sharer.php?s=100&p[url]=" + url + "&p[images][0]=" + imgUrl + "&p[title]=" + fbtitle + "&p[summary]=" + fbSummary;	
	}

	windowOpen(url, 700, 400, 'no');
	return false;	
}
function twshare(){
	var thisHost = "http://" + location.host;
	var ret = "http://bit.ly/UNCAv4";
	twtitle = "LG OLED TV – 55-inch and 4mm thin, the world's largest and slimmest with perfect picture quality. ";
	
	titl = twtitle;
	titl = titl.replace(/'/gi, "´");
	titl = titl.replace(/"/gi, "˝");
	titl = encodeURIComponent(titl);

	//var url = "http://twitter.com/share?url=&text=" + titl + ret + encodeURIComponent(" #LGOLEDTV");
	var url = "http://twitter.com/share?url=&text=" + titl + ret;

	windowOpen(url, 700, 400, 'no');
	return false;
}
var IsMobile = function(){
	return {
		detect:function(){
			var uagent = navigator.userAgent.toLowerCase(); 
			var list = this.mobiles;
			var ismobile = false;
			for(var d=0;d<list.length;d+=1){
				if(uagent.indexOf(list[d])!=-1){
					ismobile = true;
				}
			}
			return ismobile;
		},
		mobiles:[
			"midp","240x320","blackberry","netfront","nokia","panasonic",
			"portalmmm","sharp","sie-","sonyericsson","symbian",
			"windows ce","benq","mda","mot-","opera mini",
			"philips","pocket pc","sagem","samsung","sda",
			"sgh-","vodafone","xda","palm","iphone",
			"ipod","android","ipad","ipad2"
		]
	};
}();
