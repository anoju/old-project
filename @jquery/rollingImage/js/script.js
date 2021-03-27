$(function(){
	var $wrap = $('.wrap');
	var $ul = $wrap.children('ul');
	var $li = $ul.children('li');
	//var length = $('.wrap>ul>li').length;
	var length = $li.length;
	var li_width = $('.wrap>ul>li').outerWidth();
	var li_height = $('.wrap>ul>li').outerHeight();

	//넓이, 높이 값 재설정
	$wrap.css({'width':(li_width)+ ((length-1)*10) });
	$ul.css({'width':(li_width)+ ((length-1) *10) });
	$ul.css({'height':(li_height)+ ((length-1) *10) });
	
	li_css();
	li_css2();

	//z-index 설정
	function li_css(){					
		for(var i = 0; i< length; i++){
			$('.wrap>ul>li').eq(i).css('z-index','100'-(i*2));
		}
	}
	
	//이미지 위치 설정
	function li_css2(){					
		for(var i = 0; i< length; i++){
			//$('.wrap>ul>li').eq(i).css('top',i*10);
			//$('.wrap>ul>li').eq(i).css('left',i*10);
			$('.wrap>ul>li').eq(i).stop().animate({'top':i*10,'left':i*10},500);
		}
	}

	//이동방법 설정
	function imageMove( opt ) {
		/*var left;
		if( opt == 1 ) {
			left = -650;

		} else {
			left = 650;
		}*/
		var left = ( opt == 1 ) ? -650 : 650;
		var li_first = $('.wrap>ul>li').eq(0);

		li_first.stop().animate({'left':left},1500,function(){
			li_first.appendTo($ul );
			li_css();
			li_first.stop().animate({'left':length*10,'top':length*10},1500,function(){
				li_css2();
			});
		});
	}


	$('.prev').click(function(){
		imageMove( 1 );
	});				
	
	$('.next').click(function(){
		imageMove( 2 );
	});				
});