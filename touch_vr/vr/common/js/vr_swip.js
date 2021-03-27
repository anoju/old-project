var j = 0;
$(function() {			
	//Enable swiping...
	$(window).bind("resize", function(){
		
	});
	$(window).trigger("resize");
	$("#control").swipe( {
		swipeStatus:function(event, phase, direction, distance, duration, fingers)
		{
			if (phase == 'cancel' || phase == 'end')
			{
				$(".summary").stop().animate({opacity:1}, 100);
			}else if (phase == 'start' || phase == 'move'){
				$(".summary").stop().animate({opacity:0}, 100);
			}

			if (dragging == false){
				dragging = false;

				switch (direction)
				{
					case 'left':
						j++;
						if (j >= 59)
						{
							j = 0;
						}
						//distance*5;
//						alert($(this).width());
						if ($('.imgContainer').width() == 600)
						{
							$(".imgContainer").find('img').css('top', -j * 514 + 'px');
						}else if ($('.imgContainer').width() == 700){
							$(".imgContainer").find('img').css('top', -j * 600 + 'px');
						}
					return;
					case 'right':
						j--;
						if (j < 0){
							j = 58;
						}
						//distance*5;
						if ($('.imgContainer').width() == 600)
						{
							$(".imgContainer").find('img').css('top', -j * 514 + 'px');
						}else if ($('.imgContainer').width() == 700){
							$(".imgContainer").find('img').css('top', -j * 600 + 'px');
						}
					return;
				}
			}
		},
		threshold:200,
		maxTimeThreshold:5000,
		fingers:'all'
	});
});