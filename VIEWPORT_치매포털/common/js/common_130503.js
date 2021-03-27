var tab_idx

$(function() {	
	$('.select01').customStyle();

	gnbMenu();
	allMenu();
	btnTop();
	faqMotion();
	tabMenu();
	tabMenu2();
	placeHolder();	
});

/*gnb*/
function gnbMenu(){	
	$('#gnb>li>a').hover(function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		$(this).next('div').slideDown();
		$(this).parent().siblings().find('.gnb2').hide();
	});
	$('#gnb').mouseleave(function(){
		$('.gnb1>li').removeClass('on');
		$('.gnb1>li>div').slideUp();
	});
	$('#gnb>li>a').focus(function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		$(this).next('div').slideDown();
		$(this).parent().siblings().find('.gnb2').hide();
	});
	$(':not(#gnb li a)').focus(function(){
		$('.gnb1>li').removeClass('on');
		$('.gnb1>li>div').slideUp();
	});
}

 /*전체메뉴*/
function allMenu(){	
	$('.all_menu_btn .on').click(function(evt){
		evt.preventDefault();
		$('.all_menu_btn>.off').show();
		$('.all_menu_btn>.on').hide();	
		$('.all_menu_section').slideDown();
	});

	$('.all_menu_btn .off').click(function(evt){
		evt.preventDefault();
		$('.all_menu_btn>.on').show();
		$('.all_menu_btn>.off').hide();
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

