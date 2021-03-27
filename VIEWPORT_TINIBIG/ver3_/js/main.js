var leftMenuWidth
var rightMenuWidth


$(function(){
	leftMenuWidth = $('.mn_left').outerWidth();
	rightMenuWidth = $('.mn_right').outerWidth();

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
	
	$(".category>a").click(function () {
      $(this).parent().toggleClass("on");
	  return false
    });

	/*탑버튼*/
	$(window).scroll(function(){
		if($(window).scrollTop() >= 10){
			$('.btn_top').css('position','fixed');
		}else{
			$('.btn_top').css('position','relative');
		}			
	});
});

function leftMenu(){
	$('.mn_left').css('left','0');
	$('.page').css('left',leftMenuWidth);
	$('header').css('left',leftMenuWidth);
	$('.img_right').show();
}

function rightMenu(){
	$('.mn_right').css('right','0');
	$('.page').css('left',-rightMenuWidth);
	$('header').css('left',-rightMenuWidth);
	$('.img_left').show();
}

function menuReset(){
	$('.mn_left').css('left',-leftMenuWidth);
	$('.mn_right').css('right',-rightMenuWidth);
	$('.page').css('left','0');
	$('header').css('left','0');
	$('.img_left').hide();
	$('.img_right').hide();
}