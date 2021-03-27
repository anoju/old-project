// JavaScript Document
/* gnb menu 		
		easeOutQuad   | easeOutQuad    | easeInOutQuad
		easeInCubic   | easeOutCubic   | easeInOutCubic
		easeInQuart   | easeOutQuart   | easeInOutQuart
		easeInQuint   | easeOutQuint   | easeInOutQuint
		easeInSine    | easeOutSine    | easeInOutSine
		easeInExpo    | easeOutExpo    | easeInOutExpo 
		easeInCirc    | easeOutCirc    | easeInOutCirc 
		easeInElastic | easeOutElastic | easeInOutElastic
		easeInBack    | easeOutBack    | easeInOutBack
		easeInBounce  | easeOutBounce  | easeInOutBounce 
		
*/
$(function(){
	$('.individual_work ul li p').hover(function(){
		var new_src = $(this).find('img').attr('src').replace('.gif','_on.gif');
		if ($(this).find('img').index() < 1){
			$('<img class="img_on" />').appendTo($(this).find('a')).attr('src',new_src).fadeIn(500);
		}
	},function(){
		$('.img_on').fadeOut('fast',function(){
			$(this).remove();
		});
	});
	
	$('.individual_work ul li').click(function(){
		var index = $(this).index() + 1;
		var height = $(window).outerHeight();
		$('.img_view>p').css({'margin-top':(height-100)/2}).parent().fadeIn(500)
		.delay(800).children().animate({'margin-top':Math.abs((height-400)/2),'width':'600px','height':'400px'},1000,'easeInOutElastic',function(){
			$('.img_view>p').append('<img src="" alt="" />').find('img').attr('src','images/' + index + '.jpg').fadeIn(500);
		});
	});
	
	$('.img_view').click(function(){
		$(this).fadeOut(500,function(){
			$(this).children().css({'width':'100px', 'height':'100px','overflow-y':'inherit'});
			$('.img_view>p>img').remove();
		});	
	});
});