var windowTop;

$(function(){
	$('.mainNavi li a').bind( 'click', clickArrowMenu );
	motion();

	$(window).scroll(function(){
		windowTop = $(window).scrollTop();
		//console.log(windowTop);		
		motion2();
	});
});	

/* mainNavi 클릭시 실행 함수*/
function clickArrowMenu(e){
	e.preventDefault();
	var thisTarget = $(this).attr("href");
	var $target = $(thisTarget);
	
	$("body").scrollTo( $target ,500 );
}



function motion(){	
	imgMotion2('.con1box1');
	imgMotion2('.con1box2');
	imgMotion2('.con1box3');
	imgMotion2('.con1box4');
	imgMotion2('.con1box5');
	imgMotion2('.con1box6');
	imgMotion2('.con1box7');
	imgMotion2('.con1box8');
	imgMotion2('.con1box9');
}

function motion2(){
	if(windowTop >= 400 ){
		imgMotion2('.con2box1');
		imgMotion2('.con2box2');
		imgMotion2('.con2box3');
		imgMotion2('.con2box4');
	}

	if(windowTop >= 1100 ){
		imgMotion2('.con3box1');
		imgMotion2('.con3box2');
		imgMotion2('.con3box3');
	}
}



function imgMotion(target){
	$(target).animate({'left':'50%','top':'50%'},1000);	
}

function imgMotion2(target){
	var idx = $(target).index()
	//alert(idx)
	$(target).delay(200*idx).animate({'left':'50%','top':'50%','opacity':'1'},1000);	
}