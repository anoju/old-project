var fuckBrowser = (/MSIE ((5\.5)|6)/.test(navigator.userAgent) && navigator.platform == "Win32");
var fuckBrowser2 = (/MSIE ((5\.5)|6|7)/.test(navigator.userAgent) && navigator.platform == "Win32");
var animate = true;
if(fuckBrowser2) { animate = false; }

//var crtUrl = $.url(); 
//var phost = crtUrl.attr('host');
//var strDepth = crtUrl.segment(1).toLowerCase();

//if (phost !== 'www.pepsievent.co.kr' && phost !== 'pepsievent.co.kr'){location.href = 'http://www.pepsievent.co.kr/' + strDepth + '/';}

//var intDepth = dfVals[strDepth]["mOver"];
//var bOrder = dfVals[strDepth]["bOrder"];
var bricks = [];

$(document).ready(function(){
	//menuSelector(intDepth);
//	if (strDepth != "pep-event-2"){ initMasonry(); } //이벤트2 일때		06.01
	initMasonry();
	//mkBricks();

	/*menu*/
	$("nav>ul>li").hover(
		function(){ if (!fuckBrowser) { $(this).addClass("over"); } },
		function(){ $(this).removeClass("over"); }
	);

	/*policy*/
	//$(".fPolicy").colorbox({"fixed": true, "scrolling": false});
});


function initMasonry(){
	$('.contents').masonry({
		itemSelector : '.item', 
		columnWidth: 275, 
		isAnimated: animate, 
		animationOptions: {
			easing: 'easeOutSine'
		}
	});
}

/***************************************/
function menuSelector(val){
	if (val != null){
		$("nav>ul>li").eq(val).addClass("now");
	}
}
/*-------------------------------------------------------*/

/***************************************/
function mkBricks(){
	if ($.isArray(bOrder)){
		for (i = 0; i < bOrder.length; i++){
			bricks.push(items[bOrder[i]]);
		};

		for (i = 0; i <= bricks.length; i++){
			var $strDiv = $(bricks[i]);
			$('.contents').append($strDiv).masonry('appended', $strDiv);
		}
	}
}
/*-------------------------------------------------------*/

/***************************************/
jQuery.cachedScript = function(url, options) {
	options = $.extend(options || {}, {
		dataType: "script",
		cache: false,
		url: url
	});
	return jQuery.ajax(options);
};
 /* Usage
$.cachedScript("/js/pep-evt3-layer.js").done(function(script, textStatus) {
	console.log( textStatus );
});*/
/*-------------------------------------------------------*/

/***************************************/
$.fn.outerHTML = function() {
    var el = $(this);
    if( !el[0] ) return "";
 
    if (el[0].outerHTML) {
        return el[0].outerHTML;
    } else {
        var content = el.wrap('<p/>').parent().html();
        el.unwrap();
        return content;
    }
}
/*-------------------------------------------------------*/

/***************************************/
function makeRndNum(val1, val2){
	var rnd = Math.floor(Math.random() * val2) + val1;
	return rnd;
}
/*-------------------------------------------------------*/

/***************************************/
var SITE_URI = "http://pepsievent.co.kr/";



var intWidth = 626;
var intHeight = 436;
var spX = (screen.width / 2) - (intWidth / 2);
var spY = (screen.height / 2) - (intHeight / 2);

function share2FB(sw, picIdx){
	var title = encodeURIComponent("PEPSI PEP CAMPAIGN!");;
	var desc  = encodeURIComponent("PEPSI의 다양한 컨텐츠 및 이벤트에 참여해보세요. PEP한 경품이 팍팍!");
	var img  = encodeURIComponent(SITE_URI + "img/shareThumb_" + picIdx + ".jpg");
	var link  = encodeURIComponent("http://www.pepsievent.co.kr/");
//	var fbUrl =	SITE_URI + "dfsns/_facebook/auth.php?cmd=LOGIN|ALBUM&title=" + title + "&desc=" + desc + "&link=" + link + "&img=" + img;
	if (sw == 'N')	{ 
		link = link + strDepth + '/' 
		if (dfVals[strDepth]["snsTiitle"] != null) { title = encodeURIComponent(dfVals[strDepth]["snsTiitle"]); }
		if (dfVals[strDepth]["snsDesc"] != null) { desc = encodeURIComponent(dfVals[strDepth]["snsDesc"]); }
	}
	if(picIdx == 0 || picIdx == '0'){
		var fbshare = "https://www.facebook.com/sharer.php?s=100&p[url]=" + link + "&p[title]=" + title + "&p[summary]=" + desc + "&p[images][0]=" + img;
		window.open(fbshare, 'fbpopup', 'toolbar=0, status=0, width=' + intWidth + ', height=' + intHeight + ', left=' + spX + ', top=' + spY);
	}
/*
	else if(picIdx == 1 || picIdx == '1' || picIdx == 2 || picIdx == '2' || picIdx == 3 || picIdx == '3' || picIdx == 4 || picIdx == '4' || picIdx == 5 || picIdx == '5' || picIdx == 6 || picIdx == '6') {
		var fbPop = window.open(fbUrl,"FB_LOGIN","width=574,height=680");	
	}
*/
}


function share2TW(sw, picIdx){
	var title = encodeURIComponent("PEPSI PEP CAMPAIGN!");;
	var desc  = encodeURIComponent("PEPSI의 다양한 컨텐츠 및 이벤트에 참여해보세요. PEP한 경품이 팍팍!");
	var img  = encodeURIComponent(SITE_URI + "img/shareThumb_" + picIdx + ".jpg");
	var link  = encodeURIComponent("http://www.pepsievent.co.kr/");
//	var twUrl =	SITE_URI + "dfsns/_twitter/auth.php?cmd=LOGIN|ALBUM&title=" + title + "&desc=" + desc + "&link=" + link + "&img=" + img1;	
	if (sw == 'N')	{ 
		link = link + strDepth + '/' 
		if (dfVals[strDepth]["snsTiitle"] != null) { title = encodeURIComponent(dfVals[strDepth]["snsTiitle"]); }
		if (dfVals[strDepth]["snsDesc"] != null) { desc = encodeURIComponent(dfVals[strDepth]["snsDesc"]); }
	}
	if(picIdx == 0 || picIdx == '0'){
		var twshare = "http://twitter.com/share?url=" + link + "&text=" + title + ' ' + desc;
		window.open(twshare, 'twpopup', 'toolbar=0, status=0, width=' + intWidth + ', height=' + intHeight + ', left=' + spX + ', top=' + spY);
	}
/*
	else if(picIdx == 1 || picIdx == '1' || picIdx == 2 || picIdx == '2' || picIdx == 3 || picIdx == '3' || picIdx == 4 || picIdx == '4' || picIdx == 5 || picIdx == '5' || picIdx == 6 || picIdx == '6'){
		var twPop = window.open(twUrl,"TW_LOGIN","width=794,height=680");	
	}	
*/
}
/*-------------------------------------------------------*/