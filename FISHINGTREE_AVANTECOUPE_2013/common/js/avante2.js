	//서버 타임을 가져온다 
	var dateString = '';
	setInterval(function () {
	$.ajax({
		type: "POST",
		url: "./get_server_time.asp",
		data: { },
		success: function (data) {			
			dateString = data;
			
		},
		error: function (jqXhr, textStatus, errorThrown) {
		},
		complete: function () {
		}
	});
	}, 1000)



var timer;
var date;
var eventDays = [29,30,31,1,2,3,4,5,6,7];
var spList = [];
var idx = 19;
var currentDay = 0;

var Sprite = function(params){
	var width = params.width;
	var height = params.height;
	var imagesWidth = params.imagesWidth;
	var $element = params.$drawTarget.append('<div></div>').find(':last');
	var elemStyle = $element[0].style;
	var mathFloor = Math.floor;

	$element.css({
		position: 'absolute',
		width: width,
		height: height,
		backgroundImage: 'url(' + params.images + ')'			
	});

	var that = {
		draw: function (x, y) {
			elemStyle.left = x + 'px';
			elemStyle.top = y + 'px';
		},
		changeImage: function (index) {
			index *= width;
			var vOffset = -mathFloor(index / imagesWidth) * height;
			var hOffset = -index % imagesWidth;
			elemStyle.backgroundPosition = hOffset + 'px ' + vOffset + 'px';
		},
		show: function () {
			elemStyle.display = 'block';
		},
		hide: function () {
			elemStyle.display = 'none';
		},
		destroy: function () {
			$element.remove();
		}
	};
	return that;
}

$(document).ready(function(){
	init();
	allocateEventListener();
});

function init(){

}

function allocateEventListener(){
	$(".tab li a").bind("click", tabClickHandler);
	$(".tab li:first a").trigger("click");

	winnerTime();

	$(".btnZoom").bind("click", zoomMap);
	$(".closeBtn").bind("click", closeModalWindow);
	$("#modalWindow").bind("click", closeModalWindow);

	$(".avanteInfo").bind("click", avanteInfoClick);
}

function avanteInfoClick(e){
	alert("2013년 4월 1일 오픈됩니다.");
	e.preventDefault();
}

function tabClickHandler(e){
	var clsName = $(this).attr('class');
	$(this).each(function(){
		$(".tab li a").find('img').removeClass('active');
	});
	$(this).find('img').addClass('active');
	$(".tabSummary li").each(function(){
		$(this).fadeOut(0);
	});
	switch (clsName)
	{
		case 'nfc_0':
			$(".tabSummary li:first").fadeIn();
			break;
		case 'nfc_1':
			$(".tabSummary li:last").fadeIn();
			break;
		default:
			$(".tabSummary li:first").fadeIn();
			break;
	}

	e.preventDefault();
}

function winnerTime(){
	var params = {
		images: './image/winnerPdtAll.png',
		imagesWidth: 810,
		width: 162,
		height: 195,
		$drawTarget: $('.winner')
	};

	for (var j = 0; j < eventDays.length; j++)
	{
		spList.push(Sprite(params));
	}

	var posList = [0, 162, 324, 486, 648];

	for (var k = 0; k < eventDays.length; k++)
	{
		spList[k].changeImage(k+10);
		if (k > 4)
		{
			spList[k].draw(posList[k - 5], 195);
		}else{
			spList[k].draw(posList[k], 0);
		}
	}

	clearInterval(timer);
	timer = setInterval(function(){
		idx++;
		
		date = toTimeObject(dateString); //서버 타임을 위해 변경
//		date = new Date(); 
//		$("#txt").html("Time " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds() + "<br> DAY : " + date.getDate());
		
		for (var i = 0; i < eventDays.length; i++)
		{
			if (date.getDate() == eventDays[i])
			{
				spList[i].changeImage(i + 20);
				currentDay = i;
			}

			if (currentDay > i)
			{
				spList[i].changeImage(i);
			}
		}
	}, 1);
}

function zoomMap(e){
	var mapCenter = ($(document).width() - $(".map").width())/2;
	var mapV = ($(document).height() - $(".map").height()) - 240;
	$("#modalWindow").css('height', $(document).height()).stop().animate({opacity:0.7},400, function(){
		$(this).stop().fadeIn();
	});
	$(".map").delay(500).fadeIn('slow');
	
	$(window).bind("resize", function(){
		$(".map").css({'margin-left':mapCenter, 'margin-top':mapV});
	});
	$(window).trigger("resize");

	e.preventDefault();
}

function closeModalWindow(e){
	$("#modalWindow").css('height', $(document).height()).stop().animate({opacity:0},200, function(){
		$(this).stop().fadeOut();
	});
	$(".map").stop().fadeOut();

	e.preventDefault();
}


//추가된 function
function toTimeObject(timestr) {
    if(timestr.length == 14) { // 날짜 String 최소길이 체크
				var year  = timestr.substr(0,4);				
				var month = timestr.substr(4,2) - 1; // 1월=0,12월=11 이므로 1 감해준다
				var day   = timestr.substr(6,2);
				var hour  = timestr.substr(8,2);
				var min   = timestr.substr(10,2);
				var sec   = timestr.substr(12,2);
				return new Date(year, month, day, hour, min, sec);   
    } 
	else {
		return new Date();
    }
}

