var b_time = 5000; /*배너 정지 시간*/
var b_spd = 1000; /*배너 이동 속도*/
var w_height;
var time
var G_li
var G_idx
var li_width
var li_length

$(function() {	
	li_width = $('.sub_banner>div>ul>li').outerWidth();
	li_length = $('.sub_banner>div>ul>li').length;
	
	/*서브 롤링 배너 넓이 자동 설정*/
	$('.sub_banner>div>ul').css('width',(li_width*li_length));

	time = setInterval(function(){subBannerSlide()},b_time);	

	 allMenu();
	 subBanner();
	 faqMotion();
	 tabMenu();
	 GNB_menu();
});

 /*전체메뉴*/
function allMenu(){	
	$('.all_menu_btn .on').click(function(evt){
		evt.preventDefault();
		$('.all_menu_btn>.off').show();
		$('.all_menu_btn>.on').hide();	
		$('.all_menu').css('width','408px');
		$('.all_menu_section').show();
	});

	$('.all_menu_btn .off').click(function(evt){
		evt.preventDefault();
		$('.all_menu_btn>.on').show();
		$('.all_menu_btn>.off').hide();
		$('.all_menu').css('width','33px');
		$('.all_menu_section').hide();
	});
}

/*서브 롤링배너*/
function subBanner(){
	$('.sub_banner').hover(function(){
		clearInterval(time);
	},function(){
		clearInterval(time);
		time = setInterval(function(){subBannerSlide()},b_time);
	});

	$('.sub_banner>.prev').click(function(evt){
		evt.preventDefault();
		$('.sub_banner>div>ul').css({'left':'-160px'}).children(':last').prependTo($('.sub_banner>div>ul'));
		$('.sub_banner>div>ul').not(':animated').animate({'left':'0px'},(b_spd));
	});
	$('.sub_banner>.next').click(function(evt){
		evt.preventDefault();
		subBannerSlide();
	});
}

function subBannerSlide(){
	$('.sub_banner>div>ul').not(':animated').animate({'left':'-160px'},b_spd,function(){
		$(this).css({'left':'0px'}).children(':eq(0)').appendTo($(this));
	});
};

/*faq*/
function faqMotion(){	
	$(".faq>li>dl>dt>a").click(function(){
		$(this).parent().addClass('b').siblings().removeClass('b');
		$(this).parent().next("dd").slideToggle().siblings("dd").slideUp();       			
	});
}

/*tabmenu*/
function tabMenu(){	
	$(".tabmenu>li>a").click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
	});
}


/*GNB*/
function GNB_menu(){	
	G_li=$('.gnb1').children('.active');
	G_idx = $('.gnb1>li').index(G_li);
	
	$('.gnb1>li>ul').hide();
	$('.gnb1>li.active>ul').show();

	$('.gnb1>li>a').click(function(evt){
		evt.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
		$(this).siblings('ul').slideToggle();
		$('.gnb1>li').not('.active').children('ul').slideUp();
	});
	
	$('.sidebar').mouseleave(function(){		
		GNB_reset();
	});
	$(':not(.gnb1 a)').focus(function(){		
		GNB_reset();
	});
}

function GNB_reset(){	
	$('.gnb1>li').eq(G_idx).addClass('active').siblings().removeClass('active');
	$('.gnb1>li').eq(G_idx).children('ul').slideDown();
	$('.gnb1>li').not('.active').children('ul').slideUp();
}







/*ie 브라우져 input[placeholder]*/
$(function() {
  if ((isInputSupported = 'placeholder' in document.createElement('input'))!==true){
        $('input[placeholder]').each(function(){
            if ($(this).val()=='')$(this).val($(this).attr('placeholder')) ;
        })
        $('input[placeholder]').focus(function(){
            if ($(this).attr('placeholder')==$(this).val())$(this).val('');
        });
        $('input[placeholder]').blur(function(){
            if ($(this).val()=='')$(this).val($(this).attr('placeholder'));
        })
    }
}); 

/*셀렉트박스 플러그인*/
(function($){
  $.fn.extend({
   customStyle : function(options) {
	if(!$.browser.msie || ($.browser.msie&&$.browser.version>6)){
	return this.each(function() {
	var currentSelected = $(this).find(':selected');
	 $(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">'+currentSelected.text()+'</span></span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
	var selectBoxSpan = $(this).next();
	var selectBoxWidth = parseInt($(this).width());
	var selectBoxSpanInner = selectBoxSpan.find(':first-child');
	 selectBoxSpan.css({display:'inline-block'});
	 selectBoxSpanInner.css({width:(selectBoxWidth-2), display:'inline-block'});
	var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
	 $(this).height(selectBoxHeight+2).change(function(){
	 selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
	});
	});
	}
  }
  });
 })(jQuery);

