/* 
	project : m.cocoichibanya.co.kr
	author : an hyo ju
	date : 2013.07
*/

$(function(){
	tabUtil();
	headerBtn();
	titCon();
	gnbOnSet();
	btnTop();
	sliderSet();
	storeLink();

});


// header - 버튼
function headerBtn() {
	var menuRwidth = $('#rightMenu').outerWidth();

	$('.btnRightMenu').click(function() {
		if($('.btnRightMenu').hasClass('on')){
			$(this).removeClass('on');
			contentReset()
		}else{
			$(this).addClass('on');
			$('#container').stop().animate({'left':-menuRwidth},500,'easeOutQuart');
		}
	});
}

function contentReset(){
	$('#container').stop().animate({'left':0},500,'easeOutQuart',function(){
		$('#container').removeAttr('style')
	});
}



// 메뉴 - titCon 영역
function titCon() {	
	if($('.titConMenu').size() > 0){
		$('.titConMenu').delay(1500).slideUp();
	}

	$('.titCon h2 a').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('on');
		$('.titConMenu').slideToggle();
	});
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

// gnb On
function gnbOnSet() {
	var $h1 = $('.titCon h1').text();	
	$('#gnb a').each(function() {				
		if ( $(this).text() == $h1 ) {
			$(this).parent().addClass('on');
		}		
	});
}

// btnTop버튼
function btnTop(){
	$(".topBtn a").click(function(evt){
		evt.preventDefault();
		$('html,body').animate( {scrollTop:0 }, 800, 'easeInOutQuart' );
	});
}

// 매장안내- 매장사진 슬라이드
function sliderSet(){
	if($('.storeSlider').size() > 0){
		$('.storeSlider').bxSlider({
			controls: false,
			buildPager: function(slideIndex){
			switch(slideIndex){
			  case 0:
				return 'PHOTO1';
			  case 1:
				return 'PHOTO2';
			  case 2:
				return 'PHOTO3';
			  case 3:
				return 'PHOTO4';
			}
		  }
		});
	}
}

// 매장안내-매장선택
function storeLink(){
	$(".storeLink p a").click(function(evt){
		evt.preventDefault();
		$(this).parent().toggleClass('on');
		$('.storeLink>div').slideToggle();
	});
}

