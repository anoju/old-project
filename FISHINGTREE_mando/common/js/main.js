var $windowSize,
	maxNo = 3,
	aniFlag = false,
	speed = 1200,
	speed2 = speed*0.7,
	easing = 'easeInOutQuart',
	easing2 = 'easeOutCirc',
	visualTxtPos = 700,
	currentNo = 0;
$(function(){
	$("a[href=#]").click(function(e){
		e.preventDefault();
	});

	$(window).resize(function(){
		setReSize();
		setInit();
	});

	setReSize()
	setInit()
	
	/* BTN prev */
	$(".prev").click(function(){
		$windowSize = windowSize();
		var activeNo = getActive(),
			targetDis = -$windowSize[1]*(activeNo+1);

		if(activeNo>=1 && activeNo <= maxNo-1){
			if(aniFlag == false){
				setActive(activeNo-1);
				aniFlag = true;
				var $visualTxt = $(".visualTxt");

				$(".next").show();

				if(1 == activeNo){
					$(".prev").hide();
				}else{
					$(".prev").show()
				}

				$visualTxt.eq(activeNo).stop().animate({left:-visualTxtPos},speed2, easing2, function(){
					$visualTxt.eq(activeNo-1).stop().animate({left:"0px"},speed2, easing2)
				});
				currentNo--;
				$("#wrapVisual .visualImg").stop().animate({left: -$windowSize[1]*currentNo}, speed, easing,function(){aniFlag=false;})
			}
		}
	});
	/* BTN next */
	$(".next").click(function(){
		$windowSize = windowSize();
		var activeNo = getActive(),
			targetDis = -$windowSize[1]*(activeNo+1),
			targetId = "#img2";

		if(activeNo >= 0 && activeNo < maxNo-1){
			if(aniFlag == false){
				setActive(activeNo+1);
				aniFlag = true;
				var $visualTxt = $(".visualTxt");
				
				$(".prev").show();

				if((maxNo - 2) == activeNo){
					$(".next").hide();
				}else{
					$(".next").show()
				}

				$visualTxt.eq(activeNo).stop().animate({left:-visualTxtPos},speed2, easing2, function(){
					$visualTxt.eq(activeNo+1).stop().animate({left:"0px"},speed2, easing2)
				})
				currentNo++;
				$("#wrapVisual .visualImg").stop().animate({left:-$windowSize[1]*currentNo}, speed, easing,function(){aniFlag=false;})
			}
		}
	});

	/* Visual Area 마우스휠 이벤트*/
	$("#mainVisual").mousewheel(function(event, delta, deltaX, deltaY) {
		if (deltaY == 1){
			$(".prev").stop().trigger("click")
		}else if (deltaY == -1){
			$(".next").stop().trigger("click")
		}else{
			return false;
		}
	});

	/* layer popup close */
	$(".layerPop").hide();
	$("#btnPop01").click(function(){
		$("div.layerPop_01").hide();
	});
	$("#btnPop01Go").click(function(){
		alert('Open Event')
	});
	$("#btnPop02").click(function(){
		$("div.layerPop_02").hide();
	});
	$("#btnPop02Go").click(function(){
		alert('Flagship Store')
	});


})

function setReSize(){
	$windowSize = windowSize();

	$("#wrapVisual,#wrapVisual>ul>li").width($windowSize[1]).height($windowSize[0]-88);

	$("#wrapVisual ul").width($windowSize[1]*3).height($windowSize[0]-88).css("left",-$windowSize[1]*currentNo+"px");

	var $visualMain = $(".visualMainImg");
	$(".visual").css({"width":$windowSize[1],"height":$windowSize[0]}).each(function(){
		if($(this).offset().left<0){
			$(this).css("left",-$windowSize[1])
		}
	})

	/* 2300*1438 */
	/* 1920*1079 */
	/* 1366*768 */
	/* 2300*1293 */
	var minHeight = 920
	if($windowSize[0]<800){minHeight = 768}
	var ow=2300,oh=1293;
	var imgMaxSizeWidth = parseInt((ow*minHeight)/oh);
	var imgMaxSizeHeight = parseInt((oh*imgMaxSizeWidth)/ow);
	var imgMaxSizeHeight2 = parseInt((oh*$windowSize[1])/ow);

	if($windowSize[1]>imgMaxSizeWidth){
		imgReSize($windowSize[1],imgMaxSizeHeight2)
	}else{
		imgReSize(imgMaxSizeWidth,imgMaxSizeHeight)
	}
}

function imgReSize(w,h){
	var $visualMain = $(".visualMainImg");
	$visualMain.attr({"width":w,"height":h})
}

function setInit(){
	$windowSize = windowSize();
	$("#wrapVisual,#wrapVisual>ul>li").width($windowSize[1]).height($windowSize[0]-88);
	$("#wrapVisual ul").width($windowSize[1]*3).height($windowSize[0]-88);
	
	$(".visualTxt").not(":first").css({left:-visualTxtPos})	
	$(".prev").hide();
}

function setActive(obj){
	var $mainVisual = $("#mainVisual .visual");
	$mainVisual.each(function(){
		$(this).removeClass("active")
	});
	$mainVisual.eq(obj).addClass("active");
}

function getActive(){
	var $mainVisual = $("#mainVisual .visual");
	var rtn = 0
	$mainVisual.each(function(){
		if($(this).hasClass("active")){
			rtn = $(this).index();
		}
	});
	return rtn
}

function windowSize(){
	arrayWindowSize = new Array($(window).height(),$(window).width());
	return arrayWindowSize
}


