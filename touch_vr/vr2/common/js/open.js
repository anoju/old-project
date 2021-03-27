var $imgholder;
var $control;

var pointerStartPosX = 0;
var dragging = false;
var ready = false;
var i = 0;
var imageAmount = 61;
var rotationSpeed = 10;
var autoPlaySpd = 30;
var timer;
var viewImageArea = 0;
var imageLoader = new Image();
var imageList = [];

(function($){
	$.fn.openVrInit = function($rspd, $spd, $imageAmount, $viewImageArea){
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
	$imgholder = $("#openVr_imgholder");
	$control = $("#openVr_control");

	// loading progress
	$(this).viewLoading(true);

	//imageData 
	imageView(getData());
}

function imageView(data)
{
	$(data).find('item').each(function(i){
		var bg_pos_image = $(this).children('imgOpen').text();
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

function viewVR()
{
	for (var i = 0; i < imageList.length; i++) {
		$imgholder.append("<img src=" + imageList[i] + " />");
	};
	$(this).viewLoading(false);
}

function allocateEventListener()
{
	$control.bind("mousedown", function(event){
		event.preventDefault();
		pointerStartPosX = getPointerEvent(event).pageX;
		dragging = true;

	});

	$(document).bind("mouseup", function(){
		if (dragging)
		{
			dragging = false;
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

	$("input").bind("click", function(){
		$(this).toggleClass("checked");
		if ($(this).hasClass("checked"))
		{
			clearInterval(timer);
		}else{
			timer = setInterval(function()
			{
				ff();
			}, getAutoPlaySpd());
		}
	})
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
	$imgholder.find('img').css('top',pos + 'px')
}


function setViewImageArea($h) { this.viewImageArea = $h; }
function getViewImageArea() { return this.viewImageArea; }

function setRotationSpd($spd) { this.rotationSpeed = $spd; }
function getRotationSpd() { return this.rotationSpeed; }

function setAutoPlaySpd($spd) { this.autoPlaySpd = $spd; }
function getAutoPlaySpd() { return this.autoPlaySpd; }

function setImageAmount($imageAmount) { this.imageAmount = $imageAmount; }
function getImageAmount() { return this.imageAmount; }

