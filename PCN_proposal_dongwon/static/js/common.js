
$(function() {	

	gnbMenu();
});

/*gnb*/
function gnbMenu(){	
	$('.gnb>ul>li>a').click(function(){
		if($('.sub_bg').css('display')=='block'){
			$('.sub_bg').slideUp();
			$('.gnb>ul>li>div').slideUp();
		}else{
			$('.sub_bg').slideDown();
			$('.gnb>ul>li>div').slideDown();
		}
		return false;
	});
	$(':not(.header a)').focus(function(){
		$('.sub_bg').slideUp();
		$('.gnb>ul>li>div').slideUp();
	});
}
