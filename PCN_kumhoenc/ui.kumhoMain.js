/* 
	project : kumho E&C
	author : lee sung jin ( sjlee7901@naver.com )
	date : 2012.06
*/
$(document).ready(function($){
	visualCtl();
	newsCarousel('#tabNews01');
	newsCarousel('#tabNews02');
	mTabCtl();
	mGnbCtl();
	newsLoad();
	$('.boxNotice02 li:last').addClass('last');
	mainAnim();
});

function mGnbCtl() {
	
	$('.topDepth').click(function(e) {
		e.preventDefault();
		$('.topDepth').each(function() {		
			$(this).removeClass('over').next().hide();
		});	
		$(this).addClass('over').next().show(200,'easeInOutSine');	//2depth 펼쳐 보이는 방법
		var mCon = $(this).attr('name');//클릭 된 속성의 name값 저장
		/*
		$('.topDepth').each(function() {
			$(this).removeClass('on');      //on 클래스의 역할??????? 
		});
		*/
		$('.openCon').trigger('click'); //#visualArea 여는 버튼 클릭
		$('#boxVisual div').hide();
		$('.' + mCon).show(); //#boxVisual 안에 클릭 된 속성의 name값과 동일한 클래스를 보여줌
	
		$('#boxConWrap').scrollTo(('#' + mCon), { //클릭 된 속성의 name값을 갖고 와서 #boxConWrap을 이동 (scrollTo 라이브러리 사용)
            duration : 400,
			easing : 'easeOutQuart'
        });

		$('#boxVisual div img, #objArrow').removeAttr('style'); //#boxVisual안에 움직이는 이미지 요소들 초기화

		if ( mCon ==  'boxBusiness' ) { bizAnim(); }		//클릭 된 속성의 name값에 따라 실행되는 애니메이션 함수 실행
		if ( mCon ==  'boxInvest' ) { investAnim(); }		
		if ( mCon ==  'boxPromote' ) { promoteAnim(); }	
		//$(this).addClass('on');		
	});
}

function visualCtl() {

	$('.closeCon').click(function() {
		$('#visualArea').animate( { "left": 170 }, 500, 'easeOutQuint' );
		$(this).hide();
		$('.openCon').show();
		//$(".closeQuick").trigger("click");  // 서브퀵메뉴 닫기
		//$("#quickSub").css("left", "23px");
	});
	$('.openCon').click(function() {
		$('#visualArea').animate( { "left": 600 }, 500, 'easeOutQuint' );
		$(this).hide();
		$('.closeCon').show();
		//$(".closeQuick").trigger("click"); // 서브퀵메뉴 닫기
		//$("#quickSub").css("left", "-170px");
	});
}

function mTabCtl() {  //메인 탭메뉴
	$('.tabBox').hide();
	$('.tabBox:first').show();
	$('.boxNews h2 a').click(function(e) {
		e.preventDefault();
		$('.tabBox').hide();
		$('.boxNews h2 a').each(function() {
			$(this).removeClass();
		});
		$($(this).attr('href')).show();
		$(this).addClass('on');
	});
}

function newsCarousel(tar) {
	var slide = $(tar).find('.imgNews > ul');
	var slideTxt = $(tar).find('.txtNews > ul');
	var pager = $(tar).find('.pNavi');
	
	var slideImg = slide.bxSlider({
		auto: false,
		controls: false,
		displaySlideQty: 1,
		moveSlideQty: 1,
		speed: 100
	});
		
	slideTxt.bxSlider({
		auto: false,
		pager: true,
		mode: 'vertical',
		pagerSelector: pager,
		pagerActiveClass: 'on',
		controls: false,
		displaySlideQty: 1,
		moveSlideQty: 1,
		speed: 0
	});
	
	pager.children('a').click(function(e) {
		slideImg.goToSlide($(this).index());
	});
	
}

function newsLoad() {
	$('.boxNotice ul').bxSlider({
		auto: true,
		pager: true,
		autoHover : true,
		pause: 5000,
		mode: 'vertical',
		pagerSelector: $('.boxNotice > p'),
		pagerActiveClass: 'on',
		controls: false,
		displaySlideQty: 3,
		moveSlideQty: 3,
		speed: 300
	});
}

function mainAnim() {
	$('#visualArea').css( "left", 170 );
	$('.closeCon').hide();
	$('.openCon').show();
	
	$('.openCon').delay(2200).queue(function() {  //  첫화면에서 실행후  #boxConWrap 보여지도록 실행
		$(this).trigger('click');
	});
	
	$('#objTit').animate({'top' : 0},500,'easeOutQuad');
	$('#obj02').delay('500').animate({'right' : 215},700,'easeOutBack');
	$('#obj03').delay('800').animate({'right' : 63},700,'easeOutBack');
	$('#obj04').delay('1200').animate({'right' : 100},700,'easeOutBack');
}

function bizAnim() {
	$('#objAir').animate({'width' : 335, 'height': 348, 'top' : 338, 'left' : 677 },1500,'easeInOutQuad');
}

function investAnim() {
	$('#objArrow').delay('300').animate({'width':368},900,'easeInOutQuint');
}

function promoteAnim() {
	$('#objTitPromote').animate({'top' : -20},500,'easeOutQuint');
	$('#objNews').delay('500').animate({'top' : 180, 'left' : 68},600,'easeOutQuint');
	$('#objWebzine').delay('600').animate({'top' : 126, 'left' : 276},600,'easeOutQuint');
	$('#objPen').delay('700').animate({'top' :462, 'left' : 215},600,'easeOutQuint');
	//$('#objCi').delay('800').animate({'top' : 68, 'left' : 484},600,'easeOutQuint');
	$('#objPic').delay('900').animate({'top' : 84, 'right' : 87},600,'easeOutQuint');
	$('#objPrint').delay('1000').animate({'bottom' : 79, 'left' : 50},600,'easeOutQuint');
	$('#objTv').delay('1200').animate({'bottom' : 243, 'left' : 215},500,'easeOutQuint');
	$('#objGallery').delay('1400').animate({'bottom' : 72, 'right' : 50},600,'easeOutQuint');
	$('#objMedia').delay('1500').animate({'bottom' : 60, 'right' : 78},600,'easeOutQuint');
}