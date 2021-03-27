var $imgholder;
var $control;

var pointerStartPosX = 0;
var dragging = false;
var ready = false;
var i = 0;
var imageAmount = 60;
var rotationSpeed = 10;
var autoPlaySpd = 30;

var timer;
var openTimer;

var viewImageArea = 0;
var imageLoader = new Image();
var imageList = [];

(function($){
	$.fn.vrInit = function($rspd, $spd, $imageAmount, $viewImageArea){
		setRotationSpd($rspd);
		setAutoPlaySpd($spd);
		setImageAmount($imageAmount);
		setViewImageArea($viewImageArea)

		initialize();
		allocateEventListener();
	};
})(jQuery);

function initialize()
{
	$imgholder = $("#imgholder");
	$control = $("#control");

	// loading progress
	$(this).viewLoading(true);

	//imageData 
	imageView(getData());

	clearInterval(timer);
	clearInterval(openTimer);
}

function imageView(data)
{
	$(data).find('item').each(function(i){
		var bg_pos_image = $(this).children('img').text();
		imageList.push(bg_pos_image);
		imageLoader.src = imageList[i];
	})
	
	if (document.all)
	{
		imageLoader.attachEvent('onload', function(){
			viewVR();
		});
	}else{
		imageLoader.addEventListener('load', function(){
			viewVR();
		});
	};
}
var lt;
function viewVR()
{
	$(".imgContainer").empty();
	
	$(".imgContainer").imagesLoaded(function(){
		for (var i = 0; i < imageList.length; i++) {
			$(".imgContainer").append("<img src=" + imageList[i] + " />");
		}		
	});
	$(".imgContainer").stop().animate({opacity:0.01},0);
	clearInterval(lt);
	lt = setInterval(function(){
//		$("#tt").html(i);
		if (i >= 58)
		{
			i = 58;
			clearInterval(lt);
			$(".imgContainer").stop().animate({opacity:1},400, function(){
				$(this).viewLoading(false);
			});
		}
		ff();
	}, 11);
}

function allocateEventListener()
{
	$(window).bind("resize", function(){
		$control.width($(window).width() - 115);
		$(".title").css({'margin-left':($control.width() - $(".title").width())/2});
		$(".imgContainer").css({'margin-left':($control.width() - $('.imgContainer').width())/2});
		
		if ($(".imgContainer").width() <= 600){
			setViewImageArea(514);
			$("#vr_ui").css('left', '-55px');
			$("#openDoor").css('left', '-55px');
		}else if ($(".imgContainer").width() >= 700){
			setViewImageArea(600);
			$("#vr_ui").css('left', '-50px');
			$("#openDoor").css('left', '-50px');
		}
	});

	$(window).trigger("resize");
	
	$control.bind("mousedown", function(event){
		event.preventDefault();
		pointerStartPosX = getPointerEvent(event).pageX;
		dragging = true;
		$(".summary").stop().animate({opacity:0}, 500);
	});

	$(document).bind("mouseup", function(){
		if (dragging)
		{
			dragging = false;
			$(".summary").stop().animate({opacity:1}, 500);
		}
	});

	$(document).bind("mousemove", function(event){
		if (dragging)
		{
			var moveto = parseInt((getPointerEvent(event).pageX - pointerStartPosX) / getRotationSpd());
			if (moveto >= 1)
			{
				pointerStartPosX = getPointerEvent(event).pageX;
				rw();
			}
			if (moveto <= -1)
			{
				pointerStartPosX = getPointerEvent(event).pageX;
				ff();
			}
		}
	});

	$control.bind("mousewheel", function(event, delta){
		if (delta > -1)
		{
			rw();
		}else{
			ff();
		};
	})

	$control.bind("mouseleave", function(){
		dragging = false;
	});

	$("#vr_ui").bind("click", function(){
		clearInterval(timer);
		if ($(this).attr('class') == 'auto'){
			clearInterval(timer);
			timer = setInterval(function(){
				ff();
				$("#vr_ui").attr('class', 'stop');
				$("#vr_ui").find('a img').css('top', '-35px');
			}, getAutoPlaySpd());
			$(".summary").stop().animate({opacity:0}, 500);
		}

		if ($(this).attr('class') == 'stop'){
			clearInterval(timer);
			$("#vr_ui").attr('class', 'auto');
			$("#vr_ui").find('a img').css('top', '0');
			$(".summary").stop().animate({opacity:1}, 500);
		}

		e.preventDefault();
	});

	$("#openDoor").bind("click", function(e){
		clearInterval(openTimer);
		if ($(this).attr('class') == 'open'){
			openTimer = setInterval(function(){
				i++;
				if (i == getImageAmount())
				{
					clearInterval(openTimer);
					$("#openDoor").attr('class', 'close');
					$("#openDoor").find('a img').css('top', '-35px');
					i = getImageAmount()-1;
				}
				
				vrMove(i);
			}, getAutoPlaySpd());
		}
		

		if ($(this).attr('class') == 'close'){
			openTimer = setInterval(function(){
				i--;
				if (i == -1)
				{
					clearInterval(openTimer);
					$("#openDoor").attr('class', 'open');
					$("#openDoor").find('a img').css('top', '0');
					i = 0;
				}
				
				vrMove(i);
			}, getAutoPlaySpd());
		}

		e.preventDefault();
	});
}

function getPointerEvent(event) 
{
	return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event;
};

function ff()
{
	i++;

	if (i == getImageAmount())
	{
		i = 0;
	}
	
	vrMove(i);
};

function rw()
{
	i--;

	if (i == -1)
	{
		i = getImageAmount()-1 ;
	}
	
	vrMove(i);
};

function vrMove(i)
{
	var pos = -i * getViewImageArea();
	$(".imgContainer > img").css('top',pos + 'px');
}


function setViewImageArea($h) { this.viewImageArea = $h; }
function getViewImageArea() { return this.viewImageArea; }

function setRotationSpd($spd) { this.rotationSpeed = $spd; }
function getRotationSpd() { return this.rotationSpeed; }

function setAutoPlaySpd($spd) { this.autoPlaySpd = $spd; }
function getAutoPlaySpd() { return this.autoPlaySpd; }

function setImageAmount($imageAmount) { this.imageAmount = $imageAmount; }
function getImageAmount() { return this.imageAmount; }

