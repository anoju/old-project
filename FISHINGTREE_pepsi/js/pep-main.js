var imgs0 = [
	{src:'img/bricks/main_brick_game_02.jpg', alt:'pep game'},
	{src:'img/bricks/main_brick_game_03.jpg', alt:'pep game'},
	{src:'img/bricks/main_brick_game_01.jpg', alt:'pep game'}
];
var imgs1 = [
	{src:'img/bricks/main_brick_game_12.jpg', alt:'pep game'},
	{src:'img/bricks/main_brick_game_13.jpg', alt:'pep game'},
	{src:'img/bricks/main_brick_game_11.jpg', alt:'pep game'}
];
var imgs2 = [
	{src:'img/bricks/main_brick_game_22.jpg', alt:'pep game'},
	{src:'img/bricks/main_brick_game_23.jpg', alt:'pep game'},
	{src:'img/bricks/main_brick_game_21.jpg', alt:'pep game'}
];

/*
var imgs0 = [
	{src:'/img/bricks/main_brick_game_01.jpg', alt:'pep game'},
	{src:'/img/bricks/main_brick_game_11.jpg', alt:'pep game'},
	{src:'/img/bricks/main_brick_game_21.jpg', alt:'pep game'}
];
var imgs1 = [
	{src:'/img/bricks/main_brick_game_11.jpg', alt:'pep game'},
	{src:'/img/bricks/main_brick_game_21.jpg', alt:'pep game'},
	{src:'/img/bricks/main_brick_game_01.jpg', alt:'pep game'}
];
var imgs2 = [
	{src:'/img/bricks/main_brick_game_21.jpg', alt:'pep game'},
	{src:'/img/bricks/main_brick_game_01.jpg', alt:'pep game'},
	{src:'/img/bricks/main_brick_game_11.jpg', alt:'pep game'}
];
*/


$(function(){
	initMasonry();

	if(fuckBrowser2){
		$(".live-tile:not(:eq(1), :eq(2), :eq(3), :eq(6))").liveTile();
		$(".live-tile").eq(1).liveTile(
			{mode:'flip', swap: 'image', backImages: imgs0, backIsRandom: false }
		);
		$(".live-tile").eq(2).liveTile(
			{mode:'flip', swap: 'image', backImages: imgs1, backIsRandom: false }
		);
		$(".live-tile").eq(3).liveTile(
			{mode:'flip', swap: 'image', backImages: imgs2, backIsRandom: false, direction: "horizontal" }
		);
		$(".live-tile").eq(6).liveTile({ direction: "horizontal" });
	}else{
		$(".live-tile:not(:eq(1), :eq(2), :eq(3))").liveTile();
		$(".live-tile").eq(1).liveTile(
			{mode:'flip', swap: 'image', backImages: imgs0, backIsRandom: false }
		);
		$(".live-tile").eq(2).liveTile(
			{mode:'flip', swap: 'image', backImages: imgs1, backIsRandom: false }
		);
		$(".live-tile").eq(3).liveTile(
			{mode:'flip', swap: 'image', backImages: imgs2, backIsRandom: false }
		);
	}

	setInterval('updateClock()', 1000);

	$(".sns-section").remove();
});

function updateClock(){
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " <span class=\"tod\">" + timeOfDay + "</span>";
	$(".pepClock").html(currentTimeString);
}

$(function() {
	//if($.cookie('pl0625') != 'ok'){$('.asidePL0625').fadeIn('fast');}
	$("#closePT").click(function(){popClose();}).css("cursor", "pointer");
	$("#closeP").click(function(){$('#popup').fadeOut();}).css("cursor", "pointer");
});

function popClose(val){
	$('.asidePL0625').fadeOut();
	/*
	if (val == 'do'){
		$.cookie('pl0625', 'ok', {expires:1, domain:'pepsievent.co.kr', path:'/', secure:0});
	}
	*/
}