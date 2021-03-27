// JavaScript Document

$(function(){
	var width = $(document).outerWidth();
	var speed = 'fast';
	var width_resize = function(){
		$(window).resize(function(){
			sizeWidth(width,speed);
		})
	};
	
	$('#wide>a').toggle(function(){
		sizeWidth(width,speed);
		width_resize();		
	},function(){
		sizeWidth(1030,speed,false);
		$(window).unbind('resize');
	})
	
	function sizeWidth(width,speed,a){
		if( a == false){
			width = 1030;
		}else{
			width = $(window).outerWidth() <= 1030 ? 1030 : $(window).outerWidth() -20;
		}
		$('#wrap').stop().animate({'width':width},speed);
		$('#header,#container, #footer').stop().animate({'width':width-30},speed);	
		$('#content').stop().animate({'width':width-230},speed);
	}
});