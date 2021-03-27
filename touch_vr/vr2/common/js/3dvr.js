// vrInit($rspd, $spd, $imageAmount, $viewImageArea);

// $rspd : 드래그 이벤트 속도제어
// $spd : autoPlay 속도제어
// $imageAmount : 총 렌더링 된 이미지 갯수. background-position
// $viewImageArea : 이미지가 보여질 뷰포트의 height. 각 시퀀스의 크기와 일치.


var vrData = "/proposal/vr2/common/data/vr2.xml";
var openVrData = "/proposal/vr/common/data/open.xml";
var HEIGHT = 600;
var LEN = 59;
var st_timer;
var sec = 0;

$(document).ready(function(){
	//$("#uiContainer").height($(window).height());
//	
	addEvent();
});

function addEvent(){
	$(".uiBtnGroup li").bind("click", function(e){
		if ($(this).hasClass('active'))
		{
			return;
		}
		$(this).each(function(){
			$(".uiBtn a").removeClass('active');
		});
		$(this).find('a').addClass('active');
		
		
		var clsName = $(this).attr('class').substr(6);
		imageList = []; 
		i=0;

		switch (clsName)
		{
		case 'vr':
			$(this).dataInit(vrData);
			$(this).vrInit(3, 40, LEN, HEIGHT);
			$(".title").show();
			$(".summary").stop().animate({opacity:1}, 500);
			break;
		case 'open':
			$(this).dataInit(openVrData);
			$(this).vrInit(3, 60, LEN, HEIGHT);
			$(".title").show();
			$(".summary").stop().animate({opacity:0}, 500);
			break;
		case 'usp':
			uspEvent();
//			viewMotion(0, 215);
			$(".title").hide();
			break;
		}
		
		viewSelected(clsName);
		e.preventDefault();
	});
	
	$(".uiBtnGroup li:first").trigger("click");
}

//var isState = true;
//var bt;
//var b_name = "";
//function setName($name){b_name = $name;}
//function getName(){return b_name;}
//


function uspEvent(){
	$(".uspGnb li a").bind("click", uspBtnClickHandler);

	$(window).bind("resize", function(){
		
		$("#control").width($(window).width() - 115);
		
		if ($('.usp_con > li img').width() == 525)
		{
			$(".uspGnbContainer").css('margin', '0 auto');
			$("#usp").css({'width':'525px', 'margin-left': ($("#control").width() - 525) / 2 + 'px'});
		}else if ($('.usp_con > li img').width() == 639){
			$(".uspGnbContainer").css('margin', '0 auto');
			$("#usp").css({'width':'639px', 'margin-left':  ($("#control").width() - 639) / 2 + 'px'});
		}
	});

	$(".uspGnb li:first a").trigger("click");
	$(window).trigger("resize");
}

function uspBtnClickHandler(e){
	$(this).each(function(){
		$(".uspGnb li a").find('img').removeClass('activate_usp');
	});
	$(this).find('img').addClass('activate_usp');

	var uspContent = $(this).attr('href').substr(1);
	var page = parseInt(uspContent.substr(4), 10);
	
	if ($('.usp_con').width() == 525)
	{
		var moveContent =  -(page * 432);
	}else if ($('.usp_con').width() == 639){
		var moveContent =  -(page * 526);
	}

	$(".usp_con").stop().animate({opacity:0},
	{
		duration: 100,
		complete: function(){
			$(this).css('top', moveContent + 'px');
			$(this).stop().animate({opacity:1}, 400);
		}
	});
	
//	$("#control").width($(window).width() - 115);
	//$(window).bind("resize", function(){
		if ($('.usp_con > li img').width() == 525)
		{
			if (page == 0)
			{
				viewMotion(page, 174);
			}else if (page == 1){
				viewMotion(page, 54);
			}else if (page == 2){
				viewMotion(page, 170);
			}
		}else if ($('.usp_con > li img').width() == 639){
			if (page == 0)
			{
				viewMotion(page, 215);
			}else if (page == 1){
				viewMotion(page, 73);
			}else if (page == 2){
				viewMotion(page, 197);
			}		
		}
//	});
	

//	if (page == 0)
//	{
//		viewMotion(page, 215);
//	}else if (page == 1){
//		viewMotion(page, 73);
//	}else if (page == 2){
//		viewMotion(page, 197);
//	}
	
	e.preventDefault();
}

function viewMotion(page, h){	
	$(".usp_con").css('top', '0');
	clearInterval(st_timer);
	st_timer = setInterval(function(){
		sec++;
		
		if (sec >= 25)
		{
			sec = 0;
		}

		$(".step_" + page + " ul").css('top', -(sec * h) + 'px');
	}, 50);
}

function viewSelected(view){
	switch (view)
	{
	case 'vr':
		clearInterval(st_timer);
		$("#openDoor").attr('class', 'open');
		$("#openDoor").find('a img').css('top', '0');
		viewFactory('block', 'block', 'none', 'none', 'block');
		return;
	case 'open':
		$("#vr_ui").attr('class', 'auto');
		$("#vr_ui").find('a img').css('top', '0');
		clearInterval(st_timer);
		viewFactory('none', 'none', 'block', 'none', 'block');
		return;
	case 'usp':
		clearInterval(timer);
		clearInterval(openTimer);

		$("#openDoor").attr('class', 'open');
		$("#openDoor").find('a img').css('top', '0');

		$("#vr_ui").attr('class', 'auto');
		$("#vr_ui").find('a img').css('top', '0');

		viewFactory('none', 'none', 'none', 'block', 'none');
		$(".imgContainer").empty();
		return;
	}
}

function viewFactory(isView_vr_ui, isView_control, isView_openDoor, isView_usp, isView_imgContainer){
	$("#vr_ui").stop().animate({opacity:0},
		{
			duration: 0,
			complete: function(){
				$(this).stop().animate({opacity:1}, 1200);
				$(this).css('display', isView_vr_ui);
			}
		})
	$("#control").css('display', isView_control);
	$("#openDoor").stop().animate({opacity:0},
		{
			duration: 0,
			complete: function(){
				$(this).stop().animate({opacity:1}, 700);
				$(this).css('display', isView_openDoor);
			}
		})
	$("#usp").stop().animate({opacity:0},
		{
			duration: 0,
			complete: function(){
				$(this).stop().animate({opacity:1}, 700);
				$(this).css('display', isView_usp);
			}
		})
	$(".imgContainer").css('display', isView_imgContainer);;
//	$(".imgContainer").stop().animate({opacity:0},
//		{
//			duration: 0,
//			complete: function(){
//				$(this).stop().animate({opacity:1}, 0);
//				$(this).css('display', isView_imgContainer);
//			}
//		})
}