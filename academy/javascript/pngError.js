// JavaScript Document

function pngError2(){
var browser = navigator.userAgent.toLowerCase();
	var user_browser = (browser.indexOf('msie 6')!=-1);
	
	if ( user_browser ) {
		alert("익스플로러를 최신버전으로 업데이트 바랍니다.");
		DD_belatedPNG.fix('#contents, #header, img');
		}
}
addLoadEvent(pngError2)
		
		