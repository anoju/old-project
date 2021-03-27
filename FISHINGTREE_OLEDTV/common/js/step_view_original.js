var scrollW; // 현재 브라우저의 가로 값 
var scrollH ; // 현재 브라우저의 세로 값
var posArr = [] ; // 컨텐츠가 담겨져 있는 스텝별 세로 위치의 배열 값
var cont = $('.contentBox').find('.cont') ; // 각 컨텐츠 박스
var contL = cont.length ; // 컨텐츠박스의 개수
var contH = cont.height() ; // 현재 컨텐츠 박스의 세로 값
var scrollL ; // 브라우저의 가로 스크롤 값
var fixedLeft = $('.fixedLeft') ;

var fixedNavi = $( '.thumNaviBox' ) ; // 우측하단 미니 내비게이션
var fixedNaviList = $( 'ul.menu li' , fixedNavi ) ; // 우측하단 미니 내비게이션
var milestone = $('.Milestone') ; // 미니 내비의 현재 컨텐츠 표시
var overBtn = $( '.overBtn' , '.thumNaviBox' ) ; // 마우스 표기버튼

var leftMenu = $('.leftMenu') ;
var leftMenuList = $('.leftMenu .list') ;
var viewBtn = $( 'p.btn' , cont ) ; // 2Depth 활성화 버튼
var backBtn = $( '.back' , '.overBox' ) ; // 2Depth 비활성화 버튼
var idx1 ; // 1Depth 선택자의 전역변수
var idx2 ; // 2Depth 선택자의 전역변수
var autoPlayChk = 1 ; // 동영상 플레이 자동/수동 체크
var chkMoveNum ; // 서브 페이지에서 넘어오는 링크 값

var graBox = $('<div class="graBox" />') ; // 배경의 좌우 그라데이션을 담을 박스
var lgIntro = $('.lgIntro') ; // 컨텐츠 최상 부모
var graL = $('<p class="graL" />') ; // 배경 좌측 그라데이션
var graR = $('<p class="graR" />') ; // 배경 우측 그라데이션

defaultWork () ;

function defaultWork () {	
	$('html , body').css({ 'overflow-x' : 'hidden' }) ;
	var UserAgent = navigator.userAgent;	

	if (UserAgent.match(/iPhone|iPad|iPad2|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/) != null){	  		  
		if ($(window).width() >= 770){
			fixedLeft.css({"position":"fixed","top":"0px","left":"10px","margin-left":"0px"});
		}else{
			fixedLeft.css({"position":"absolute","top":$(this).scrollTop(),"left":"10px","margin-left":"0px"});
		}	  
	}

	lgIntro.wrap( graBox ) ;
	lgIntro.parent().append( graL ) ;
	lgIntro.parent().append( graR ) ;	
	// 배경 그라데이션 사이즈 조절
	$('.graBox').css({ 'width' : lgIntro.width() + 'px' }) ;
	graL.css({ 'height' : lgIntro.height() + 'px' }) ;
	graR.css({ 'height' : lgIntro.height() + 'px' }) ;

	pageResize () ;
}

$(window).resize(function(){
	pageResize () ;
	contArrHandler () ;
}) ;

function pageResize () {
//	$('html , body').css({ 'overflow-x' : 'hidden' }) ;
	scrollW = $(window).width() ; 
	scrollH  = $(window).height() ;	

	var minH = 650 ; // 브라우저의 최소 세로값	

	if ( scrollW > 1280 ) {				
		$('body , .lgIntro').removeClass( 'small' ).addClass( 'big' ) ;
		fixedLeft.css({ 'left' : '50%' , 'margin-left' : -(fixedLeft.width() /2) + 'px' }) ;

	} else if (1280 >= scrollW && scrollW > 1003 ) {
		$('body , .lgIntro').removeClass( 'big' ).addClass( 'small' ) ;
		fixedLeft.css({ 'left' : '50%' , 'margin-left' : -(fixedLeft.width() /2) + 'px' }) ;
	} 
	
	if ( scrollW <= 1003 ) {
		fixedLeft.css({ 'left' : '0px' , 'margin-left' : -scrollL + 'px' }) ;
	}
	
	if ( scrollH < minH ) {
		$('body , .lgIntro').removeClass( 'big' ).addClass( 'small' ) ;
		fixedLeft.css({ 'left' : '50%' , 'margin-left' : -(fixedLeft.width() /2) + 'px' }) ;
		leftMenu.css({ 'height' : minH + 'px' }) ;
	}
	var UserAgent = navigator.userAgent;	
	if (UserAgent.match(/iPhone|iPad|iPad2|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/) == null){	  		  
		if ( scrollW <= 1003 && scrollH < minH ) {
			fixedLeft.css({ 'left' : '0px' , 'margin-left' : -scrollL + 'px' }) ;
		}
	}

	leftMenu.css({ 'height' : scrollH + 'px' }) ; // 레프트 메뉴의 세로 중앙으로 정렬
	var halfH = leftMenuList.height() / 2 ;
	leftMenuList.css({ 'margin-top' : -halfH + 'px' }) ;

	$('html , body').css({ 'overflow-x' : 'visible' }) ;
//	alert ('1') ;

}

firstIntro () ;

function firstIntro () {	// 최초 로딩시 인트로 게이지바
//	$('body').addClass('scrollOff-y') ;	
	cont.children().hide () ; // 최초 로딩시 컨텐츠 숨김
	$( 'li' , leftMenuList ).unbind( 'click' , menuMoveHandler ) ;	
	fixedNavi.hide() ;

	var introBox = $('.introBox') ;
	var guageBox = $('.guageBox') ;
	var guageBar = $( '.guageBar' , guageBox ) ;
	var guage = $( '.guage' , guageBox ) ;

	var num = $('.contentBox').find('.cont').length - 1 ;
	lastContTop = $('.contentBox').find('.cont').eq(num).offset().top ;


	chkMoveNum = location.href.split('?chkNum=')[1] ;

	if ( chkMoveNum > -1 ) {
		removeIntro () ;
	} else {
		$('html , body').animate({ 'scrollTop' : '0px' }) ;
		guageBox
		.css({ 'top' : $(window).height() / 2 + 'px' , 'margin-left' : - guageBox.width() / 2 + 'px' ,  'margin-top' : - guageBox.height() / 2 + 'px'  })
		.fadeTo( 1000 , 1.0 , function(){
			guage.animate({ 'height' : guageBar.height() + 'px' } , 0 , 'easeInOutQuart' , function(){	// 1400 ~ 2400 초가 적당
				removeIntro () ;
			})  ;
		}) ;	
	}
}

function contArrHandler () {
	posArr = [] ;
	for ( var i = 0 ; i < contL ; i ++ ) {
		posArr.push( cont.eq(i).offset().top ) ; // 현재 페이지의 컨텐츠 개수를 알아냅니다.
	}
}

function removeIntro () { // 최초 스크롤링 값과 각 컨텐츠 별 스크롤 위치값을 구함		
	cont.children().fadeIn () ; // 로딩 완료 후 컨텐츠 보여줌

	if ( chkMoveNum > -1 ) {		
		
		if ( $('body').has('.introBox') ) $('.introBox').remove() ;

		contArrHandler () ;
		$('html , body').animate({ 'scrollTop' : $('.contentBox').find('.cont').eq(chkMoveNum).offset().top + 'px' } , 0 ) ;		
		$( 'li' , leftMenuList ).bind( 'click' , menuMoveHandler ) ;
		fixedNavi.show() ;

		leftMenuOverChk ( chkMoveNum ) ;
		scrolled = $(window).scrollTop() ;
		viewBtnChk ( chkMoveNum ) ;
		idx1 = chkMoveNum ;

		
	} else {
		$('html , body').stop().animate({ 'scrollTop' : lastContTop + 'px' } , 0  , 'easeInOutQuart' , function(e){ // 마지막 컨텐츠까지 스크롤 4000초가 적당 //  최하단까지 스크롤			
			if ( $('body').has('.introBox') ) $('.introBox').remove() ;

			contArrHandler () ;

//			$('html , body').animate({ 'scrollTop' : $('.contentBox').find('.cont').eq(7).offset().top + 'px' } , 0) ;
			$('html , body').animate({ 'scrollTop' : $('.contentBox').find('.cont').eq(6).offset().top + 'px' } , 0) ;
			$( 'li' , leftMenuList ).bind( 'click' , menuMoveHandler ) ;
			fixedNavi.show() ;

			// 배경 그라데이션 사이즈 조절
			$('.graBox').css({ 'width' : lgIntro.width() + 'px' }) ;
			graL.css({ 'height' : lgIntro.height() + 'px' }) ;
			graR.css({ 'height' : lgIntro.height() + 'px' }) ;

		}) ;
	}


}

function menuMoveHandler (e) { // 레프트 메뉴 클릭시 원하는 컨텐츠로 스크롤을 시켜줍니다.	
	e.preventDefault();
	chk2DepVnH () ;

	var num = $(this).index() ;
	
	$('html , body').stop().animate({ 'scrollTop' : posArr[num] } , 3000 , 'easeInOutQuart' ,function(){
		$('body').css('height', '+=1');

		//Remove width css
		setTimeout(function() {
		  $('body').css('height', '');
		}, 1);
	}) ; // 원래는 4초 ( 익스8에서는 3초가 적당한 듯 하다. )

//	$('html , body').stop().animate({ 'scrollTop' : posArr[num] } , { duration:2500 , complete:function(){
////		alert ('1') ;
//	} }) ; // 원래는 4초 ( 익스8에서는 3초가 적당한 듯 하다. )
	return false ;
}


$(window).bind( 'orientationchange' , function(){
	pageResize();
	var UserAgent = navigator.userAgent;	
	if (UserAgent.match(/iPhone|iPad|iPad2|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/) != null){	  		  
	  
	  if ($(window).width() >= 770){
		fixedLeft.css({"position":"fixed","top":"0px","left":"10px","margin-left":"0px"});
	  }else{
		fixedLeft.css({"position":"absolute","top":$(this).scrollTop(),"left":"10px","margin-left":"0px"});
	  }	  
	}
});
$(window).bind( 'scroll touchmove' , scrollOptionHandler ) ;

function scrollOptionHandler () { // 브라우저 스크롤링 함수
	var UserAgent = navigator.userAgent;	
	if (UserAgent.match(/iPhone|iPad|iPad2|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/) != null){	  		  
	  
	  if ($(window).width() >= 770){
		fixedLeft.css({"position":"fixed","top":"0px","left":"10px","margin-left":"0px"});
	  }else{
		fixedLeft.css({"position":"absolute","top":$(this).scrollTop(),"left":"10px","margin-left":"0px"});
	  }	  
	}

	scrollL = $(window).scrollLeft() ;
	scrolled = $(window).scrollTop() ;
	
	if ( scrolled == 0 && idx1 == 0 ) { // 1Depth 최상단 무비클립 제어
		if ( $('body').attr('class') == 'big' ) {
			$('.movBox').html('<object width="687" height="391"><param name="movie" value="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=1" type="application/x-shockwave-flash" width="687" height="391" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>') ;
		} else if ( $('body').attr('class') == 'small' ) {
			$('.movBox').html('<object width="593" height="337"><param name="movie" value="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' + autoPlayChk + '&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=1" type="application/x-shockwave-flash" width="593" height="337" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>') ;
		}
		
	} else {
		if ( $('.movBox').children().length == 1 ) {
			$('.movBox').html('') ;
		}
	}

	chkAnimation () ;
	var UserAgent = navigator.userAgent;	
	if (UserAgent.match(/iPhone|iPad|iPad2|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/) == null){	  		  	  
		pageResize();
	}
	
}

function scrollOptionHandler2 () {
	chk2DepVnH () ;	
}

function chk2DepVnH () { // 스크롤 움직임을 감지할 경우 열려있는 2Depth 를 확인한다.
	if ( idx2 != null ) {
		hideViewHandler () ;
	}
}

function chkAnimation () { // 스크롤링시 움직일 컨텐츠를 확인합니다.	
	var gapH = 400

	if (  scrolled < posArr[1] - gapH ) {
		idx1 = 0 ;
		depth1Option( scrolled , idx1+1 ) ;
		leftMenuOverChk ( idx1 ) ;

	} else if ( posArr[1] - gapH <= scrolled && scrolled < posArr[2] - gapH ) {
		idx1 = 1 ;
		depth1Option( scrolled , idx1 ) ;
		depth1Option( scrolled , idx1+1 ) ;
		leftMenuOverChk ( idx1 ) ;
		viewBtnChk ( idx1 ) ;

	} else if ( posArr[2] - gapH <= scrolled && scrolled < posArr[3] - gapH ) {
		idx1 = 2 ;
		depth1Option( scrolled , idx1 ) ;
		depth1Option( scrolled , idx1 +1 ) ;
		leftMenuOverChk ( idx1 ) ;
		viewBtnChk ( idx1 ) ;

	} else if ( posArr[3] - gapH <= scrolled && scrolled < posArr[4] - gapH ) {
		idx1 = 3 ;
		depth1Option( scrolled , idx1 ) ;
		depth1Option( scrolled , idx1 + 1 ) ;
		leftMenuOverChk ( idx1 ) ;
		viewBtnChk ( idx1 ) ;

	} else if ( posArr[4] - gapH <= scrolled && scrolled < posArr[5] - gapH ) {
		idx1 = 4 ;
		depth1Option( scrolled , idx1 ) ;
		depth1Option( scrolled , idx1 +1 ) ;
		leftMenuOverChk ( idx1 ) ;
		viewBtnChk ( idx1 ) ;

	} else if ( posArr[5] - gapH <= scrolled && scrolled < posArr[6] - gapH ) {
		idx1 = 5 ;
		depth1Option( scrolled , idx1 ) ;
		depth1Option( scrolled , idx1 + 1 ) ;
		leftMenuOverChk ( idx1 ) ;
		viewBtnChk ( idx1 ) ;

	} else if ( posArr[6] - gapH <= scrolled && scrolled < posArr[7] - gapH ) {
		idx1 = 6 ;
		depth1Option( scrolled , idx1 ) ;
		depth1Option( scrolled , idx1 + 1 ) ;
		leftMenuOverChk ( idx1 ) ;
		viewBtnChk ( idx1 ) ;

	} else if ( scrolled > posArr[7] - cont.eq(7).height() ) {
		idx1 = 7 ;
		depth1Option( scrolled , idx1 -1 ) ;
		depth1Option( scrolled , idx1 ) ;
		leftMenuOverChk ( idx1 ) ;
	}

}

viewBtn.bind( 'click' , overViewHandler ) ;

function overViewHandler () { // 2Depth 디테일을 볼 수 있습니다.	
	fixedNavi.hide() ;
	var btn = $(this) ;
	idx2 = btn.closest('.cont').index() ;

//	if ( !$.browser.mozilla ){
//		var winW = $(window).width() ;
//		var sbarW = 17 ;
//
//		$('html , body').css({ 'overflow-y' : 'hidden' }) ;
//		$('body').css({ 'width' : winW , 'padding-right' : sbarW + 'px'}) ;
//		$('.fixedLeft').css({ 'left' : '50%' , 'margin-left' : - 640 - (sbarW/2) + 'px' }) ;
//		
//	}

//	cont.eq(idx2).find('.overBox').css('z-index' , '4') ;
	
	if ( $(window).scrollTop() != posArr[idx1] ) { // 열려질 2Depth가 정확한 스크롤 값에 와있지 않다면 스크롤값을 옮겨준다.
		
		$('html , body').stop().animate({ 'scrollTop' : posArr[idx1] } , { duration : 2500 , easing : 'easeInOutQuart' , complete : function(){
			overViewDetail () ;
		} }) ;

	} else {
		overViewDetail () ;
	}

}

backBtn.bind( 'click' , hideViewHandler ) ;

function hideViewHandler (e) { // 2Depth 디테일을 숨깁니다.	

	if ( !$.browser.mozilla ){
		var sbarW = 17 ;

		$('html , body').css({ 'overflow-y' : 'auto' }) ;
		$('body').css({ 'padding-right' : '0px'}) ;
		$('.fixedLeft').css({ 'left' : '50%' , 'margin-left' : - 640 + 'px' }) ;
	}

	cont.eq(idx2).find('.overBox').fadeOut('slow' , function(){
		cont.eq(idx2).find('.overBox').css({ 'z-index' : '-1' }) ;
		fixedNavi.show() ;
	}) ;

	return false ;	
}

function viewBtnChk ( i ) { // viewBtn의 노출을 제어합니다.
	var gapH = 200 ;
	var browser = $.browser;  // 현재 브라우저를 체크

	if ( posArr[i] - gapH < scrolled && scrolled < posArr[i] + gapH ) {

		if ( browser.msie && browser.version.slice(0,1) <= 8 ) {		
			cont.eq(i).find('.btn').show() ;
		} else {
			cont.eq(i).find('.btn').show().stop().animate({ 'opacity' : '1.0' } , 'fast' ) ;
		}
		
	} else {

		if ( browser.msie && browser.version.slice(0,1) <= 8 ) {		
			cont.eq(i).find('.btn').hide() ;
		} else {
			cont.eq(i).find('.btn').stop().animate({ 'opacity' : '0.0' } , 'fast' ) ;
		}
		
	}
}

function leftMenuOverChk ( idx1 ) { // 레프트 메뉴의 클릭된 현재 메뉴를 표기합니다.

	$( 'li a' , leftMenuList).removeClass( 'active' ) ;
	$( 'li a' , leftMenuList).eq( idx1 ).addClass( 'active' ) ;

	overBtn.stop().animate({ 'top' : fixedNaviList.eq( idx1 ).position().top + 'px' }) ;
}

fixedNaviList.bind( 'focus , mouseenter' , fixedNaviOverHandler ) ;
$('.thumNaviBox').bind( 'mouseleave' , fixedNaviOutHandler ) ;

function fixedNaviOverHandler (e) { // 미니 네비게이팅 옵션 입니다.
	milestone.show() ;
	var num = $(this).index() ;

	var chkClass = milestone.attr( 'class' ).split(' ')[1] ;
	milestone.removeClass( chkClass ).addClass( 'num' + (num+1) ) ;

	overBtn.stop().animate({ 'top' : fixedNaviList.eq(num).position().top + 'px' }) ;
	milestone.css({ 'top' : fixedNaviList.eq(num).position().top + (fixedNaviList.eq(num).height()/2) + 'px' }) ;	

	overBtn.bind( 'click' , function(){
		$(this).hide() ;
		$('html , body').stop().animate({ 'scrollTop' : posArr[num] } , 3000 , 'easeInOutQuart' , function(){
			overBtn.show() ;
		}) ;
	}) ;
}

function fixedNaviOutHandler () {
	milestone.hide() ;
	leftMenuOverChk ( idx1 ) ;
}

function depth1Option ( scrolled , n ) { // 1Depth의 컨텐츠들의 움직임
	var chkClass = $('body').attr('class') ;

	if ( chkClass == 'big' ) {
		if (n == 1) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 100 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 300 + 'px' }) ; //Earth
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 1.25)) + 1020 + 'px' }) ; //SpaceShip
			$('.img.num3' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 2.5)) + 2075 + 'px' }) ; //Astronaut		
		} else if (n == 2) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 215 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 590 + 'px' }) ; //Hiker
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 1.25)) + 2100 + 'px' }) ; //Mongus
		} else if (n == 3) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 330 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 790 + 'px' }) ; //1St Runners
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 1690 + 'px' }) ; //Runners
		} else if (n == 4) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 440 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 2175 + 'px' }) ; //LG Book
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 1345 + 'px' }) ; //Paper
		} else if (n == 5) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 545 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 1232 + 'px' }) ; //Crocodile
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 3045 + 'px' }) ; //Turtle
			$('.img.num3' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 2805 + 'px' }) ; //Bird
		} else if (n == 6) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 635 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.50)) + 3200 + 'px' }) ; //Jellyfish_b
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 4300 + 'px' }) ; //Jellyfish_s
			$('.img.num3' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 1087 + 'px' }) ; //Shark
			$('.img.num4' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 1.25)) + 5777 + 'px' }) ; //Baby
		} else if (n == 7) {		
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.35)) - 1775 + 'px' }) ; //Text
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 1992 + 'px' }) ; //LG OLED TV			
		}
	} else {
		if (n == 1) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 95 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 155 + 'px' }) ; //Earth
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 1.25)) + 850 + 'px' }) ; //SpaceShip
			$('.img.num3' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 2.5)) + 1720 + 'px' }) ; //Astronaut		
		} else if (n == 2) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 185 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 465 + 'px' }) ; //Hiker
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 1.25)) + 1755 + 'px' }) ; //Mongus
		} else if (n == 3) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 278 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 714 + 'px' }) ; //1St Runners
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 1390 + 'px' }) ; //Runners
		} else if (n == 4) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 370 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 1850 + 'px' }) ; //LG Book
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 1133 + 'px' }) ; //Paper
		} else if (n == 5) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 460 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 987 + 'px' }) ; //Crocodile
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 2555 + 'px' }) ; //Turtle
			$('.img.num3' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 2357 + 'px' }) ; //Bird
		} else if (n == 6) {
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.15)) - 550 + 'px' }) ; //Text
			$('.img.num1' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.50)) + 2850 + 'px' }) ; //Jellyfish_b
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.75)) + 3875 + 'px' }) ; //Jellyfish_s
			$('.img.num3' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 925 + 'px' }) ; //Shark
			$('.img.num4' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 1.25)) + 4850 + 'px' }) ; //Baby
		} else if (n == 7) {		
			$('p.text' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * -0.35)) - 1510 + 'px' }) ; //Text
			$('.img.num2' , cont.eq(n)).css({ 'top' : (0-(( scrolled/2) * 0.25)) + 1650 + 'px' }) ; //LG OLED TV
		}
	}
}

function overViewDetail () { // 2Depth의 컨텐츠들의 움직임

//	cont.eq(idx2).find('.overBox').fadeIn('slow' , function(){
//	cont.eq(idx2).find('.overBox').css('z-index' , '4').fadeIn('slow' , function(){	
//	trace ( idx1 , idx2 ) ;


	if ( !$.browser.mozilla ){	// 오버뷰 클릭시 스크롤을 없애줍니다.
		var winW = $(window).width() ;
		var sbarW = 17 ;

		setTimeout(function(){
			$('html , body').css({ 'overflow-y' : 'hidden' }) ;
			$('body').css({ 'padding-right' : sbarW + 'px'}) ;
			$('.fixedLeft').css({ 'left' : '50%' , 'margin-left' : - 640 - (sbarW/2) + 'px' }) ;
		} , 10) ;
	}


	var idx2Box = cont.eq(idx2).find('.overBox') ;
	var chkClass = $('body').attr('class') ;

	if ( chkClass == 'big' ) {

		if ( idx2 == 1 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.num1' , idx2Box ).css({ 'top' : '49px' }).animate({ 'top' : '75px' } , 800 , 'easeOutQuart' ) ; /* Tvs */
			$( '.num2' , idx2Box ).css({ 'top' : '59px' }).animate({ 'top' : '75px' } , 1000 , 'easeOutQuart' ) ; /* Cabinet */
			$( '.over_text' , idx2Box ).css({ 'bottom' : '134px' }).animate({ 'bottom' : '84px'} , 1000 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).css({ 'left' : '381px' , 'opacity' : '0' }).delay(650).animate({ 'opacity' : '1.0' } , 500 , 'easeOutQuart' ) ; /* Back Btn */

		} else if ( idx2 == 2 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.num1' , idx2Box ).css({ 'left' : '-30px' }).animate({ 'left' : '0px' } , 800 , 'easeOutQuart' ) ; /* Tv */
			$( '.num2' , idx2Box ).css({ 'right' : '-150px' }).animate({ 'right' : '0px' } , 850 , 'easeOutQuart' ) ; /* Mongus */
			$( '.over_text' , idx2Box ).css({ 'right' : '-150px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).css({ 'left' : '732px' , 'opacity' : '0' }).delay(650).animate({ 'opacity' : '1.0' } , 650 , 'easeOutQuart' ) ; /* Back Btn */

		} else if ( idx2 == 3 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.num1' , idx2Box ).css({ 'left' : '151px' }).animate({ 'left' : '91px' } , 700 , 'easeOutQuart' ) ; /* 1st runner*/
			$( '.num2' , idx2Box ).css({ 'right' : '-150px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Runners */
			$( '.over_text' , idx2Box ).css({ 'right' : '-100px' }).animate({ 'right' : '0px' } , 850 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).css({ 'opacity' : '0.0' }).delay(650).css({ 'left' : '971px' }).animate({ 'opacity' : '1.0' } , 450 , 'easeOutQuart' ) ; /* Back Btn */
		
		} else if ( idx2 == 4 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.view' , idx2Box ).css({ 'left' : '50px' }).animate({ 'left' : '0px' } , 700 , 'easeOutQuart' ) ; /* Bg */
			$( '.num1' , idx2Box ).css({ 'left' : '-130px'}).animate({ 'left' : '0px' } , 700 , 'easeOutQuart' ) ; /* Block */
			$( '.num2' , idx2Box ).css({ 'left' : '0px' }).animate({ 'right' : '0px' } , 700 , 'easeOutQuart' ) ; /* Paper left */
			$( '.num3' , idx2Box ).css({ 'right' : '-30px' }).animate({ 'right' : '0px' } , 700 , 'easeOutQuart' ) ; /* Paper right */
			$( '.num4' , idx2Box ).css({ 'left' : '350px'}).animate({ 'left' : '424px' } , 900 , 'easeOutQuart' ) ; /* Tv */
			$( '.over_text' , idx2Box ).css({ 'right' : '-30px' }).animate({ 'right' : '0px' } , 700 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).css({ 'opacity' : '0.0' }).delay(650).css({ 'left' : '724px' }).animate({ 'opacity' : '1.0' } , 350 , 'easeOutQuart' ) ; /* Back Btn */

		} else if ( idx2 == 5 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.view' , idx2Box ).css({ 'left' : '-50px' }).animate({ 'left' : '0px' } , 700 , 'easeOutQuart' ) ; /* Bg */
			$( '.num1' , idx2Box ).css({ 'right' : '-100px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Tv */
			$( '.num2' , idx2Box ).css({ 'right' : '-100px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Turtle */
			$( '.num3' , idx2Box ).css({ 'left' : '-50px' }).animate({ 'left' : '0px' } , 800 , 'easeOutQuart' ) ; /* Women */
			$( '.over_text' , idx2Box ).css({ 'left' : '-30px' }).animate({ 'left' : '0px' } , 700 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).css({ 'opacity' : '0.0' }).delay(650).css({ 'left' : '30px' }).animate({ 'opacity' : '1.0' } , 350 , 'easeOutQuart' ) ; /* Back Btn */

		} else if ( idx2 == 6 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

	//		cont.eq(idx2).find('.overBox').css('z-index' , '4').fadeIn( 'slow' ) ;
			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.view' , idx2Box ).css({ 'left' : '-50px' }).animate({ 'left' : '0px' } , 700 , 'easeOutQuart' ) ; /* Bg */
			$( '.num1' , idx2Box ).css({ 'right' : '-100px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Tv */
			$( '.num2' , idx2Box ).css({ 'left' : '-10px' }).animate({ 'left' : '0px' } , 750 , 'easeOutQuart' ) ; /* Baby */
			$( '.num3' , idx2Box ).css({ 'left' : '-10px' }).animate({ 'left' : '0px' } , 850 , 'easeOutQuart' ) ; /* Women*/
			$( '.over_text' , cont.eq(idx2) ).css({ 'left' : '-30px' }).animate({ 'left' : '0px' } , 1100 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , cont.eq(idx2) ).css({ 'opacity' : '0.0' }).delay(650).animate({ 'opacity' : '1.0' } , 350 , 'easeOutQuart' ) ; /* Back Btn */
		}

	} else if ( chkClass == 'small' ) {

		if ( idx2 == 1 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.num1' , idx2Box ).css({ 'top' : '24px' }).animate({ 'top' : '0px' } , 800 , 'easeOutQuart' ) ; /* Tvs */
			$( '.num2' , idx2Box ).css({ 'top' : '84px' }).animate({ 'top' : '50px' } , 1000 , 'easeOutQuart' ) ; /* Cabinet */
			$( '.over_text' , idx2Box ).css({ 'bottom' : '209px' }).animate({ 'bottom' : '159px'} , 1000 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).css({ 'left' : '704px' , 'opacity' : '0' }).delay(650).animate({ 'opacity' : '1.0' } , 500 , 'easeOutQuart' ) ; /* Back Btn */

		} else if ( idx2 == 2 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.num1' , idx2Box ).css({ 'left' : '-30px' }).animate({ 'left' : '0px' } , 1000 , 'easeOutQuart' ) ; /* Tv */
			$( '.num2' , idx2Box ).css({ 'right' : '-150px' }).animate({ 'right' : '0px' } , 950 , 'easeOutQuart' ) ; /* Mongus */
			$( '.over_text' , idx2Box ).css({ 'right' : '-150px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).css({ 'left' : '467px' , 'opacity' : '0' }).delay(650).animate({ 'opacity' : '1.0' } , 650 , 'easeOutQuart' ) ; /* Back Btn */

		} else if ( idx2 == 3 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.num1' , idx2Box ).css({ 'left' : '151px' }).animate({ 'left' : '91px' } , 700 , 'easeOutQuart' ) ; /* 1st runner*/
			$( '.num2' , idx2Box ).css({ 'right' : '-150px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Runners */
			$( '.over_text' , idx2Box ).css({ 'right' : '-100px' }).animate({ 'right' : '0px' } , 850 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).animate({ 'opacity' : '0.0' }).delay(500).css({ 'left' : '698px' }).animate({ 'opacity' : '1.0' } , 450 , 'easeOutQuart' ) ; /* Back Btn */
		
		} else if ( idx2 == 4 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.view' , idx2Box ).css({ 'left' : '25px' }).animate({ 'left' : '0px' } , 800 , 'easeOutQuart' ) ; /* Bg */
			$( '.num1' , idx2Box ).css({ 'left' : '-130px'}).animate({ 'left' : '0px' } , 800 , 'easeOutQuart' ) ; /* Block */
			$( '.num2' , idx2Box ).css({ 'left' : '-150px' }).animate({ 'left' : '0px' } , 950 , 'easeOutQuart' ) ; /* Paper left */
			$( '.num3' , idx2Box ).css({ 'right' : '-30px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Paper right */
			$( '.num4' , idx2Box ).css({ 'left' : '210px'}).animate({ 'left' : '285px' } , 1000 , 'easeOutQuart' ) ; /* Tv */
			$( '.over_text' , idx2Box ).css({ 'right' : '-30px' }).animate({ 'right' : '0px' } , 800 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).css({ 'left' : '473px' , 'opacity' : '0.0' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 , 'easeOutQuart' ) ; /* Back Btn */

		} else if ( idx2 == 5 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.view' , idx2Box ).css({ 'left' : '-50px' }).animate({ 'left' : '0px' } , 800 , 'easeOutQuart' ) ; /* Bg */
			$( '.num1' , idx2Box ).css({ 'right' : '-100px' }).animate({ 'right' : '0px' } , 900 , 'easeOutQuart' ) ; /* Tv */
			$( '.num2' , idx2Box ).css({ 'right' : '-100px' }).animate({ 'right' : '0px' } , 900 , 'easeOutQuart' ) ; /* Turtle */
			$( '.num3' , idx2Box ).css({ 'left' : '-50px' }).animate({ 'left' : '0px' } , 900 , 'easeOutQuart' ) ; /* Women */
			$( '.over_text' , idx2Box ).css({ 'left' : '-30px' }).animate({ 'left' : '0px' } , 800 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , idx2Box ).delay(1000).css({ 'left' : '30px' }).animate({ 'opacity' : '1.0' } , 350 , 'easeOutQuart' ) ; /* Back Btn */

		} else if ( idx2 == 6 ) {

			cont.eq(idx2).find('.overBox .view').show() ;
			cont.eq(idx2).find('.overBox .view p').show() ;

			cont.eq(idx2).find('.overBox').css('z-index' , '4').css('opacity' , '0').show().animate({ 'opacity' : '1.0' } , 1000 , 'easeOutQuart' ) ;
			$( '.view' , idx2Box ).css({ 'left' : '-50px' }).animate({ 'left' : '0px' } , 800 , 'easeOutQuart' ) ; /* Bg */
			$( '.num1' , idx2Box ).css({ 'right' : '-100px' }).animate({ 'right' : '0px' } , 900 , 'easeOutQuart' ) ; /* Tv */
			$( '.num2' , idx2Box ).css({ 'left' : '-10px' }).animate({ 'left' : '0px' } , 850 , 'easeOutQuart' ) ; /* Baby */
			$( '.num3' , idx2Box ).css({ 'left' : '-10px' }).animate({ 'left' : '0px' } , 950 , 'easeOutQuart' ) ; /* Women*/
			$( '.over_text' , cont.eq(idx2) ).css({ 'left' : '-30px' }).animate({ 'left' : '0px' } , 1100 , 'easeOutQuart' ) ; /* Text */
			$( '.back' , cont.eq(idx2) ).delay(1000).css({ 'left' : '240px' }).animate({ 'opacity' : '1.0' } , 350 , 'easeOutQuart' ) ; /* Back Btn */
		}
		
	}

}