//$(function(){
//	$('html , body').hide() ;
//}) ;

	var posArr = [] ;
	var leftMenu = $('.leftMenu') ;
	var fixedLeft = $('.fixedLeft') ;
	var fixedTab = $('.fixedTab') ;
	var chkSize ;

	var tabBtn = $('.fixedTab ul.tab a') ;
	var featureBox = $('.contentBox.feature') ;
	var pageList = featureBox.find('ul.imgList') ;

	var scrollTopBtn = $('.scrollTop p.btn') ;
	
	firstchk () ;		

	function firstchk () {
		$('html , body').animate({ 'scrollTop' : 0 + 'px' } , 500 ) ;
		chkBrowserSize () ;
		view360Size () ;
	}

	$(window).resize( chkBrowserSize ) ;

	function chkBrowserSize () {
		scrollTopBtn.css({ 'top' : $(window).height() - 105 + 'px' , 'z-index' : '10000' }).show() ;
		$(".contentBox").css("min-height",$(window).height()-78);
		chkBrowser () ;
		chkLeftBox () ;	
		view360Size () ;
		featureSize () ;	

		if ( parseInt($('.fixedLeft').css('top')) == 0 ) {
			topBtnHandler () ;
		}
	}

	$( 'li' , leftMenu.find('.list') ).bind( 'click' , menuMoveHandler ) ;

	var _time = 2500 ;

	function menuMoveHandler ( e ) {
		var btn = $(this) ;
		var num = btn.index() ;
	//	trace ( location.href ) ;
	//	location.href="file:///C:/Users/Angel/Desktop/work/01%20psd/02%20work/work_complete/html%20-%20size%20update/index.html" + "?chkNum=" + num ;
		location.href="index.html" + "?chkNum=" + num ;

		e.preventDefault() ;	
	}


	function chkBrowser () {
		var browserW = $(window).width() ;
		var browserH = $(window).height() ;	

		if ( browserH > 650 && browserW > 1280 ) {		
			$('.lgIntro , body').removeClass('small ') ;		
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
		var minH = 600 ;
		var gap = $('.lgIntro').css('padding-left').replace( 'px' , '' ) ;		

		if ( brW - ( gap * 2 ) < maxW ) {
			fixedLeft.css({ 'left' : '0px' , 'margin-left' : gap + 'px' }) ;
			fixedTab.css({ 'left' : '0px' , 'margin-left' : gap + 'px' }) ;		
		} else {		
			fixedLeft.css({ 'left' : '50%' , 'margin-left' : -( maxW / 2 ) + 'px' }) ;
			fixedTab.css({ 'left' : '50%' , 'margin-left' : -( maxW / 2 ) + 'px' }) ;			
		}

		if ( brW - ( gap * 2 ) < maxW ) {
			fixedLeft.css({ 'left' : '0px' , 'margin-left' : gap + 'px' }) ;
			fixedTab.css({ 'left' : '0px' , 'margin-left' : gap + 'px' }) ;
		} else {
			fixedLeft.css({ 'left' : '50%' , 'margin-left' : -( maxW / 2 ) + 'px' }) ;
			fixedTab.css({ 'left' : '50%' , 'margin-left' : -( maxW / 2 ) + 'px' }) ;
		}

		var list = $( '.list' , leftMenu ) ;
		if ( brH > minH ) {
			leftMenu.css({ 'height' : brH + 'px' }) ;
		} else {
			leftMenu.css({ 'min-height' : minH + 'px' }) ;
		}

		if ( brH > 590 ) {
			$('.view360').css({ 'min-height' : brH + 'px' }) ;
		} else {
			$('.view360').css({ 'min-height' : 590 + 'px' }) ;
		}

		var UserAgent = navigator.userAgent;	
		if (UserAgent.match(/iPhone|iPad|iPad2|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/) != null){
			$(window).load(function(){
				/* ios 자체 포지션 픽스 버그 해결 start */
				$('body').css('height', '+=1');

				//Remove width css
				setTimeout(function() {
				  $('body').css('height', '');
				}, 1); // end
			})
		}
	}

	$(document).bind( 'scroll touchmove' , scollOptionHandler ) ;

	function scollOptionHandler () {	
	//	trace ( $(window).height() , $('.contentBox.view360').css('min-height') ) ;	

		var brW = $(window).width() ;
		var brH = $(window).height() ;
		if ( brW < 1003 ) {		
			scrollL = $(this).scrollLeft() ;
			fixedLeft.css({ 'left' : '0px' , 'margin-left' : -scrollL + 'px' }) ;
			fixedTab.css({ 'left' : '0px' , 'margin-left' : -scrollL + 'px' }) ;
		}

		if ( brH < parseFloat($('.contentBox.view360').css('min-height')) ) {
	//		$('.view360_top').closest('.fixedTab').css({ 'top' : -$(document).scrollTop() })
		}

	}

	/////////////////////////
	//   [ view 360 ]
	/////////////////////////

	function view360Size () {
		chkimgSize () ;

		var view360Box = $('.view360') ;
	//	view360Box.css({ 'border' : '10px solid red' }) ;
		var viewArrBox = $( '.vr_area' , view360Box ) ;
		viewArrBox.hide () ;

		if ( $(window).height() < 590 ) {
			view360Box.height( 590 ) ;
			viewArrBox.css({ 'margin-top' : -( viewArrBox.height() / 2 ) + 'px' }) ;
			viewArrBox.show () ;
		} else {	
			view360Box.height( $(window).height() ) ;
			viewArrBox.css({ 'margin-top' : -( viewArrBox.height() / 2 ) + 'px' }) ;
			viewArrBox.show () ;
		}


		$(".vr_area .view_img img").each(function(){
			var _src = $(this).attr('src').replace( preDir , currDir ) ;
			$(this).attr( 'src' , _src ) ;		
		}) ;	

		$(".vr_area").mousewheel(function(objEvent, intDelta){
			if (intDelta > 0){
				view_360('prev');
			}
			else if (intDelta < 0){
				view_360('next');
			}
		});
	}

	var view_num = 0;
	function view_360(n){	
		var max = $(".view_img li").length
		if (n == "prev")
		{
			if (view_num == 0)
			{
				view_num = 0;
			}else{
				view_num = view_num - 1 ;
			}
		}
		if (n == "next")
		{
			if (view_num < max)
			{
				view_num = view_num +1;
			}else{
				view_num = max;
			}
		}
		var _w = $(".vr_area").width() - 55 ;		
		$(".view_img li").hide();
		$(".view_img li").eq(view_num-1).show();
		$("#draggable").css("left",(_w/21)*(view_num));
	}



	var currDir , preDir ;

	function chkimgSize () {
		if ( chkSize == 'small' ) {
			currDir = '1024' ;
			preDir = '1280' ;
		} else if ( chkSize == 'big' ) {
			currDir = '1280' ;
			preDir = '1024' ;
		}
	}

	tabBtn.bind( 'focuse , mouseenter' , tabOverHandler ) ;
	tabBtn.bind( 'blur , mouseleave' , tabOutHandler ) ;
	function tabOverHandler () {
		$(this).addClass( 'over' ) ;
	}
	function tabOutHandler () {
		$(this).removeClass( 'over' ) ;
	}

	$(".tabFixed .tab li a").click(function(){		
		var thisAlt = $(this).attr("alt");
		if (!$(this).parent().hasClass("active"))			
		{			
			var idx = $(this).attr("rel");			
			$(".vr_area .view_img img").each(function(){
				var img_num = $(this).attr("src").split("oled_")[1]
				$(this).attr("src","./images/" + currDir + "/360view/"+idx+"/oled_"+img_num);
			})
		}
		$(".tabFixed .tab li a").removeClass("active");
		$(this).addClass("active");
	})	

	$(".vr_area .view_img li").hide();

	$(".vr_area .view_img li").eq(0).show();		


	/////////////////////////
	//   [ feature ]
	/////////////////////////
	pageList.eq(0).show() ;

	tabBtn.bind( 'click' , tabPageHandler ) ;

	function tabPageHandler () {
		pageList.hide() ;
		var idx = $(this).closest('li').index() ;
		pageList.eq(idx).show() ;
	}

	function featureSize () {
		chkimgSize () ;
		
		var imgList = pageList.find('img') ;

		imgList.each(function(){
			var _src = $(this).attr('src').replace( preDir , currDir ) ;
			$(this).attr( 'src' , _src ) ;		
		}) ;
	}

	/////////////////////////
	//   [ pr room ]
	/////////////////////////

	//logoSort () ;

	function logoSort () {
		var logImg = $('.logo_tiimg01 img') ;
		logImg.each(function(){
			$(this).load( imgSizeChk ) ;
		}) ;
	}

	function imgSizeChk () {
		var logo = $(this) ;
		var logoTi = $(this).closest('.logo_tiimg01') ;
		var logoBox = logoTi.closest ( '.list_box' ) ;
		var _w = logo.width() / 2 ;
		var _h = logo.height() / 2 ;

//		trace ( _h ) ;
		
		logoTi.css({ 'position' : 'relative' , 'height' : logoBox.height() + 'px' }) ;
		logo.css({ 'position' : 'absolute' , 'top' : '50%' , 'left' : '50%' , 'margin-top' : -_h + 'px' , 'margin-left' : -_w + 'px' }) ;
	}


/*드레그 이벤트*/
$(function(){
	$( "#draggable" ).draggable({
		containment: "#img_bar", 
		scroll: false,
		axis: "x",
		drag: function(ui) {
			var _w = $(".vr_area").width() - 55 ;		
			var position = parseInt($(this).position().left);
			var idx = parseInt((position)/(_w/21));
			$(".vr_area .view_img li").hide();
			$(".vr_area .view_img li").eq(idx).show();			
		}
	});
})

$(function(){
	var UserAgent = navigator.userAgent;
	
	if (UserAgent.match(/iPhone|iPad|iPad2|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/) != null && $(window).width() >= 768){	  	
	  fixedLeft.css({"top":"0px","left":"10px","margin-left":"0px"});
	}
})



//$(window).load(function(){
//	$('.press_list_item').eq(0).find('.list_content').show() ;
//	$('.press_list_item').eq(0).addClass("on");
//})

scrollTopBtn.css({ 'top' : $(window).height() + 105 + 'px' , 'z-index' : '10000' }).show() ;

$(window).load(function(){	
//	topBtnHandler () ;

//	var scrollTopBtn = $('.scrollTop p.btn') ;
//	scrollTopBtn.css({ 'top' : $(window).height() - 105 + 'px' , 'z-index' : '10000' }).show() ;
//	scrollTopBtn.click(function(){
//		$('html , body').animate({ scrollTop : '0px' }) ;
//	}) ;
	
	$('body').css({ 'margin-top' : '0px' }) ;
	$('.fixedLeft').css({ 'top' : '0px' }) ;

//	alert ( parseInt($('.fixedLeft').css('top')) ) ;

	if ( parseInt($('.fixedLeft').css('top')) == 0 ) {
		$('.fixedLeft').css({ '-webkit-transition' : 'top 0.3s' }) ;		
		scrollTopBtn.css({ 'top' : $(window).height() - 105 + 'px' , 'z-index' : '10000' }).show() ;
	}

//	, '-webkit-transition' : 'top 0.3s'
//	-webkit-transition: top 0.3s ;
//	body			{ margin-top:10000px; background:url('') #3c3c3c !important; }
//.fixedLeft	{ top:10000px !important;}
})

//function topBtnHandler () {
//	var scrollTopBtn = $('.scrollTop p.btn') ;
//	scrollTopBtn.css({ 'top' : $(window).height() - 105 + 'px' , 'z-index' : '10000' }).show() ;
//	scrollTopBtn.click(function(){
//		$('html , body').animate({ scrollTop : '0px' }) ;
//	}) ;
//}


	
	scrollTopBtn.click(function(){
		$('html , body').animate({ scrollTop : '0px' }) ;
	}) ;