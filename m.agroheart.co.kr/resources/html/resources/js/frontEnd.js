/* 
	project : m.cocoichibanya.co.kr
	author : an hyo ju
	date : 2013.07
*/

$(function(){
	gnbOnSet();	
	lnbMotion();	
	btnTop();
	//familySite();
	tabUtil();

});





// gnb On
function gnbOnSet() {
	var $h1 = $('.titCon h1').text();	
	$('#gnb a').each(function() {				
		if ( $(this).text() == $h1 ) {
			$(this).parent().addClass('on');
		}		
	});
}

// LNB
function lnbMotion() {	
	if($('#lnb').size() > 0){
		$('#lnb').delay(1500).slideUp();
	}

	$('.titCon h2 a').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('on');
		$('#lnb').slideToggle();
	});
}


// btnTop버튼
function btnTop(){
	$(".topBtn").click(function(evt){
		evt.preventDefault();
		$('html,body').animate( {scrollTop:0 }, 800, 'easeInOutQuart' );
	});
}

//패밀리 사이트
var goFamilySite = ""; 
function goFamilySite(url) {
	if (url != ""){location.href=url;}
}
function LinkGo(){ 
	if(goFamilySite!=""){
		window.open(goFamilySite,'',''); 
	}else{
		alert('사이트를 선택해주세요')
	}
}

//tabmenu
function tabUtil() {
	$('#tabNavi a').click(function(e) {
		e.preventDefault();
		$('.tabCon').hide();
		$($(this).attr('href')).show();
		$(this).parent().addClass('on').siblings().removeClass('on');
	});

	$('#tabNavi li:first').children('a').trigger('click');
}

// 미투데이
function sendMe2Day(msg, url, tag){

   var href = "http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(msg) + " " + encodeURIComponent(url) + "&new_post[tags]=" + encodeURIComponent(tag); 

   var a = window.open(href, 'me2Day', '');
   if( a ){
      a.focus();
   }
}

// 페이스북
function sendFaceBook(msg, url){

   var href = "http://www.facebook.com/sharer.php?u=" + url + "&t=" + encodeURIComponent(msg);

   var a = window.open(href, 'facebook', '');
   if( a ){
      a.focus();
    }
}