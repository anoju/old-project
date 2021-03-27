var leftMenuWidth
var rightMenuWidth


$(function(){
	leftMenuWidth = $('.mn_left').outerWidth();
	rightMenuWidth = $('.mn_right').outerWidth();	

	topBtn();
	menuMotion();
	categoryBtn();	
	tabmenu();
	tabmenu2();
	QnA();
});


/*Menu*/
function menuMotion(){
	$('.menu>a').toggle(function(){
		  leftMenu();	
		  return false
	},function(){
		 menuReset();
		 return false
	})

	$('.member>a').toggle(function(){
		  rightMenu();
		  return false
	},function(){
		 menuReset();
		 return false
	})

	$('.page').click(function(){
		menuReset();
	});
}

function leftMenu(){
	$('.mn_left').css('left','0');
	$('.page').css('left',leftMenuWidth);
	$('header').css('left',leftMenuWidth);
	$('.order').css('left',leftMenuWidth);
	$('.sns_sec').css('left',leftMenuWidth);
	$('.con_tit').css('left',leftMenuWidth);
	$('.img_right').show();
}

function rightMenu(){
	$('.mn_right').css('right','0');
	$('.page').css('left',-rightMenuWidth);
	$('header').css('left',-rightMenuWidth);
	$('.order').css('left',-rightMenuWidth);
	$('.sns_sec').css('left',-rightMenuWidth);
	$('.con_tit').css('left',-rightMenuWidth);
	$('.img_left').show();
}

function menuReset(){
	$('.mn_left').css('left',-leftMenuWidth);
	$('.mn_right').css('right',-rightMenuWidth);
	$('.page').css('left','0');
	$('header').css('left','0');
	$('.order').css('left','0');
	$('.sns_sec').css('left','0');
	$('.con_tit').css('left','0');
	$('.img_left').hide();
	$('.img_right').hide();
}

/* leftMenu - category*/
function categoryBtn(){
	$(".category>a").click(function () {
      $(this).parent().toggleClass("on");
	  return false
    });
}

/*top*/
function topBtn(){
	$(window).scroll(function(){
		if($(window).scrollTop() >= 10){
			$('.btn_top').show();
		}else{
			$('.btn_top').hide();
		}			
	});
}



function tabmenu(){
	$('.tab_btn>li').click(function(e){
		e.preventDefault();
		var index = $('.tab_btn>li').index(this);

		//버튼 이미지
		$( this ).addClass('on').siblings().removeClass('on');

		//버튼 하단 박스 
		$('.tab_div0'+(index+1)).show().siblings('div').hide();
		
	});
}

function tabmenu2(){
	$('.tabmenu2>li>a').click(function(e){
		e.preventDefault();
		$( this ).parent().addClass('on').siblings().removeClass('on');
		
	});
}

function QnA(){
	$('.QnA>dt>a.on').click(function(e){
		e.preventDefault();
		$( this ).hide();
		$( this ).parent().children('.off').show();
		$(this).parent().next("dd").slideToggle(); 		
	});
	$('.QnA>dt>a.off').click(function(e){
		e.preventDefault();
		$( this ).hide();
		$( this ).parent().children('.on').show();
		$(this).parent().next("dd").slideToggle(); 		
	});
}