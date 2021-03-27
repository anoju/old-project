$(function(){
	tabUtil();
	navi();

	$('#tabcon2').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('on');
	});

});	

function tabUtil() {
	var $height = $('#tabcon1').outerHeight();;
	$('#contents').css({'height':$height});
	$('#tabNavi li:first').addClass('on');


	$('#tabNavi>li>a').click(function(e) {
		e.preventDefault();
		var idx = $(this).parent().index();
		$height = $($(this).attr('href')).outerHeight();;
		//alert($height);
		if($(this).parent().hasClass('none')){
			alert('준비중입니다.')
		}else{
			$(this).parent().addClass('on').siblings().removeClass('on')
			$('#contents>div').stop().animate({'left':-100*idx+'%'},500,function(){
				$('#contents').css({'height':$height});
			});
		}
	});	
}


function navi() {

	$('.next').click(function(e) {
		e.preventDefault();
		var aa = $(this).parents('.navi').parent().parent();
		var idx = aa.index();
		//alert(idx);
		$height = $($(this).attr('href')).outerHeight();

		if($(this).hasClass('none')){
			alert('준비중입니다.')
		}else{
			
			aa.next().addClass('on').siblings().removeClass('on')
			$('#contents>div').stop().animate({'left':-100*(idx+1)+'%'},500,function(){
				$('#contents').css({'height':$height});
			});
			
		}
	});	

	$('.prev').click(function(e) {
		e.preventDefault();
		var aa = $(this).parents('.navi').parent().parent();
		var idx = aa.index();
		//alert(idx);
		$height = $($(this).attr('href')).outerHeight();

		if($(this).hasClass('none')){
			alert('준비중입니다.')
		}else{
			
			aa.prev().addClass('on').siblings().removeClass('on')
			$('#contents>div').stop().animate({'left':-100*(idx-1)+'%'},500,function(){
				$('#contents').css({'height':$height});
			});
			
		}
	});	
}
