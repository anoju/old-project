$(function(){
	var index = 1;
	var $height = $(document).outerHeight();
	var length = $('.bg_wrap>div').length;
	//alert('a');				
	var time = setInterval(timer,5000);
	//$('.bg_wrap').css('height',$height);
	$('.bg_wrap>div').eq(0).show();

	function timer(){
		if(index == (length-1)){									
			$('.bg_wrap>div').hide();
			$('.bg_wrap>div').eq(index).fadeIn('600');				
			index = 0;		
		}else{	
			$('.bg_wrap>div').hide();
			$('.bg_wrap>div').eq(index).fadeIn('600');
			index++;
		}					
	};					
});