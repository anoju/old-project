(function($){
	$.fn.viewLoading = function($boo){
		isLoading($boo)
	};
})(jQuery)

function isLoading($boo)
{
	var c = ($(window).width() - 115)/2;
//	alert(c);
	if ($boo)
	{
		var loadGIF = $(getData()).find('loading').children('img').text();
		$("#imgholder").append("<div id='loading'><img src=" + loadGIF + " alt='loading' /></div>");
		$("#loading").css({'top':'117px', 'left':c+'px'});
	}else{
		$("#loading").remove();
	}
}