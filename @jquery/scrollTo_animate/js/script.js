/*$(function(){
	$(".menu li a").click(function(e){
		e.preventDefault();
		var thisTarget = $(this).attr("href");
		var $target = $(thisTarget);
		
		$("body").scrollTo( $target ,500 );
	});
});*/



$(function(){
	$('.menu li a').bind( "click", clickArrowMenu );
	$('.lnb h1 a').bind( "click", clickArrowMenu );
});	

function clickArrowMenu( e ) {
	e.preventDefault();
	var thisTarget = $(this).attr("href");
	var $target = $(thisTarget);
	
	$("body").scrollTo( $target ,500 );
}
