var posArr = [] ;
var leftMenu = $('.leftMenu') ;
var fixedLeft = $('.fixedLeft') ;
var thumnavi = $('.thumNaviBox') ;
var chkSize ;
var _time = 2500 ;
var introBox = $('.intro') ;
var chkScroll = $(document).scrollTop() ;
var locate ;
var windowheight = $(window).height();
var scrollL ;
//var mouseP = $('.scrollUp') ;

var scrollTimer ;
var roofNum ;
var autoPlayChk = 1 ;
var overBtnChk = false ;
var chkMoveNum ;

var thumBtn = $( 'ul.list li' , thumnavi ) ;
var Milestone = $( '.Milestone' , thumnavi ) ;
var overBtn = $( '.overBtn' , thumnavi ) ;

firstchk () ;

function firstchk () {	
//	$(window).unbind( 'mousemove' , mousePointerHandler ) ;		

	$('html , body').animate({ 'scrollTop' : 0 + 'px' } , 500 ) ;
	chkBrowserSize () ;
	chkIntro () ;
	thumnavi.hide() ;
}

$(window).resize( chkBrowserSize ) ;

function chkBrowserSize () {
	chkBrowser () ;
	chkLeftBox () ;	
	defaultWork () ;
	chkThumNavi () ;

	if ( chkScroll == '0' && chkIndx == '0' ) {
		if ( chkSize == 'big' ) {
			$('.movBox').html('<object width="687" height="391"><param name="movie" value="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=1" type="application/x-shockwave-flash" width="687" height="391" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>') ;
		} else if ( chkSize == 'small' ) {
			$('.movBox').html('<object width="593" height="337"><param name="movie" value="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' + autoPlayChk + '&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=1" type="application/x-shockwave-flash" width="593" height="337" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>') ;
		}
	} else if ( chkScroll != 0 ) {
		$('.movBox').html('') ;
	}
}

function chkIntro () {
	var guageBar = $('.guageBar') ;
	var guageBox = $('.guageBox') ;	
//	guageBox.css({ 'top' : ($('.guageBox').height() / 2) +'px' }) ;
	guageBox.css({ 'top' : ( $(window).height() / 2 ) -  ($('.guageBox').height() / 2) + 'px' }) ;

	var guage = $( '.guage' , guageBar ) ;

	var scrolH = $(document).height() ;
	var lastNum = $('.contentBox .cont').length-1 ;

	for ( var i = 0 ; i < lastNum ; i ++ ) {
		$('.contentBox .cont').eq(i).children().hide () ;
	}
	$('.contentBox .cont .blank').show() ;	

	chkMoveNum = location.href.split('?chkNum=')[1] ;

	if ( chkMoveNum > -1 ) {
		$('div.step1').addClass('first') ;
		autoPlayChk = 0 ;

		introBox.hide( 10 , function(){
			defaultWork();
			$('.contentBox .cont').children().show () ;
		}) ;
		setTimeout(function(){
			$('html , body').stop().animate({ 'scrollTop' : posArr[chkMoveNum] } , _time , 'easeInOutQuart' , function(){
				thumnavi.show() ;
//				mouseP.show() ;
//				$('html , bdoy').bind( 'mousemove' , mousePointerHandler ) ;
				$( 'li' , leftMenu.find('.list') ).bind( 'click' , menuMoveHandler ) ;
			}) ;
		},500)
		
		
	} else {		
		autoPlayChk = 1 ;
		$( 'li' , leftMenu.find('.list') ).unbind( 'click' , menuMoveHandler ) ;

		guage.animate({ 'height' : guageBar.height() + 'px' } , 3000 , 'easeInOutQuart' , function(){
			$('html , body').animate({ 'scrollTop' : (scrolH - $(window).height()) + 'px' } , 4000 , 'easeInOutQuart' , function(){
				$('div.step1').addClass('first') ;
				introBox.remove () ;
				defaultWork () ;
				$('.contentBox .cont').children().show () ;
				thumnavi.show() ;
//				mouseP.show() ;
				setTimeout(function(){ $('html , body').animate({ 'scrollTop' : posArr[7] + 'px' } , _time , 'easeInOutQuart' )} , 0 ) ;				
//				$('html , bdoy').bind( 'mousemove' , mousePointerHandler ) ;
				$( 'li' , leftMenu.find('.list') ).bind( 'click' , menuMoveHandler ) ;
			}) ;
			scrollTimer = setInterval( roofScrollHandler , 20000 ) ;
		}) ;

//		guage.animate({ 'height' : guageBar.height() + 'px' } , 3000 , 'easeInOutQuart' , function(){
//			$('html , body').animate({ 'scrollTop' : (scrolH - $(window).height()) + 'px' } , 4000 , 'easeInOutQuart' , function(){
//				$('div.step1').addClass('first') ;
//				introBox.remove () ;
//				defaultWork () ;
//				$('.contentBox .cont').children().show () ;
//				thumnavi.fadeIn() ;
//				mouseP.show() ;
//				setTimeout(function(){ $('html , body').animate({ 'scrollTop' : posArr[7] + 'px' } , 2500 , 'easeInOutQuart' )} , 0 ) ;
//				$('html , bdoy').bind( 'mousemove' , mousePointerHandler ) ;
//				$( 'li' , leftMenu.find('.list') ).bind( 'click' , menuMoveHandler ) ;
//			}) ;
//			scrollTimer = setInterval( roofScrollHandler , 20000 ) ;
//		}) ;

	}
}

function chkBrowser () {
	var browserW = $(window).width() ;
	var browserH = $(window).height() ;	

	if ( browserH > 650 && browserW > 1280 ) {		
		$('.lgIntro , body').removeClass('small') ;		
		$('.lgIntro , body').addClass( 'big' ) ;
		chkSize = 'big' ;
	} else {
		$('.lgIntro , body').removeClass('big') ;		
		$('.lgIntro , body').addClass('small') ;
		chkSize = 'small' ;
	}
}

function chkLeftBox () {
	var maxW = $('.lgIntro').width() ;
	var fixedLeftH = leftMenu.height() ;
	var brW = $(window).width() ;
	var brH = $(window).height() ;
	var minH = 470 ;
	var gap = $('.lgIntro').css('padding-left').replace( 'px' , '' ) ;		

	if ( brW - ( gap * 2 ) < maxW ) {
		fixedLeft.css({ 'left' : '0px' , 'margin-left' : gap + 'px' }) ;		
	} else {		
		fixedLeft.css({ 'left' : '50%' , 'margin-left' : -( maxW / 2 ) + 'px' }) ;		
	}

	if ( brW - ( gap * 2 ) < maxW ) fixedLeft.css({ 'left' : '0px' , 'margin-left' : gap + 'px' }) ;
	else fixedLeft.css({ 'left' : '50%' , 'margin-left' : -( maxW / 2 ) + 'px' }) ;

	var list = $( '.list' , leftMenu ) ;
	if ( brH > minH ) {
		leftMenu.css({ 'height' : brH + 'px' }) ;		
	} else {
		leftMenu.css({ 'height' : minH + 'px' }) ;		
	}
}

function defaultWork () {
	posArr = [] ;
	var contentBox = $('.contentBox') ;
	var len = contentBox.find('> div.cont').length ;
	for ( var i = 0 ; i < len ; i ++ ) {
		posArr.push( contentBox.find('> div.cont').eq(i).offset().top ) ;
		scrollOptionHandler () ;
	}
	roofNum = posArr.length ;
}

function menuMoveHandler ( e ) {	
	overBtnChk = false ;
	clearInterval (scrollTimer) ;
//	mouseP.hide() ;
//	$(window).unbind( 'mousemove' , mousePointerHandler ) ;

	var btn = $(this) ;	
	var num = btn.index() ;	

	$('html , body').stop().animate({ 'scrollTop' : posArr[num] } , _time , 'easeInOutQuart' , function(){		
//		$('html , bdoy').bind( 'mousemove' , mousePointerHandler ) ;
//		mouseP.show() ;
	}) ;

	for ( var i = 0 ; i < posArr.length ; i ++ ) {
		var zIdx = $('.contentBox .cont').eq(i).find('p.btn').css('z-index') ;
		if ( zIdx < 13 ) {
			anotherHideDetailBox ( i ) ;			
		}
	}

	e.preventDefault() ;	
}

var viewBtn = $('.cont p.btn') ;
var chkIndx ;

viewBtn.bind( 'focus , mouseenter' , viewBtnOverHandler ) ;
viewBtn.bind( 'blue , mouseleave' , viewBtnOutHandler ) ;

function viewBtnOverHandler () {
//	mouseP.hide() ;
	$(this).addClass('over') ;
}
function viewBtnOutHandler () {
//	mouseP.show() ;
	$(this).removeClass('over') ;
}

viewBtn.bind( 'click' , viewDetailBox ) ;

function viewDetailBox (e) {
//	chkIndx = $(this).closest('.cont').index() ;
//	trace ( chkIndx ) ;
//	trace ( $(this).closest('.cont').attr('class') , posArr.length , chkIndx , posArr[chkIndx] , $(window).scrollTop() ) ;	
//	trace ( 'chkIndx : ' + chkIndx , 'num : ' + num ) ;

	for ( var i = 0 ; i < posArr.length ; i ++ ) {
		var zIdx = $('.contentBox .cont').eq(i).find('p.btn').css('z-index') ;
		if ( zIdx < 13 ) {
			anotherHideDetailBox ( i ) ;
			e.preventDefault() ;
		}
	}

	if ( chkMoveNum > -1 ) {
//		trace ( 'chkMoveNum -1 : ' + chkMoveNum ) ;		
		var num = $(this).closest('.cont').index() - 1 ;
	} else {
//		trace ( 'chkMoveNum : ' + chkMoveNum ) ;		
		var num = $(this).closest('.cont').index() ;
	}

	if ( posArr[num] != $(window).scrollTop() ) {
//		$('html , body').stop().animate({ 'scrollTop' : posArr[num] } , 1500 , 'easeInOutQuart' , viewDetailHandler ) ;
		$('html , body').stop().animate({ 'scrollTop' : posArr[num] } , 1500 , 'easeInOutQuart' , function(){
			chkIndx = num ;
			viewDetailHandler () ;
		}) ;
		e.preventDefault() ;
	} else {
		chkIndx = num ;
		viewDetailHandler () ;
		e.preventDefault() ;
	}
}

//function viewDetailBox (e) {
////	chkIndx = $(this).closest('.cont').index() ;
////	trace ( chkIndx ) ;
////	trace ( $(this).closest('.cont').attr('class') , posArr.length , chkIndx , posArr[chkIndx] , $(window).scrollTop() ) ;
//	var num = $(this).closest('.cont').index() ;
//	trace ( 'chkIndx : ' + chkIndx , 'num : ' + num ) ;
//
//	if ( posArr[chkIndx] != $(window).scrollTop() ) {
//		$('html , body').stop().animate({ 'scrollTop' : posArr[chkIndx] } , 1500 , 'easeInOutQuart' , viewDetailHandler ) ;
//		e.preventDefault() ;
//	} else {
//		viewDetailHandler () ;
//		e.preventDefault() ;
//	}
//}

function viewDetailHandler () {
	var box = $('.cont').eq(chkIndx) ;
	var btn = $( '.btn' , box ) ;
	var viewBox = $( '.view' , box ) ;
	var z = viewBox.closest('.overBox').css('z-index') - 1 ; 
	btn.css({ 'z-index' : z }) ;
	thumnavi.hide() ;
	viewBox.stop().animate({'left' : '0px'} , 1000 , 'easeInOutQuart' );

	var btnBack = $( '.back' , viewBox ) ;
	btnBack.bind( 'focus , mouseenter' , backOverHandler ) ;
	btnBack.bind( 'blur , mouseleave' , backOutHandler ) ;
	btnBack.bind( 'click' , hideDetailBox ) ;

	chkOverViewHandler ( chkIndx ) ;
}

function backOverHandler () {
//	mouseP.hide() ;
	$(this).addClass( 'over' ) ;
}

function backOutHandler () {
//	mouseP.show() ;
	$(this).removeClass( 'over' ) ;
}

function hideDetailBox ( e ) {
//	var viewBox = $('.contentBox .cont').eq(chkIndx).find('.view') ;
//	var btn = viewBox.closest('.cont').find('.btn') ;	

	var viewBox = $(this).closest('.view') ;
	var btn = $(this).closest('.cont').find('.btn') ;
	var z = viewBox.closest('.overBox').css('z-index') + 1 ;
	
	viewBox.stop().animate({'left' : '1080px'} , 1000 , 'easeInOutQuart' , function (){
		btn.css({ 'z-index' : z }) ;
		thumnavi.show() ;
	});
	
	return false ;
	e.preventDefault() ;
}

function anotherHideDetailBox ( i ) {	
	var viewBox = $('.contentBox .cont').eq(i).find('.view') ;
	var btn = viewBox.closest('.cont').find('.btn') ;	

	var z = viewBox.closest('.overBox').css('z-index') + 1 ; 	
	viewBox.stop().animate({'left' : '1080px'} , 1000 , 'easeInOutQuart' , function (){
		btn.css({ 'z-index' : z }) ;
		thumnavi.show() ;
	});

	return false ;
	e.preventDefault() ;
}

//$(document).bind( 'scroll' , scrollOptionHandler ) ;
$(window).bind( 'scroll' , scrollOptionHandler ) ;

function scrollOptionHandler () {
//	clearInterval  ( scrollTimer ) ;

	var brW = $(window).width() ;
	if ( brW < 1003 ) {		
		scrollL = $(this).scrollLeft() ;
		fixedLeft.css({ 'left' : '0px' , 'margin-left' : -scrollL + 'px' }) ;		
	}

	chkScroll = $(this).scrollTop() ;
	
	if ( chkScroll == '0' && chkIndx == '0' ) {
		if ( $('.movBox').children().length == '0' && chkSize == 'big' ) {
			$('.movBox').html('<object width="687" height="391"><param name="movie" value="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=1" type="application/x-shockwave-flash" width="687" height="391" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>') ;
		} else if ( $('.movBox').children().length == '0' && chkSize == 'small' ) {
			$('.movBox').html('<object width="593" height="337"><param name="movie" value="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' + autoPlayChk + '&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/QRLRp1vGvfA?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=' +autoPlayChk + '&amp;autohide=1" type="application/x-shockwave-flash" width="593" height="337" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>') ;
		}
	} else if ( chkScroll != 0 ) {
		$('.movBox').html('') ;
	}

	locate = $(window).scrollTop() / 2 ;

	for ( var i = 0 ; i < posArr.length ; i ++ ) {
		$( 'li' , leftMenu.find('.list') ).siblings().find('a').removeClass( 'active' ) ;

		if ( posArr[i] <= chkScroll && chkScroll < posArr[i+1] ) {			
			$( 'li' , leftMenu.find('.list') ).eq(i).find('a').addClass( 'active' ) ;						
			chkPos ( i ) ;

			if ( overBtnChk != true ) {
				chkThumOver ( i ) ;
			}

			break ;

		} else if ( posArr[posArr.length - 1] <= chkScroll || chkScroll == $('.lgIntro').height() - $(window).height() ) {
			$( 'li' , leftMenu.find('.list') ).eq(7).find('a').addClass( 'active' ) ;
			chkPos ( 7 ) ;

			if ( overBtnChk != true ) {
				chkThumOver ( 7 ) ;
			}
			
			break ;
		}
		
	}
	chkIndx = i ;
	chkThumNavi () ;
}


function chkPos ( i ) {	
		chkAniHandler ( i ) ;
}

function chkThumNavi () {
	var scrollH = $(window).height() - thumnavi.height() -parseFloat(thumnavi.css('bottom')) ;	
	thumnavi.css({ 'top' :  scrollH + 'px' }) ;	
}

thumnavi.bind( 'mouseenter' , function(){
	overBtn.show() ;
}) ;

thumnavi.bind( 'blur , mouseleave' , thumOutHandler ) ;

function thumOutHandler () {	
	var i = chkIndx ;
	var posT = $('.thumNaviBox > ul.list li').eq(i).position().top ;
	overBtn.stop().animate({ 'top' : posT + 'px' } , 'fast' ) ;
}

Milestone.hide() ;

thumBtn.bind( 'focus , mouseenter' , thumOverHandler ) ;
//thumnavi.bind( 'blur , mouseleave' , thumOutHandler ) ;
fixedLeft.bind( 'focus , mouseenter' , fixedLeftOverHandler ) ;
fixedLeft.bind( 'blur , mouseleave' , fixedLeftOutHandler ) ;

function fixedLeftOverHandler () {
//	mouseP.hide() ;
}

function fixedLeftOutHandler () {
//	mouseP.show() ;
}

function thumOverHandler () {		
//	mouseP.hide() ;
	var currentBox = $(this) ;
	var posT = currentBox.position().top ;
	var idx = currentBox.index() ;
	overBtn.stop().animate({ 'top' : posT + 'px' } , 'fast' ) ;
	Milestone.show().removeClass().addClass( 'Milestone' ).addClass( 'num' + ( idx + 1 ) ) ;	
	Milestone.css({ 'top' : ( posT + (Milestone.height() / 2)) + 'px' }) ;

	overBtn.click(function(){
		clearInterval (scrollTimer) ;
		$('html , body').stop().animate({ 'scrollTop' : posArr[idx] } , _time , 'easeInOutQuart' , function(){
			thumOutHandler () ;
		}) ;
		overBtnChk = true  ;
	}) ;
}

//function thumOutHandler () {
//	mouseP.show() ;
//	Milestone.hide() ;
//	overBtn.stop().animate({ 'top' : thumBtn.eq(chkIndx).position().top + 'px' }) ;
//}

function chkThumOver ( i ) {
	overBtn.show().stop().animate({ 'top' : thumBtn.eq(i).position().top + 'px' } , 'fast' ).show() ;
}

function mousePointerHandler ( e ) {
	var L = e.pageX - ( mouseP.width() / 2 + 50 ) ;
	var T = e.pageY - mouseP.height() - 20 ;
	mouseP.stop().animate({ 'left' : L + 'px' , 'top' : T + 'px' } , 300 ) ;
}

$('.lgIntro').mouseleave(function(){
//	mouseP.hide() ;
	if ( $(window).scrollTop() > posArr[posArr.length-1] ) {
		scrollTimer = setInterval( roofScrollHandler , 20000 ) ;
//		scrollTimer = setInterval( roofScrollHandler , 20000 ) ;
	}
	
}) ;

$('.lgIntro').mouseenter(function(){	
//	mouseP.show() ;
	clearInterval (scrollTimer) ;
}) ;

function roofScrollHandler () {
	if ( roofNum <= posArr.length && roofNum > -1 ) {
		-- roofNum ;	
		menuMoveHandler2 () ;
	} else {
		clearInterval  ( scrollTimer ) ;
	}
}

function menuMoveHandler2 (  ) {2012-08-28
//	mouseP.hide() ;
//	$(window).unbind( 'mousemove' , mousePointerHandler ) ;

	var num = roofNum ;

	$('html , body').stop().animate({ 'scrollTop' : posArr[num] } , _time , 'easeInOutQuart' , function(){		
//		$('html , bdoy').bind( 'mousemove' , mousePointerHandler ) ;
//		mouseP.show() ;
	}) ;

}

function chkAniHandler ( i ) {
	var contStep = $('.contentBox > div.cont') ;	
	var scrolled = $(window).scrollTop() / 2 ;
	var contH = contStep.height()
	var dep1 = contStep.eq(i) ;
	var dep1Next = contStep.eq(i+1) ;	

	if ( chkSize == 'big' ) {

		switch ( i ) {

			case 0 :
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH - 500) - ((scrolled*2)*0.2)) + 'px' }) ; //Earth
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH + 80) - ((scrolled*2)*0.6)) + 'px' }) ; //SpaceShip
				$( '.img.num3' , dep1Next ).css({ 'top' : ((contH + 227) - ((scrolled*2)*0.6)) + 'px' }) ; //Astronaut

				break ;

			case 1 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH - 500) - ((scrolled*2)*0.2)) + 'px' }) ; //Earth
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH + 80) - ((scrolled*2)*0.6)) + 'px' }) ; //SpaceShip
				$( '.img.num3' , dep1 ).css({ 'top' : ((contH + 227) - ((scrolled*2)*0.6)) + 'px' }) ; //Astronaut
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) + 170) - ((scrolled*2)*0.6)) + 'px' }) ; //Hiker	
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 230) - ((scrolled*2)*0.6)) + 'px' }) ; //Mongus

				break ;

			case 2 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i + 170) - ((scrolled*2)*0.6)) + 'px' }) ; //Hiker	
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 230) - ((scrolled*2)*0.6)) + 'px' }) ; //Mongus
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) + 150) - ((scrolled*2)*0.6)) + 'px' }) ; //1st runner
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 830) - ((scrolled*2)*0.8)) + 'px' }) ; //runners

				
				break ;
			
			case 3 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i + 150) - ((scrolled*2)*0.6)) + 'px' }) ; //1st runner
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 830) - ((scrolled*2)*0.8)) + 'px' }) ; //runners
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) + -1860) - ((scrolled*2)*0.3)) + 'px' }) ; //LG Book
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 615) - ((scrolled*2)*0.62)) + 'px' }) ; //Paper

				break ;
			
			case 4 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i + -1860) - ((scrolled*2)*0.3)) + 'px' }) ; //LG Book
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 615) - ((scrolled*2)*0.62)) + 'px' }) ; //Paper
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) + 176) - ((scrolled*2)*0.6)) + 'px' }) ; //Crocodile
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 176) - ((scrolled*2)*0.6)) + 'px' }) ; //Turtle
				$( '.img.num3' , dep1Next ).css({ 'top' : ((contH * (i+1) + 80) - ((scrolled*2)*0.62)) + 'px' }) ; //Bird

				break ;
			
			case 5 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i + 176) - ((scrolled*2)*0.6)) + 'px' }) ; //Crocodile
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 176) - ((scrolled*2)*0.6)) + 'px' }) ; //Turtle
				$( '.img.num3' , dep1 ).css({ 'top' : ((contH * i + 80) - ((scrolled*2)*0.62)) + 'px' }) ; //Bird
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) + 50) - ((scrolled*2)*0.5)) + 'px' }) ; //jellyfish_b
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 1000) - ((scrolled*2)*0.61)) + 'px' }) ; //jellyfish_s
				$( '.img.num3' , dep1Next ).css({ 'top' : ((contH * (i+1) - 6) - ((scrolled*2)*0.62)) + 'px' }) ; //shark
				$( '.img.num4' , dep1Next ).css({ 'top' : ((contH * (i+1) + 164) - ((scrolled*2)*0.6)) + 'px' }) ; //baby

				break ;
			
			case 6 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i + 50) - ((scrolled*2)*0.5)) + 'px' }) ; //jellyfish_b
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 1000) - ((scrolled*2)*0.61)) + 'px' }) ; //jellyfish_s
				$( '.img.num3' , dep1 ).css({ 'top' : ((contH * i -6) - ((scrolled*2)*0.62)) + 'px' }) ; //shark
				$( '.img.num4' , dep1 ).css({ 'top' : ((contH * i + 164) - ((scrolled*2)*0.6)) + 'px' }) ; //baby

				break ;
			
			case 7 :
//				$( '.text' , dep1 ).css({ 'top' : ((contH * i - 243 ) - ((scrolled*2)*0.6)) + 'px' }) ; //NEW BEGINNING

				break ;		
		}//end of switch

	} else if ( chkSize == 'small' ) {

		switch ( i ) {

			case 0 :

				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH - 530) - ((scrolled*2)*0.2)) + 'px' }) ; //Earth
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH + 50) - ((scrolled*2)*0.6)) + 'px' }) ; //SpaceShip
				$( '.img.num3' , dep1Next ).css({ 'top' : ((contH + 140) - ((scrolled*2)*0.6)) + 'px' }) ; //Astronaut

				break ;

			case 1 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH - 530) - ((scrolled*2)*0.2)) + 'px' }) ; //Earth
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH + 50) - ((scrolled*2)*0.6)) + 'px' }) ; //SpaceShip
				$( '.img.num3' , dep1 ).css({ 'top' : ((contH + 140) - ((scrolled*2)*0.6)) + 'px' }) ; //Astronaut
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) + 95) - ((scrolled*2)*0.6)) + 'px' }) ; //Hiker	
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 135) - ((scrolled*2)*0.6)) + 'px' }) ; //Mongus

				break ;

			case 2 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i + 95) - ((scrolled*2)*0.6)) + 'px' }) ; //Hiker	
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 135) - ((scrolled*2)*0.6)) + 'px' }) ; //Mongus
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) + 150) - ((scrolled*2)*0.6)) + 'px' }) ; //1st runner
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 640) - ((scrolled*2)*0.8)) + 'px' }) ; //runners

				
				break ;
			
			case 3 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i + 150) - ((scrolled*2)*0.6)) + 'px' }) ; //1st runner
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 640) - ((scrolled*2)*0.8)) + 'px' }) ; //runners
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) - 1610) - ((scrolled*2)*0.3)) + 'px' }) ; //LG Book
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 460) - ((scrolled*2)*0.62)) + 'px' }) ; //Paper

				break ;
			
			case 4 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i - 1610) - ((scrolled*2)*0.3)) + 'px' }) ; //LG Book
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 460) - ((scrolled*2)*0.62)) + 'px' }) ; //Paper
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) + 65) - ((scrolled*2)*0.6)) + 'px' }) ; //Crocodile
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 90) - ((scrolled*2)*0.6)) + 'px' }) ; //Turtle
				$( '.img.num3' , dep1Next ).css({ 'top' : ((contH * (i+1) + 20) - ((scrolled*2)*0.62)) + 'px' }) ; //Bird

				break ;
			
			case 5 :

				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i + 65) - ((scrolled*2)*0.6)) + 'px' }) ; //Crocodile
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 90) - ((scrolled*2)*0.6)) + 'px' }) ; //Turtle
				$( '.img.num3' , dep1 ).css({ 'top' : ((contH * i + 20) - ((scrolled*2)*0.62)) + 'px' }) ; //Bird
				$( '.img.num1' , dep1Next ).css({ 'top' : ((contH * (i+1) -20) - ((scrolled*2)*0.5)) + 'px' }) ; //jellyfish_b
				$( '.img.num2' , dep1Next ).css({ 'top' : ((contH * (i+1) + 800) - ((scrolled*2)*0.61)) + 'px' }) ; //jellyfish_s
				$( '.img.num3' , dep1Next ).css({ 'top' : ((contH * (i+1) - 30) - ((scrolled*2)*0.62)) + 'px' }) ; //shark
				$( '.img.num4' , dep1Next ).css({ 'top' : ((contH * (i+1) + 50) - ((scrolled*2)*0.6)) + 'px' }) ; //baby

				break ;
			
			case 6 :
				
				$( '.img.num1' , dep1 ).css({ 'top' : ((contH * i -20) - ((scrolled*2)*0.5)) + 'px' }) ; //jellyfish_b
				$( '.img.num2' , dep1 ).css({ 'top' : ((contH * i + 800) - ((scrolled*2)*0.61)) + 'px' }) ; //jellyfish_s
				$( '.img.num3' , dep1 ).css({ 'top' : ((contH * i - 30 ) - ((scrolled*2)*0.62)) + 'px' }) ; //shark
				$( '.img.num4' , dep1 ).css({ 'top' : ((contH * i + 50) - ((scrolled*2)*0.6)) + 'px' }) ; //baby
//				$( '.text' , dep1Next ).css({ 'top' : ((contH * (i+1) - 323 ) - ((scrolled*2)*0.6)) + 'px' }) ; //NEW BEGINNING

				break ;
			
			case 7 :

//				$( '.text' , dep1 ).css({ 'top' : ((contH * i - 323 ) - ((scrolled*2)*0.6)) + 'px' }) ; //NEW BEGINNING

				break ;		
		}//end of switch

	}
}

function chkOverViewHandler ( i ) {
	var dep2 = $('.contentBox > div.cont').eq(i).find('div.view') ;

	dep2.bind( 'focus , mouseenter' , function(){
		thumnavi.hide() ;
	}) ;

	if ( chkSize == 'big' ) {	

		var ua = $.browser;
		if ( ua.msie && ua.version.slice(0,1)== '8' ) {

			switch ( i ) {

				case 1 :

					$( '.num1' , dep2 ).css({ 'left' : '-150px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '383px' }).delay(750).animate({ 'left' : '343px' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-90px' }).delay(800).animate({ 'right' : '0px'} , 500  ) ;
					$( '.back' , dep2 ).css({ 'left' : '381px' , 'opacity' : '0' }).delay(1300).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;

				case 2 :
					$( '.num1' , dep2 ).css({ 'left' : '30px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-150px' }).delay(750).animate({ 'right' : '0px' } , 650 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-150px' }).delay(750).animate({ 'right' : '0px' } , 650  ) ;
					$( '.back' , dep2 ).css({ 'left' : '732px' , 'opacity' : '0' }).delay(1300).animate({ 'opacity' : '1.0' } , 650 ) ;

					break ;

				case 3 :
					$( '.num1' , dep2 ).css({ 'left' : '151px' }).delay(750).animate({ 'left' : '91px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-150px' }).delay(750).animate({ 'right' : '0px' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-100px' }).delay(750).animate({ 'right' : '0px' } , 550  ) ;
					$( '.back' , dep2 ).css({ 'left' : '971px' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 4 :
					$( '.num1' , dep2 ).css({ 'left' : '-130px'}).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '0px' }).delay(750).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'right' : '0px' }) 
					$( '.num4' , dep2 ).css({ 'left' : '454px' }).delay(1000).animate({ 'left' : '424px' } , 350 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-30px' }).delay(1000).animate({ 'right' : '0px' } , 350 ) ;
					$( '.back' , dep2 ).css({ 'left' : '724px' , 'opacity' : '0' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 5 :
					$( '.num1' , dep2 ).css({ 'right' : '200px' }).delay(500).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-50px' }).delay(750).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px' }) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' }).delay(750).animate({ 'left' : '0px' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '30px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 6 :

					$( '.num1' , dep2 ).css({ 'right' : '200px' }).delay(500).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '-577px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px' }).delay(750) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' }).delay(750).animate({ 'left' : '0px' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '288px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;
			}//end of switch

		} else {
			switch ( i ) {

				case 1 :

					$( '.num1' , dep2 ).css({ 'left' : '-150px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '383px' }).delay(750).animate({ 'left' : '343px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-90px' }).delay(800).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 500  ) ;
					$( '.back' , dep2 ).css({ 'left' : '381px' , 'opacity' : '0' }).delay(1300).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;

				case 2 :
					$( '.num1' , dep2 ).css({ 'left' : '30px' , 'opacity' : '0' }).delay(500).animate({ 'left' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-150px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 650 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-150px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 650  ) ;
					$( '.back' , dep2 ).css({ 'left' : '732px' , 'opacity' : '0' }).delay(1300).animate({ 'opacity' : '1.0' } , 650 ) ;

					break ;

				case 3 :
					$( '.num1' , dep2 ).css({ 'left' : '151px' , 'opacity' : '0' }).delay(750).animate({ 'left' : '91px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-150px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-100px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 550  ) ;
					$( '.back' , dep2 ).css({ 'left' : '971px' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 4 :
					$( '.num1' , dep2 ).css({ 'left' : '-130px'}).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '0px' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'right' : '0px' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;
					$( '.num4' , dep2 ).css({ 'left' : '454px' , 'opacity' : '0' }).delay(1000).animate({ 'left' : '424px' , 'opacity' : '1.0' } , 350 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-30px' , 'opacity' : '0' }).delay(1000).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 350 ) ;
					$( '.back' , dep2 ).css({ 'left' : '724px' , 'opacity' : '0' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 5 :
					$( '.num1' , dep2 ).css({ 'right' : '200px' }).delay(500).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-50px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' , 'opacity' : '0' }).delay(750).animate({ 'left' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '30px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;

					$( '.num1' , dep2 ).css({ 'right' : '200px' }).delay(500).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-50px' }).delay(750).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px' }).delay(750) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' }).delay(750).animate({ 'left' : '0px' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '30px' }).delay(750) ;

					break ;

				case 6 :

					$( '.num1' , dep2 ).css({ 'right' : '200px' }).delay(500).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '-577px' , 'opacity' : '0' }).delay(500).animate({ 'left' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' , 'opacity' : '0' }).delay(750).animate({ 'left' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '288px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;
			}//end of switch
		}

	} else if ( chkSize == 'small' ) {

		var ua = $.browser;
		if ( ua.msie && ua.version.slice(0,1)== '8' ) {

			switch ( i ) {

				case 1 :
					$( '.num1' , dep2 ).css({ 'left' : '-150px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '239px' }).delay(750).animate({ 'left' : '189px' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-90px' }).delay(800).animate({ 'right' : '0px' } , 500  ) ;
					$( '.back' , dep2 ).css({ 'left' : '704px' , 'opacity' : '0' }).delay(1300).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;

				case 2 :
					$( '.num1' , dep2 ).css({ 'left' : '30px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-150px' }).delay(750).animate({ 'right' : '0px' } , 650 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-150px' }).delay(750).animate({ 'right' : '0px' } , 650  ) ;
					$( '.back' , dep2 ).css({ 'left' : '467px' , 'opacity' : '0' }).delay(1300).animate({ 'opacity' : '1.0' } , 650 ) ;

					break ;

				case 3 :
					$( '.num1' , dep2 ).css({ 'left' : '151px' }).delay(750).animate({ 'left' : '37px'  } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-150px' }).delay(750).animate({ 'right' : '0px' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-100px' }).delay(750).animate({ 'right' : '0px'} , 550  ) ;
					$( '.back' , dep2 ).css({ 'left' : '698px' , 'opacity' : '0' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 4 :
					$( '.num1' , dep2 ).css({ 'left' : '-130px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '0px' }).delay(750).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'right' : '0px' }) ;
					$( '.num4' , dep2 ).css({ 'left' : '303px'}).delay(1000).animate({ 'left' : '273px' } , 350 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-30px' }).delay(1000).animate({ 'right' : '0px' } , 350 ) ;
					$( '.back' , dep2 ).css({ 'left' : '473px' , 'opacity' : '0' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 5 :
					$( '.num1' , dep2 ).css({ 'right' : '-200px' }).delay(500).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-50px'}).delay(750).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px'  }) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' }).delay(750).animate({ 'left' : '0px' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '30px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;

				case 6 :

					$( '.num1' , dep2 ).css({ 'right' : '200px' }).delay(500).animate({ 'right' : '0px' } , 300 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '-577px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px' }) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' }).delay(750).animate({ 'left' : '0px' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '240px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;
			}//end of switch

		} else { 

			switch ( i ) {

				case 1 :
					$( '.num1' , dep2 ).css({ 'left' : '-150px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '239px' , 'opacity' : '0' }).delay(750).animate({ 'left' : '189px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-90px' , 'opacity' : '0' }).delay(800).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 500  ) ;
					$( '.back' , dep2 ).css({ 'left' : '704px' , 'opacity' : '0' }).delay(1300).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;

				case 2 :
					$( '.num1' , dep2 ).css({ 'left' : '30px' , 'opacity' : '0' }).delay(500).animate({ 'left' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-150px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 650 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-150px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 650  ) ;
					$( '.back' , dep2 ).css({ 'left' : '467px' , 'opacity' : '0' }).delay(1300).animate({ 'opacity' : '1.0' } , 650 ) ;

					break ;

				case 3 :
					$( '.num1' , dep2 ).css({ 'left' : '151px' , 'opacity' : '0' }).delay(750).animate({ 'left' : '37px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-150px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-100px' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 550  ) ;
					$( '.back' , dep2 ).css({ 'left' : '698px' , 'opacity' : '0' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 4 :
					$( '.num1' , dep2 ).css({ 'left' : '-130px' }).delay(500).animate({ 'left' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '0px' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'right' : '0px' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;
					$( '.num4' , dep2 ).css({ 'left' : '303px' , 'opacity' : '0' }).delay(1000).animate({ 'left' : '273px' , 'opacity' : '1.0' } , 350 ) ;
					$( '.over_text' , dep2 ).css({ 'right' : '-30px' , 'opacity' : '0' }).delay(1000).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 350 ) ;
					$( '.back' , dep2 ).css({ 'left' : '473px' , 'opacity' : '0' }).delay(1000).animate({ 'opacity' : '1.0' } , 350 ) ;

					break ;

				case 5 :
					$( '.num1' , dep2 ).css({ 'right' : '-200px' }).delay(500).animate({ 'right' : '0px' } , 500 ) ;
					$( '.num2' , dep2 ).css({ 'right' : '-50px' , 'opacity' : '0' }).delay(750).animate({ 'right' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' , 'opacity' : '0' }).delay(750).animate({ 'left' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '30px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;

				case 6 :

					$( '.num1' , dep2 ).css({ 'right' : '200px' }).delay(500).animate({ 'right' : '0px' } , 300 ) ;
					$( '.num2' , dep2 ).css({ 'left' : '-577px' , 'opacity' : '0' }).delay(500).animate({ 'left' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.num3' , dep2 ).css({ 'left' : '0px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;
					$( '.over_text' , dep2 ).css({ 'left' : '-30px' , 'opacity' : '0' }).delay(750).animate({ 'left' : '0px' , 'opacity' : '1.0' } , 500 ) ;
					$( '.back' , dep2 ).css({ 'left' : '240px' , 'opacity' : '0' }).delay(750).animate({ 'opacity' : '1.0' } , 500 ) ;

					break ;
			}//end of switch

		}

	}
}