/* article - width */
function assemble()	{
	var $container = $('.section');
	$container.masonry({
		itemSelector: '.masonry-brick',
		columnWidth:240
	});
}

/* random + more */
$(document).ready(function() {
	var allSection = $('.section').length;
	if(allSection == 1) {
		$('.section').eq(0).find('div:last-child').removeClass('more');
		//var secCnt = $('.section > .article').length;
		//alert(secCnt);
		//$('.section').eq(0).find('div:last-child').addClass('empty');
	}else{
		//alert("1");
		//alert(allSection);
		for(i=1; i<=allSection; i++){
			//alert("2");
			$('.section').eq(i).hide();
			//alert("3");
			if(i < allSection){
				$('.section').eq(0).find('div:last-child').addClass('more');
			}
		}
	
	}
	/*
	if(allSection > 0) {
		for(i=1;i<allSection;i++) {
			$('.section').eq(i).hide();
			if(i==(allSection-1))	{
				$('.section').eq(i).find('div:last-child').removeClass('more');
				//$('.section').eq(i).find('div:last-child').addClass('empty');
			}
		}
	}
	*/
	assemble();
	$('.more').live('click',function(event) {
		$eObj = $(event.target).parent().parent().next();
		if($eObj)	{
			$(event.target).find('button').remove();
			$(event.target).parent().removeClass('more');
			$(event.target).parent().addClass('empty');
			$eObj.show();
			resizeCheck();
      setTimeout(function(){
        $.scrollTo( $eObj.offset().top, 1000, {queue:true} );
      },500);
      $(event.target).die('click');
		}
		assemble();
	});

	/* h1 - text */
	$("h1").find("a").mouseover(function() {
		$(this).text("acg/design");
	}).mouseout(function(){
		$(this).text("/design");
	});

	/* layPop */
	$("#layPop").hide();
    /*
	$(".article > a").click(function(){
		$('body').append('<div id="dimm"></div>');
		$(document).scrollTop(0);
		$("#footer").hide();
		$("#layPop").fadeIn();
		//Dimmed layer
		var vSize = $("#layPop").height();
		$("#dimm").css('height',vSize);
		$("#dimm").fadeIn();
		$("#container").css("height","0");
		$("#container").css("overflow","hidden");
	});
    */

	$("#close").click(function(){
		$("#dimm").hide();
		$("#layPop").hide();
		$("#footer").show();
		$("#container").css("height","auto");
		$("#container").css("overflow","visible");
	});

	/* hover - ie6 */
	$(".section .figure").hover(function () {
		$(this).addClass("hover");
	}, function () {
		$(this).removeClass("hover");
	});
	
});