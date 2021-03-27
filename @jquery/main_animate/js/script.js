var duration = 500;			// 이동 속도 
var length;
var div_width;
var bannerWidth;
var sum;
var prevIdx ;
var idx;
var direction;
var positionX = [];

$(function(){
	length = $('.contens_inner>div').length;
	div_width = $('.contens_inner>div').eq( length-1 ).outerWidth();
	bannerWidth = $('.banner').outerWidth();
	
	//초기화
	sum = 0;
	prevIdx = 0;
	idx = 1;
	positionX[ 0 ] = 0;

	setDefault();
	setLayOut();
	addEvent();
});

function setDefault() {

}

function setLayOut() {
	$.each( $('.contens_inner>div'), function(){
		sum += $(this).outerWidth();	
		positionX.push( sum ); //배열에 각각 넓이값을 순서대로 저장
	});

	$('.contens_inner').css( 'width', sum );	//.contens_inner 넓이 재설정
}

function addEvent() {
	addLogo();
	addLNB();
	addContentTitle();
	addArrowMenu();
}

// 로고 클릭시 이동
function addLogo() {
	$('.lnb>h1>a').click( function( $evt ) {
		$evt.preventDefault();
		$('.contens_inner').stop().animate( {'left':0}, duration );
	});
}

// lnb 클릭시 이동
function addLNB() {
	$('.lnb>ul>li>a').click( function( $evt ) {
		$evt.preventDefault();

		var index = $(this).parent('li').index();
		var left = bannerWidth + ( div_width * index );
		$('.contens_inner').stop().animate( {'left':-left}, duration );
	});
}

// 소제목 클릭 이동
function addContentTitle() {
	$('.contens_inner>div>a').click( function( $evt ) {
		$evt.preventDefault();

		var index = $(this).parent('div').index();
		var left = bannerWidth + ( div_width * (index-1) );
		if(index !=0){
			$('.contens_inner').stop().animate( {'left':-left}, duration );
		}
	});
}

function addArrowMenu() {
	$('.prev').bind( "click", clickArrowMenu );
	$('.next').bind( "click", clickArrowMenu );
}

function clickArrowMenu( $evt ) {
	$evt.preventDefault();
	prevIdx = idx;
	if( $(this).index() == 1 ) idx--;
	else idx++;

	// alert( "(1) clickSlideMenu: "+idx );
	updateManager( true );
}

function updateManager( $isArrow ) {
	if( prevIdx == idx ) return;

	direction = ( prevIdx < idx ) ? "right" : "left";
	if( $isArrow ) {
		if( prevIdx == length && idx == 1 ) direction = ( prevIdx > idx ) ? "right" : "left";
		if( prevIdx == 1 && idx == length ) direction = ( prevIdx > idx ) ? "right" : "left";
	}

	updateIdx();
	moveContainer();
}

function updateIdx( $idx ) {
	if( idx < 1 ) idx = length;
	else if( idx > length ) idx = 1;
}

function moveContainer() {
	var targetX = -positionX[ idx-1 ]; //저장된 배열로 위치이동에 사용
	$('.contens_inner').stop().animate( {'left':targetX}, duration );
	// alert( "[ "+idx+" ] "+targetX );
}