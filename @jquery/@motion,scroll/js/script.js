var windowTop
$(function(){
	$('.mainNavi li a').bind( "click", clickArrowMenu );
	motion();

	$(window).scroll(function(){
		windowTop = $(window).scrollTop();
		console.log(windowTop);		
		motion2();
		motion3();
	});
});	

function clickArrowMenu(e){
	e.preventDefault();
	var thisTarget = $(this).attr("href");
	var $target = $(thisTarget);
	
	$("body").scrollTo( $target ,500 );
}



/* 사이트 열리면 바로 실행 */
function motion(){	
	imgMotion2('#contents1 .box1');
	imgMotion2('#contents1 .box2');
	imgMotion2('#contents1 .box3');
	imgMotion2('#contents1 .box4');
}

/*스크롤 위치값에 도달하면 바로 실행*/
function motion2(){
	if(windowTop >= 200 ){
		imgMotion2('#contents2 .box1');
		imgMotion2('#contents2 .box2');
		imgMotion2('#contents2 .box3');
		imgMotion2('#contents2 .box4');
	}
}

/*스크롤 위치값에 따라 하나씩*/
function motion3(){
	if(windowTop >= 700 ){
		imgMotion('#contents3 .box1')
	}
	if(windowTop >= 800 ){
		imgMotion('#contents3 .box2')
	}
	if(windowTop >= 900 ){
		imgMotion('#contents3 .box3')
	}
	if(windowTop >= 1000 ){
		imgMotion('#contents3 .box4')
	}
}


function imgMotion(target){
	$(target).animate({'left':'50%','top':'50%'},1000);	
}

function imgMotion2(target){
	var idx = $(target).index()
	//alert(idx)
	$(target).delay(200*idx).animate({'left':'50%','top':'50%'},1000);	
}