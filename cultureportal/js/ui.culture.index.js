$(function(){
	var event = $('div.event');
	if(event.size() > 0){ setCarousel(event, 200, 5000); }

	var promote = $('div.promote');
	if(promote.size() > 0){ setCarousel(promote, 500, 5000); }

	$('div.popularity a').changeSrc();

	extPerform();

	$('div.news').pcnTab({srcChange : false});
	$('div.snsCulture').pcnTab({srcChange : true});

	$('div.ticketDiscount').quickFlip();
	$('div.video').quickFlip();

	$(window).load(function(){
		setTimeout(function(){
			$('div.video a:first').trigger('click');
		}, 1500);
		setTimeout(function(){
			$('div.ticketDiscount a:first').trigger('click');
		}, 2000);
	});
});

function extPerform(){
	$('div.perform li > a').bind('focus', function(){
		$('div.perform').addClass('wide');
		$('div.news, div.ticketDiscount').addClass('hidden');
	});
	$('div.perform').bind('mouseenter', function(){
		$('div.perform').addClass('wide');
		$('div.news, div.ticketDiscount').addClass('hidden');
	});
	$('*').not('div.perform *').bind('focus', function(){
		$('div.perform').removeClass('wide');
		$('div.news, div.ticketDiscount').removeClass('hidden');
	});
	$('div.perform').bind('mouseleave', function(){
		$('div.perform').removeClass('wide');
		$('div.news, div.ticketDiscount').removeClass('hidden');
	});
}