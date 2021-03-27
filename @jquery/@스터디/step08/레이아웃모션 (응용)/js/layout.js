// JavaScript Document
/* gnb menu 플러그인

옵션 설정
	
		bgColor	: lava의 배경 색,
		speed	: 애니메이션 속도 설정 1000 = 1초,
		easing 	: 이징 모션 설정 (참고 http://gsgd.co.uk/sandbox/jquery/easing/),
		reset 	: 마우스가 나가면 원래 위치로 돌아가는 속도 설정 1000 = 1초
		
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
		
	/* web site*/
	var $img = $('.sample>ul>li');
	var img_width = $img.outerWidth() + 30;
	var img_height = $img.outerHeight() + 30;
	var img_length = $img.length;
	var sample_width = $('.sample').outerWidth();
	var col=0, row=0, sum=0;
	
	function img_view_all(){
		col=0, row=0, sum=0;
		$img.fadeIn('fast').each(function(){
			if(sum >= sample_width - 30){
				col = 0;
				row++;
				sum=0;
			}
			$(this).animate({'left': col * img_width + 10,'top':row * img_height},1000,'easeInOutElastic');
			col++;
			sum += img_width;
		});
	}
	img_view_all();
	$('.sample').css('height', (img_length/6) * img_height);
	
	$('.sitebox>ul>li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		if(index == 0){
			img_view_all();
		}else{
			img_view(index)
		}
		return false;
	});
	
	function img_view(a){
		var text = $('.sitebox>ul>li').eq(a).text();
		var col=0, row=0, sum=0;
		//console.log($img.filter('.' + text));
		$img.filter('.' + text).fadeIn('fast').each(function(){
			if(sum >= sample_width - 30){
				col = 0;
				row++;
				sum=0;
			}
			$(this).animate({'left': col * img_width + 10,'top':row * img_height},1000,'easeInOutElastic');
			col++;
			sum += img_width;
		}).siblings().not('.' + text).fadeOut(500);
	}
});