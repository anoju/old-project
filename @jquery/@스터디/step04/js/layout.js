// JavaScript Document

$(function(){
	var pos, check, cont_height;
		pos = $(window).scrollTop();
		check = $(document).height();
		cont_height = $('.bottom').height();
		$('.bottom').css({'top':-(cont_height - $(window).height()),'left':0});
		$('.top').css({'margin-top':0,'left':0});
	var init = function(){
		$(window).resize(function(){
		    pos = $(window).scrollTop();
			check = $(document).height();
		    cont_height = $('.bottom').height();
			$('.bottom').css({'top':-((cont_height - $(window).height()) - pos * 2),'left':0});
		});
	}
	init();
	$(window).scroll(function(index){
		init();
		pos = $(window).scrollTop()
		$('.bottom').css({'top':-((cont_height - $(window).height()) - pos * 2),'left':0});
		if (pos == check -  $(window).height()){
			//console.log(check) // 맨끝 알기
		}
	});
});