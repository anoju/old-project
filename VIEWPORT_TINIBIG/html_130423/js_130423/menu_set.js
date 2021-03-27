/* logo */
/* 2012.11.30 수정 */
$(document).ready(function(){
	$('.h1_over span').css('display', 'block');
	$('.h1_over span').stop().animate({opacity:1},0);
	
	$('h1, .h1_over span').mouseover(function(){
		$('.h1_over span').stop().animate({opacity:0},{duration:300, easing:"easeInOutSine"});
	});
	$('h1, .h1_over span').mouseout(function(){
		$('.h1_over span').stop().animate({opacity:1},{duration:250, easing:"easeInOutSine"});
	});
	$('.btn_logo').show().css('opacity',0);
	$('h1, .h1_over span').click(function(){
		if($('.btn_logo').css('opacity') != 0)
		{
			$('.btn_logo').animate({opacity:0},{duration:300, easing:"easeInOutSine"});
		}
		else
		{
			$('.btn_logo').animate({opacity:1},{duration:300, easing:"easeInOutSine"});
		}
		$('.h1_over span').find("img").attr ("src" , h1_logo_over);
	});
	$('.btn_logo').click(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"}).css('display', 'none');
		$('.h1_over span').find("img").attr ("src" , h1_logo);
	});
});


/* tier_menu */
var FoldingChk = false;// 닫힌상태 ( false , 열린상태:true )
var LoginChk = false;// 닫힌상태 ( false , 열린상태:true )

$(document).ready(function(){
	$('.btn_tier_menu01').click(function(){
		if (FoldingChk == false ){
			$('.categories_cont').stop().animate({height:60},{duration:450,easing:"easeInOutQuad"});
			$('.btn_tier_menu01 .tier_off').find("img").attr ("src" , "/mobile/html_130423/img_130423/tier_menu01on.gif");	/*130423 경로수정*/
			$('.btn_tier_menu01 .tier_on').find("img").attr ("src" , "/mobile/html_130423/img_130423/tier_menu01on.gif");	/*130423 경로수정*/
			$('.btn_tier_menu01 .tier_act').find("img").attr ("src" , "/mobile/html_130423/img_130423/tier_menu01on.gif");	/*130423 경로수정*/
			$('#wrap').stop().animate({top:58},{duration:450,easing:"easeInOutQuad"});
			$('#footer').stop().animate({top:58},{duration:450,easing:"easeInOutQuad"});
			FoldingChk= true;
		} else {
			$('.categories_cont').stop().animate({height:0},{duration:450,easing:"easeInOutQuad"});
			$('#wrap').stop().animate({top:0},{duration:450,easing:"easeInOutQuad"});
			$('#footer').stop().animate({top:0},{duration:450,easing:"easeInOutQuad"});
			$('.btn_tier_menu01 .tier_off').find("img").attr ("src" , "/mobile/html_130423/img_130423/tier_menu01.gif");	/*130423 경로수정*/
			$('.btn_tier_menu01 .tier_on').find("img").attr ("src" , "/mobile/html_130423/img_130423/tier_menu01on.gif");	/*130423 경로수정*/
			$('.btn_tier_menu01 .tier_act').find("img").attr ("src" , "/mobile/html_130423/img_130423/tier_menu01over.gif");	/*130423 경로수정*/
			FoldingChk= false;
		}
	});
	$('.btn_tier_menu01').mouseover(function(){
		$('.tier_2dep').stop().animate({top:90},0);	/*130424 높이수정*/
		$('.tier_2dep .s1').stop().animate({top:0, opacity:0},0).animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.btn_tier_menu02').mouseover(function(){
		$('.tier_2dep').stop().animate({top:90},0);	/*130424 높이수정*/
		$('.tier_2dep .s2').stop().animate({top:0, opacity:0},0).animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.btn_tier_menu03').mouseover(function(){
		$('.tier_2dep').stop().animate({top:90},0);	/*130424 높이수정*/
		$('.tier_2dep .s3').stop().animate({top:0, opacity:0},0).animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.btn_tier_menu04').mouseover(function(){
		$('.tier_2dep').stop().animate({top:90},0);	/*130424 높이수정*/
		$('.tier_2dep .s4').stop().animate({top:0, opacity:0},0).animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});	
	
	$('.btn_tier_menu01').mouseout(function(){
		$('.tier_2dep .s1').stop().animate({top:0, opacity:0},{duration:250, easing:"easeInOutSine"});
		$('.tier_2dep').stop().delay('300').animate({top:-40},0);
	});
	$('.btn_tier_menu02').mouseout(function(){
		$('.tier_2dep .s2').stop().animate({top:0, opacity:0},{duration:250, easing:"easeInOutSine"});
		$('.tier_2dep').stop().delay('300').animate({top:-40},0);
	});
	$('.btn_tier_menu03').mouseout(function(){
		$('.tier_2dep .s3').stop().animate({top:0, opacity:0},{duration:250, easing:"easeInOutSine"});
		$('.tier_2dep').stop().delay('300').animate({top:-40},0);
	});
	$('.btn_tier_menu04').mouseout(function(){
		$('.tier_2dep .s4').stop().animate({top:0, opacity:0},{duration:250, easing:"easeInOutSine"});
		$('.tier_2dep').stop().delay('300').animate({top:-40},0);
	});
	
	/*130510 수정 - 시작*/
	$('.btn_tier_menu05').mouseover(function(){
		$('.tier_2dep').stop().animate({top:90},0);
		$('.tier_2dep .s5').stop().animate({top:0, opacity:0},0).animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.btn_tier_menu05').mouseout(function(){
		$('.tier_2dep .s5').stop().animate({top:0, opacity:0},{duration:250, easing:"easeInOutSine"});
		$('.tier_2dep').stop().delay('300').animate({top:-40},0);
	});
	/*130510 수정 - 끝*/

	
	/* 2012.11.30 추가 */
	$('.btn_sns_story').mouseover(function(){
		$('.tier_2dep').stop().animate({top:40},0);	/*130424 높이수정*/
		$('.tier_2dep .st01').stop().animate({top:0, opacity:0},0).animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.btn_sns_story').mouseout(function(){
		$('.tier_2dep .st01').stop().animate({top:0, opacity:0},{duration:250, easing:"easeInOutSine"});
		$('.tier_2dep').stop().delay('300').animate({top:-40},0);
	});
	/* //2012.11.30 추가 */
});


function selectedDep2(target){
	var target = target;
	var src = target.find("img").attr ("src" , "/img/menu/tier_menu02on.gif");
}
function selectedDep3(target){
	var target = target;
	var src = target.find("img").attr ("src" , "/img/menu/tier_menu03on.gif");
}
function selectedDep4(target){
	var target = target;
	var src = target.find("img").attr ("src" , "/img/menu/tier_menu04on.gif");
}

$(document).ready(function(){
	$('.tier_menu li .tier_act').css('display', 'block');
	$('.tier_menu li .tier_on').css('display', 'block');
	$('.tier_menu li .tier_act').stop().animate({opacity:0},0);
	$('.tier_menu li .tier_on').stop().animate({opacity:0},0);
	
	$('.tier_menu li .tier_act').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.tier_menu li .tier_act').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
		$(this).parent().find('.tier_on').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	$('.tier_menu li .tier_act').click(function(){
		$(this).stop().animate({opacity:0},{duration:200, easing:"easeInOutSine"});
		$(this).parent().find('.tier_on').stop().animate({opacity:1},{duration:250, easing:"easeInOutSine"});
	});
});



/* sns menu */
$(document).ready(function(){
	$('.sns_menu li .sns_act').css('display', 'block');
	$('.sns_menu li .sns_on').css('display', 'block');
	$('.sns_menu li .sns_act').stop().animate({opacity:0},0);
	$('.sns_menu li .sns_on').stop().animate({opacity:0},0);
	
	$('.sns_menu li .sns_act').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.sns_menu li .sns_act').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
		$(this).parent().find('.sns_on').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
});


/* login menu */
$(document).ready(function(){
	$('.login_menu div .log_act').css('display', 'block');
	$('.login_menu div .log_act').stop().animate({opacity:0},0);
	$('.login_menu div .log_act').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.login_menu div .log_act').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	
	$('.login_state_box li .state_act').css('display', 'block');
	$('.login_state_box li .state_on').css('display', 'block');
	$('.login_state_box li .state_act').stop().animate({opacity:0},0);
	$('.login_state_box li .state_on').stop().animate({opacity:0},0);
	
	$('.login_state_box li .state_act').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.login_state_box li .state_act').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
		$(this).parent().find('.state_on').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	$('.login_state_box li .state_act').click(function(){
		$(this).stop().animate({opacity:0},{duration:200, easing:"easeInOutSine"});
		$(this).parent().find('.state_on').stop().animate({opacity:1},{duration:250, easing:"easeInOutSine"});
	});
	
	
	$('.login_after_state span').css('display', 'block');
	$('.login_after_state span').stop().animate({opacity:0},0);
	

	$('.login_after_state').mouseover(function(){
		$('.login_state_box').stop().animate({height:$('.login_state_box ul').innerHeight()},{duration:350,easing:"easeInOutQuad"});
		$('.login_after_state span').stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.login_after_state').mouseout(function(){
		$('.login_state_box').stop().animate({height:0},{duration:300,easing:"easeInOutQuad"});
		$('.login_after_state span').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	$('.login_state_box').mouseover(function(){
		$('.login_state_box').stop().animate({height:$('.login_state_box ul').innerHeight()},{duration:350,easing:"easeInOutQuad"});
		$('.login_after_state span').stop().animate({opacity:1},0);
	});
	$('.login_state_box').mouseout(function(){
		$('.login_state_box').stop().animate({height:0},{duration:300,easing:"easeInOutQuad"});
		$('.login_after_state span').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
});

/* categories */
$(document).ready(function(){
	$('.categories_cont li .categ_act').css('display', 'block');
	$('.categories_cont li .categ_on').css('display', 'block');
	$('.categories_cont li .categ_act').stop().animate({opacity:0},0);
	$('.categories_cont li .categ_on').stop().animate({opacity:0},0);
	
	$('.categories_cont li .categ_act').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.categories_cont li .categ_act').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
		$(this).parent().find('.categ_on').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	$('.categories_cont li .categ_act').click(function(){
		$(this).stop().animate({opacity:0},{duration:200, easing:"easeInOutSine"});
		$(this).parent().find('.categ_on').stop().animate({opacity:1},{duration:250, easing:"easeInOutSine"});
	});
	
});


/* GNB */
$(document).ready(function(){
	$('.gnb .gnb_act').css('display', 'block');
	$('.gnb .gnb_tooltip').css('display', 'block');
	$('.gnb .gnb_act').stop().animate({opacity:0},0);
	$('.gnb .gnb_tooltip').stop().animate({opacity:0},0);
	$('.gnb .gnb_act').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
		$(this).parent().find('.gnb_tooltip').stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.gnb .gnb_act').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
		$(this).parent().find('.gnb_tooltip').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	
	go_anchor = function(href)
	{
		if($('#_new_sales').length == 0)
			return;
		var gnb01 = $('#_new_sales').offset().top-50;
		if(href == '#new_sales')
		{
			$('body,html').stop().animate({scrollTop: gnb01}, 600);
		}
		else if(href == '#ending_tonight')
		{
			$('body,html').stop().animate({scrollTop: $('#_new_sales').innerHeight() + gnb01 + 4}, 800);
		}
		else if(href == '#now_on_sales')
		{
			$('body,html').stop().animate({scrollTop: $('#_new_sales').innerHeight() +  $('#_ending_tonight').innerHeight() + gnb01 + 4}, 800);
		}
		$('.categories_cont').stop().animate({height:0},{duration:450,easing:"easeInOutQuad"});		
		$('#wrap').stop().animate({top:0},{duration:450,easing:"easeInOutQuad"});
		$('#footer').stop().animate({top:0},{duration:450,easing:"easeInOutQuad"});
		FoldingChk= false;
	};

	if(window.location.hash){
		setTimeout(function(){
			go_anchor(window.location.hash);
		}, 500);
    }

	$('.btn_gnb01').click(function () {
		location.href='/#new_sales';
		go_anchor('#new_sales');
	});
	$('.btn_gnb02').click(function () {
		location.href='/#ending_tonight';
		go_anchor('#ending_tonight');		
	});
	$('.btn_gnb03').click(function () {
		location.href='/#now_on_sales';
		go_anchor('#now_on_sales');
	});
});


/* top btn */
$(document).ready(function(){
	$('.btn_top').css('display', 'block');
	$('.btn_top').stop().animate({opacity:0},0);
	
	$('.btn_top_act').css('display', 'block');
	$('.btn_top_act').stop().animate({opacity:0},0);
	
	$('.btn_top_act').mouseover(function(){
		$(this).parent().find('span').stop().animate({opacity:0},{duration:300, easing:"easeInOutSine"});
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.btn_top_act').mouseout(function(){
		$(this).parent().find('span').stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
		$(this).stop().animate({opacity:0},{duration:300, easing:"easeInOutSine"});
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.btn_top').css('display', 'block');
			$('.btn_top').stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
		} else {
			$('.btn_top').css('display', 'none');
			$('.btn_top').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
		}
		
	});
	$(function () {
		$('.btn_top a').click(function () {
			$('body,html').stop().animate({scrollTop: 0}, 800);
			$('.categories_cont').stop().animate({height:0},{duration:450,easing:"easeInOutQuad"});
			$('#wrap').stop().animate({top:0},{duration:450,easing:"easeInOutQuad"});
			$('#footer').stop().animate({top:0},{duration:450,easing:"easeInOutQuad"});
			$('.btn_tier_menu01 .tier_off').find("img").attr ("src" , "/img/menu/tier_menu01.gif");
			$('.btn_tier_menu01 .tier_on').find("img").attr ("src" , "/img/menu/tier_menu01on.gif");
			$('.btn_tier_menu01 .tier_act').find("img").attr ("src" , "/img/menu/tier_menu01over.gif");
			FoldingChk= false;
		});
	});
});



/* cont_box */
$(document).ready(function(){
	$('.cont_box_over').css('display', 'block');
	$('.cont_box_over').stop().animate({opacity:0},0);
	$('.cont_box').live('mouseover',function(){
		$(this).find('div.cont_box_over').stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
		$(this).find('.cont_process ul').stop().animate({top:0},{duration:250, easing:"easeInOutSine"});
		$(this).find('.cont_process_s ul').stop().animate({top:0},{duration:250, easing:"easeInOutSine"});/*2012.11.12 추가*/
		$(this).find('.cont_process_p ul').stop().animate({top:0},{duration:250, easing:"easeInOutSine"});/*2012.11.12 추가*/
		$(this).find('.cont_process_h').stop().animate({opacity:1},{duration:250, easing:"easeInOutSine"});/*2012.11.12 추가*/
		$(this).find('.cont_text_p').css ('background-position','0 -95px');
	});
	$('.cont_box').live('mouseout',function(){
		$(this).find('div.cont_box_over').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
		$(this).find('.cont_process ul').stop().animate({top:-30},{duration:250, easing:"easeInOutSine"});
		$(this).find('.cont_process_s ul').stop().animate({top:-30},{duration:250, easing:"easeInOutSine"});/*2012.11.12 추가*/
		$(this).find('.cont_process_p ul').stop().animate({top:30},{duration:250, easing:"easeInOutSine"});/*2012.11.12 추가*/
		$(this).find('.cont_process_h').stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});/*2012.11.12 추가*/
		$(this).find('.cont_text_p').css ('background-position','0 0');
	});
});

/*  calendar */
$(document).ready(function(){
	$('.caleandar_form tbody td.c_img li span, .calendar_btn li span.act_p').css('display', 'block');
	$('.caleandar_form tbody td.c_img li span, .calendar_btn li span.act_p').stop().animate({opacity:0},0);
	$('.caleandar_form tbody td.c_img li span').mouseover(function(){
		$(this).stop().animate({opacity:0.4},{duration:300, easing:"easeInOutSine"});
	});
	$('.caleandar_form tbody td.c_img li span').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});

	$('.calendar_btn li span.act_p').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.calendar_btn li span.act_p').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
});



/* Layer Popup */
$(document).ready(function(){
	//$('#pop_login_box').animate({opacity:0},1);
});

function layer_open(el){
	$('.layer_pop').addClass('open');
	if($.browser.msie && $.browser.version <= "8.0"){
		$('.layer_pop').css('display','block')
	} else {
		$('.layer_pop').fadeIn();
		$('.layer_pop').css('display','block')
	}
	var temp = $('#' + el);
	//if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	//else temp.css('top', '0px');
	if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
	else temp.css('left', '0px');
}


jQuery(function($){	
	$('.login_box_op').click(function(){
		$.cookie("login_url",location.href,{expires:1, path:'/'});
		layer_open('pop_login_box'); /* 열고자 하는 것의 아이디를 입력 */	
		$('body,html').stop().animate({scrollTop: 0}, 800);
		//$('#pop_login_box').animate({top:150},{duration:850, easing:"easeInOutBack"});
		$('.pop_wrap').css('display','block'); /* 2012.12.01 수정 */

		return false;
	});
	$('.login_box_cl').click(function(){
		var return_url = $('#return_url').val();
		if(typeof return_url != 'undefined' && return_url)
			location.href = return_url;
		if($.browser.msie && $.browser.version <= "8.0"){
			$('.layer_pop').css('display','none')
		} else {
			$('.layer_pop').fadeOut();
		}
		$('.pop_wrap').css('display','none'); /* 2012.12.01 수정 */

		$('#login_bottom_wrapper').hide();
		$('#join_email').attr('readonly',false).removeClass('disa');
		$('#join_email, #login_email, #login_pw').val('');
		$('#btn_join').show();
		$('#btn_join_disabled').hide();
		$('.login_comment, .join_comment').html('');

		return false;
	});
	
	/* 2012.12.01 추가 */
	$('.event_box_op').click(function(){
		layer_open('pop_event_box'); /* 열고자 하는 것의 아이디를 입력 */	
		$('body,html').stop().animate({scrollTop: 0}, 800);
		$('.event_pop_wrap').css('display','block');
		return false;
	});
	$('.event_box_cl').click(function(){
		if($.browser.msie && $.browser.version <= "8.0"){
			$('.layer_pop').css('display','none')
		} else {
			$('.layer_pop').fadeOut();
			$('.layer_pop').css('display','none')
		}
		$('.event_pop_wrap').css('display','none');
		return false;
	});
});

/* productTitle ico */
$(document).ready(function(){
	$('#productTitle li.cate a span').css('display', 'block');
	$('#productTitle li.cate a span').stop().animate({opacity:0},0);
	$('#productTitle li.cate a span').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('#productTitle li.cate a span').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	$('#productTitle li.cate a').click(function(){
		location.href = $(this).attr('href');
	}); // 카테고리로 이동 안해서 강제 이동
});


/* login/join btn */
$(document).ready(function(){
	$('.login_btn a span.act_p, .join_btn a span.act_p').css('display', 'block');
	$('.login_btn a span.act_p, .join_btn a span.act_p').stop().animate({opacity:0},0);
	
	$('.login_btn a span.act_p, .join_btn a span.act_p').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.login_btn a span.act_p, .join_btn a span.act_p').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
});

/* pro_sns */
$(document).ready(function(){
	$('.pro_sns_wrap li span').css('display', 'block');
	$('.pro_sns_wrap li span').stop().animate({opacity:0},0);
	$('.pro_sns_wrap li span').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.pro_sns_wrap li span').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	
});


/* BTN */
$(document).ready(function(){
	$('.priceAct li .btn_act').css('display', 'block');
	$('.priceAct li .btn_act').stop().animate({opacity:0},0);
	$('.priceAct li .btn_act').mouseover(function(){
		$(this).stop().animate({opacity:1},{duration:300, easing:"easeInOutSine"});
	});
	$('.priceAct li .btn_act').mouseout(function(){
		$(this).stop().animate({opacity:0},{duration:250, easing:"easeInOutSine"});
	});
	
});


/* 2013.01.07 추가 */
/* 브라우저 resize */
var firstLoadChk = false;
var duration;

$(function(){
	$(window).resize ( resizeFunc ).resize();

	function resizeFunc(){
		var w = $(window).width();
		if ( w <= 1430){
			$('.btn_top').css('visibility', 'hidden')
		} else {
			$('.btn_top').css('visibility', 'visible')
		}
	}
	firstLoadChk = true;
});

