$(function(){
	var $img_wrap = $('.img_wrap');
	var $ul = $img_wrap.children('ul');
	var $li = $ul.children('li');
	var length = $li.length;
	var li_width = $('.img_wrap>ul>li').outerWidth();
	var li_height = $('.img_wrap>ul>li').outerHeight();
	//var ul_width = $('.img_wrap>ul').outerWidth();
	//alert(ul_width);

	//넓이, 높이 값 재설정
	$img_wrap.css({'width':(li_width)+ ((length-1)*10) });
	$ul.css({'width':(li_width)+ ((length-1) *10) });
	$ul.css({'height':(li_height)+ ((length-1) *10) });

	
	$('.img_wrap').css('margin-left',-(((li_width)+ ((length-1) *10 + 22))/2));
	//alert((li_width)+ ((length-1) *10));
	
	li_css();
	li_css2();

	//z-index 설정
	function li_css(){					
		for(var i = 0; i< length; i++){
			$('.img_wrap>ul>li').eq(i).css('z-index','100'-(i*2));
		}
	}
	
	//이미지 위치 설정
	function li_css2(){					
		for(var i = 0; i< length; i++){
			$('.img_wrap>ul>li').eq(i).stop().animate({'top':i*10,'left':i*10},500);
		}
	}

	//이동방법 설정
	function imageMove( opt ) {
		var left = ( opt == 1 ) ? -650 : 650;
		var li_first = $('.img_wrap>ul>li').eq(0);

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