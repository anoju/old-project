/* 
	project : m.agroheart.co.kr
	author : an hyo ju
	date : 2013.07
*/

$(function(){
	gnbOnSet();	
	lnbMotion();	
	btnTop();
	tabUtil();
	globalListSet();
	historyListSet();
	//layerPopSet();
	titleSet();
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
		alert('사이트를 선택해주세요');
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

//글로벌 리스트(나라 선택)
function globalListSet() {
    if($('.globalList').size() > 0){
        $('.globalSlider').bxSlider({
            pager:false,
            minSlides: 3,
            maxSlides: 14,
            slideWidth: 80,
            slideMargin: 15,
            nextText:'다음',
            prevText:'이전'            
        });
        
    }
}

//소개 활동내역 (년도 선택)
function historyListSet() {
    if($('.historyList').size() > 0){
        $('.historySlider').bxSlider({
            pager:false,
            minSlides: 3,
            maxSlides: 5,
            slideWidth: 80,
            nextText:'다음',
            prevText:'이전'            
        });
        
    }
}

//페이지 title
function titleSet(){
    if($('.titCon').size() > 0){
        var tit = $('.titCon>h2').text();
        $('title').text(tit + ' || 농심 식문화연구 모바일');
    };
    
}










//레이어팝업 닫기
function layerPopSet() {
    $('.popClose').click(function(e) {
        e.preventDefault();
        
        if($("#agree").is(":checked")){
            $('.popBg').hide();
            $('.layerPop').hide();
        }else{
            alert('동의를 안하셨습니다.');
        }
    });
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