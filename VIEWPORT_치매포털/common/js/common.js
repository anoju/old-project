var tab_idx
var zoom_li
var zoom_idx
var number

$(function() {	
	$('.select01').customStyle();  //jquery-1.9.1.min 오류 발생, jquery-migrate-1.1.0 추가 후에도 오류가 발생되면 주석처리하세요

	gnbMenu();
	allMenu();
	btnTop();
	faqMotion();
	tabMenu();
	tabMenu2();
	zoom();
	placeHolder();	
});

/*gnb*/
function gnbMenu(){	
	$('.gnb1>li>a').hover(function(){		
		$(this).parent().addClass('on').siblings().removeClass('on');		
		$(this).next('div').css('height','0').stop().animate({height:55},300);
	},function (){
		stop();
	});

	$('.gnb1').mouseleave(function(){
		$('.gnb1>li').removeClass('on');
		$('.gnb2').css('height','0');	
	});
	$('.gnb1>li>a').focus(function(){
		$(this).parent().addClass('on').siblings().removeClass('on');		
		$(this).next('div').css('height','0').stop().animate({height:55},300);
	});
	$(':not(.gnb1 li a)').focus(function(){
		$('.gnb1>li').removeClass('on');
		$('.gnb2').css('height','0');	
	});
}

 /*전체메뉴*/
function allMenu(){	
	$('.all_menu_btn .on').click(function(evt){
		evt.preventDefault();
		$('.all_menu_btn>.on').hide();
		$('.all_menu_btn>.off').show().focus();
		$('.all_menu_section').slideDown();
	});

	$('.all_menu_btn .off').click(function(evt){
		evt.preventDefault();
		$('.all_menu_btn>.off').hide();
		$('.all_menu_btn>.on').show().focus();
		$('.all_menu_section').slideUp();
	});
}

/*btnTop*/
function btnTop(){
	if($('body').find('.btn_top').length  == 1){
		var tip = $('.btn_top').offset().top;
		
		$(window).scroll(function(){
			var top = $(this).scrollTop();
			$('.btn_top').stop().animate({'top':top < tip? tip : top + tip },500)
		});
	}	

	$(".btn_top>a").click(function(evt){
		evt.preventDefault();
		$("html,body").animate( {scrollTop:0 }, 800, 'easeInOutQuart' );
	});
}

/*faq*/
function faqMotion(){	
	$(".faq>li>dl>dt>a").click(function(evt){
		evt.preventDefault();
		$(this).parent().toggleClass('b').siblings().removeClass('b');
		$(this).parent().next("dd").slideToggle().siblings("dd").slideUp();       			
	});
}

/*tabmenu*/
function tabMenu(){	
	$(".tabmenu>li>a").click(function(evt){
		evt.preventDefault();
		$(this).parent().addClass('on').siblings().removeClass('on');
	});
}

function tabMenu2(){	
	$(".tabmenu2>li>a").click(function(evt){
		evt.preventDefault();
		var tab2_li = $(this).parent();
		tab_idx = $('.tabmenu2>li').index(tab2_li);

		$(this).parent().addClass('on').siblings().removeClass('on');
		$('.tab_con'+(tab_idx+1)).show().siblings('div').hide();
	});
}

// 셀렉트 박스 - 새창열기
function gotoUrl(obj) { 
	var checkSite = $(obj).find('.iList').children().children('input[checked]').val();						
	if(checkSite =='on'){
		alert('사이트를 선택해주세요');
	}else{
		window.open(checkSite); 
	}				
}

//zoom(글자크기)
function zoom(){
	number = 1;

	$('.zoom>li>a').click(function(){
		zoom_li = $(this).parent();
		zoom_idx = $('.zoom>li').index(zoom_li);

		switch (zoom_idx){
			case 0:
				if (number >= 1.2){
					alert("글자크기를 더 이상 확대 할 수 없습니다.");
				}else{
					number += 0.1;
					$('body').css({'zoom':number});			
					$('body').css('-webkit-transform','scale('+ number +')');
					$('body').css('-webkit-transform-origin','0 0');
					$('body').css('-moz-transform','scale('+ number +')');
					$('body').css('-moz-transform-origin','0 0');
					$('body').css('-o-transform','scale('+ number +')');
					$('body').css('-o-transform-origin','0 0');
				}
				break;
			case 1:
				if (number <= 0.8){
					alert("글자크기를 더 이상 축소할 수 없습니다.");
				}else{
					number -= 0.1;
					$('body').css({'zoom':number});			
					$('body').css('-webkit-transform','scale('+ number +')');
					$('body').css('-webkit-transform-origin','0 0');
					$('body').css('-moz-transform','scale('+ number +')');
					$('body').css('-moz-transform-origin','0 0');
					$('body').css('-o-transform','scale('+ number +')');
					$('body').css('-o-transform-origin','0 0');
				}
				break;
			
		};
	});
}


/*ie 브라우져 input[placeholder]*/
function placeHolder() { 
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
}

/*셀렉트박스 플러그인*/
//str :: jquery-1.9.1.min 오류 발생, jquery-migrate-1.1.0 추가 후에도 오류가 발생되면 플러그인 주석처리하세요
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
 //end :: jquery-1.9.1.min 오류 발생, jquery-migrate-1.1.0 추가 후에도 오류가 발생되면 플러그인 주석처리하세요

