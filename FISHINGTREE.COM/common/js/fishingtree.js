var easing = "easeInOutQuart";
var currentPos = 0;
var currentPosNew = 0;
var $gngOn = $('#gngOn');
var $gngOff = $('#gngOff');

$("a[href=#]").click(function(e){
	e.preventDefault();
})

/* GNB Scroll */
$(".gnb li").click(function(e){
	e.preventDefault();
	var thisTarget = $(this).find("a").attr("href");
	var $target = $(thisTarget);

	$("html, body").stop(false).animate( {scrollTop:$target.offset().top}, 1500, easing );
});

/* btnTOP */
$(".btnTop").click(function(e){
	e.preventDefault();
	$("html,body").animate( {scrollTop:0 }, 800, easing );
});

/* Left Menu Script */
$('.gnbWrap').hover(
	function(){
		$gngOn.show();
		$gngOff.hide();
	},
	function(){
		$gngOn.hide();
		$gngOff.show();
});


/* Left Menu SELECTED fix
$('#gngOn > div.gnbWrap > ul.gnb > li').click(function(){
	var thisNO = $(this).index();
	$("#gngOff ul.gnb li").removeClass("selected").eq(thisNO).addClass("selected")
	$("#gngOn ul.gnb li").removeClass("selected").eq(thisNO).addClass("selected")
}).eq(0).click(); 
*/


//////////////////////////////////////LAYER POPUP/////////////////////////////////////
/* read more */
$('.btnReadmore').click(function(e){
	e.preventDefault();
	var target = $(this).children().attr("href");
	var $target = $(target)
	addnDimLayer();
	$target.css("top", e.pageY).show();
});

/* location */
$('.util_01').click(function(e){
	e.preventDefault();
	addnDimLayer();
	$("#location").show();
});

/* contact_us */
$('.util_02').click(function(e){
	e.preventDefault();
	addnDimLayer();
	$("#contact").show();
});
$('.btnClose').click(function(e){
	e.preventDefault();
	$("#dimLayer").remove();
	$(this).parent().hide();
});
$('#dimLayer').live("click",function(e){
	e.preventDefault();
	$('.btnClose').click()
});
function addnDimLayer(){
	var createDiv = "<div id='dimLayer'></div>";
	$("body").append(createDiv);
	$("#dimLayer").css({'opacity': '0.8','display': 'block','height':'3000px','position':'fixed'});
}

//////////////////////////////////////Layer 1 Rolling/////////////////////////////////////
/* Main Top Image */
var currentNum = 0;
var spd = 8000;
var settime = setInterval( fn_roll, spd );

$('ul.btnRolling > li').click(function(){
	var thisNo = $(this).index();
	
	$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off', '_on'));
	var $siblings = $(this).siblings();
	$siblings.each(function(){
		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on', '_off'))
	});
	
	$('ul.slidesCon > li').eq(thisNo).addClass("active").fadeIn(1200).siblings().removeClass("active").hide();
});

/* Main Top Image Rolling */
$(".btnRolling > li > a > img").hover(
	function(){
		clearInterval( settime );
	},function() {
		settime = setInterval( fn_roll, spd );
	}
);
function fn_roll(){
	currentNum = getActive();
	currentNum++;
	
	if( currentNum > 2 ) {
		currentNum = 0; 
	}

	$(".btnRolling > li").eq( currentNum ).click();
}

function getActive() {
	var rtn;
	$('ul.slidesCon > li').each(function(){
		if($(this).hasClass("active")){
			rtn = $(this).index();
			return false;
		}
	});
	return rtn;
}

//////////////////////////////////////SNS SHARE/////////////////////////////////////
$(".btn_share_fb").click(function(){
	var thisNo = $(".btn_share_fb").index(this)
	fbshare(thisNo)
})
$(".btn_share_tw").click(function(){
	var thisNo = $(".btn_share_tw").index(this)
	twshare(thisNo);
})
function fbshare(n){
	var thisHost = "http://" + location.host;
	
	var defText = fbText(n);
	fbtitle = defText[0];
	fbSummary = defText[1];			
	imgUrl = thisHost + defText[2];
	returnUrl = defText[3];
	
	if(IsMobile.detect()){
		url = "http://www.facebook.com/sharer.php?u=" + returnUrl + "&t=" + encodeURI(fbtitle) + "&feature=share";

	}else{
		url = "http://www.facebook.com/sharer.php?s=100&p[url]=" + returnUrl + "&p[images][0]=" + imgUrl + "&p[title]=" + encodeURI(fbtitle) + "&p[summary]=" + encodeURI(fbSummary);	
	}
	windowOpen(url, 700, 400, 'no');
	return false;	
}
function twshare(n){
	var thisHost = "http://" + location.host;
	var ret = "";

	twtitle = twText(n);
	
	titl = twtitle;
	titl = titl.replace(/'/gi, "´");
	titl = titl.replace(/"/gi, "˝");
	titl = encodeURIComponent(titl);

	var url = "http://twitter.com/share?url=&text=" + titl + ret;

	windowOpen(url, 700, 400, 'no');
	return false;
}
function windowOpen() {
	var nUrl; var nWidth; var nHeight; var nLeft; var nTop; var nScroll;
	nUrl = arguments[0];
	nWidth = arguments[1];
	nHeight = arguments[2];
	nScroll = (arguments.length > 3 ? arguments[3] : "no");
	nLeft = (arguments.length > 4 ? arguments[4] : (screen.width / 2 - nWidth / 2));
	nTop = (arguments.length > 5 ? arguments[5] : (screen.height / 2 - nHeight / 2));

	if(IsMobile.detect()){
		top.location.href = nUrl;
	}else{
		winopen = window.open(nUrl, 'pbml_win', "left=" + nLeft + ",top=" + nTop + ",width=" + nWidth + ",height=" + nHeight + ",scrollbars=" + nScroll + ",toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no");
	}
	
}

function fbText(n){
	var title,description,imgurl,url;
	switch(n){
		case 0 : title = "EXO-K와 삼성 스마트PC의 멋진 콜라보레이션!";description="지금 유튜브 300만뷰의 신화를 확인해보세요!  그리고 페이스북에서 세상에서 하나뿐인 당신만의 티셔츠를 디자인해보세요!";imgurl="../images/sns/smartpc.gif";url="https://apps.facebook.com/samsungsmartpc/";break;
		case 1 : title = "4mm에 담은 인류의 도전사! - LG OLED TV";description="두께 4mm의 초 슬림디자인과 현실과 구분이 안가는 화질을 어필하기 위한 OLED TV 마이크로 사이트입니다. 종이의 발명부터 달착륙에 이르는 인류의 위대한 도전들을 OLED TV의 주요 feature와 연결하며, HTML5 특유의 미려한 모션감과 종스크롤 방식의 인터페이스를 사용 하였습니다.";imgurl="../images/sns/lgoledtv.gif";url="http://www.lgoled.tv/";break;
		case 2 : title = "반응형 웹의 전범이 되다! - SANTAFE";description="어떤 디바이스를 통해 산타페의 브랜드 사이트를 만나건 가장 정확한 사이즈와 레이아웃으로 최적화하여쾌적하게 즐기실 수 있도록 웰메이드 반응형 웹을 구현했습니다.";imgurl="../images/sns/santafe.gif";url="http://211.178.174.134:7109/index.asp";break;
		case 3 : title = "6촌이라는 ‘관계’로 빚은 리얼 코미디 뮤직드라마! - 용감한 남매들";description="당시 가장 화제였던 신보라와 유희열의 혈연관계를 소재로, 싼타페 CM송을 만들기 위해 순진한 6촌 오빠 유희열을 개입시키는 뮤직드라마로 바이럴의 새 가능성을 열었습니다.";imgurl="../images/sns/satafefilm.gif";url="http://www.youtube.com/playlist?list=PLF36FFEBD4EAC4B35&feature=plcp";break;  
		case 4 : title = "너무 엉뚱했나? 현대차의 최신기술로 닭들이 탈출한다! - Run, Chicken Run";description="현대차의 신기술을 홍보하기 위해 제작한 소셜 어플리케이션 캠페인. 닭들이 압제에서 벗어나기 위해 현대차의 신기술을 활용해 탈출하는 스토리의 게임. 스마트폰을 노처럼 저어야 하는 만큼 팔 운동이 되실겁니다.";imgurl="../images/sns/rcr.gif";url="https://apps.facebook.com/hmc-gbcs/dct-pal/";break;         
		case 5 : title = "자, 지금부터 당신의 1년을 되돌아보는 겁니다! - Count Down";description="현대차의 연말 캠페인 ‘Countdown’. 강남대로에 비치한 wishball에 모두의 새해소망을 적어 12월31일 하늘로 띄웁니다. 이 캠페인을 지원하는 나만의 1년간의 스토리를 감성적으로 엮어드립니다.";imgurl="../images/sns/countdown.gif";url="http://" + location.host+"?direct=6";break;
		case 6 : title = "국민은행 스마트 터치";description="터치 기반의 사용자 주도형 스마트 지점, 고객용 단말기로써, 큐브라는 기본 단위와 그리드(라인)라는 규칙하에 정보의 중요도, 종류, 갯수에 따라 다양하게 변화 할 수 있는 시스템 UI를 구현하였습니다.";imgurl="../images/sns/kbsmart.gif";url="http://" + location.host+"?direct=7";break;     
		case 7 : title = "유튜브를 휩쓸었던 화제의 뮤직비디오! - Samsung Ultra";description="한 래퍼가 속박 가득한 일상을 벗어나 새로운 가능성으로 비상하자는 노래를 멋지게 펼칩니다. 어? 그런데 뮤직비디오에 등장하는 소재들이 온통 내 이야기?";imgurl="../images/sns/samsungultra.gif";url="https://apps.facebook.com/samsungultra/";break;
		case 8 : title = "프리미엄 유니크 라이프, PYL!";description="i30, i40, 벨로스터 3종을 포괄하는 현대자동차의 파격과 혁신의 umbrellar brand PYL의 브랜드 사이트. 웹사이트가 가져야 할 정보중심의 구성에서 과감히 벗어나 Interactrion을 통해 얻는 Brand Image에 포커싱했다. 클릭하고 즐겨라!";imgurl="../images/sns/pyl.gif";url="http://pyl.hyundai.com/";break;         
		case 9 : title = "슈퍼주니어, 나만을 위한 콘서트를 열어주다!";description="그저 슈퍼주니어 콘서트 무료티켓을 받기 위해 글 한 줄 썼을 뿐인데…. F(X)가 리무진으로 에스코트하고 콘서트장은 오직 나만을 위한 콘서트로 변해버렸다!";imgurl="../images/sns/superconcert.gif";url="http://" + location.host+"?direct=11";break;
		default: title = "";description="";imgurl="";url="";break;
	}
	fbTitle = new Array(title,description,imgurl,url);
	return fbTitle
}

function twText(n){
	var description;
	
	switch(n){
		case 0 : description = "[samsung smart pc with EXO-K] EXO-K와 삼성 스마트PC의 멋진 콜라보레이션! - 지금 유튜브 300만뷰의 신화를 확인해보세요!  그리고 페이스북에서 세상에서 하나뿐인 당신만의 티셔츠를 디자인해보세요!";break;
		case 1 : description = "[LG OLED TV] 4mm에 담은 인류의 도전사! - 두께 4mm의 초 슬림디자인과 현실과 구분이 안가는 화질을 어필하기 위한 OLED TV 마이크로 사이트입니다. 종이의 발명부터 달착륙에 이르는 인류의 위대한 도전들을 OLED TV의 주요 feature와 연결하며, HTML5 특유의 미려한 모션감과 종스크롤 방식의 인터페이스를 사용 하였습니다.";break;
		case 2 : description = "[SANTAFE] 반응형 웹의 전범이 되다! - 어떤 디바이스를 통해 산타페의 브랜드 사이트를 만나건 가장 정확한 사이즈와 레이아웃으로 최적화하여쾌적하게 즐기실 수 있도록 웰메이드 반응형 웹을 구현했습니다. ";break;
		case 3 : description = "[용감한 남매들] 6촌이라는 ‘관계’로 빚은 리얼 코미디 뮤직드라마! - 당시 가장 화제였던 신보라와 유희열의 혈연관계를 소재로, 싼타페 CM송을 만들기 위해 순진한 6촌 오빠 유희열을 개입시키는 뮤직드라마로 바이럴의 새 가능성을 열었습니다.  ";break;
		case 4 : description = "[Run, Chicken Run] 너무 엉뚱했나? 현대차의 최신기술로 닭들이 탈출한다! - 현대차의 신기술을 홍보하기 위해 제작한 소셜 어플리케이션 캠페인. 닭들이 압제에서 벗어나기 위해 현대차의 신기술을 활용해 탈출하는 스토리의 게임. 스마트폰을 노처럼 저어야 하는 만큼 팔 운동이 되실겁니다. ";break;
		case 5 : description = "[Count Down] 자, 지금부터 당신의 1년을 되돌아보는 겁니다! - 현대차의 연말 캠페인 ‘Countdown’. 강남대로에 비치한 wishball에 모두의 새해소망을 적어 12월31일 하늘로 띄웁니다. 이 캠페인을 지원하는 나만의 1년간의 스토리를 감성적으로 엮어드립니다.";break;
		case 6 : description = "[국민은행 스마트 터치] 터치 기반의 사용자 주도형 스마트 지점, 고객용 단말기로써, 큐브라는 기본 단위와 그리드(라인)라는 규칙하에 정보의 중요도, 종류, 갯수에 따라 다양하게 변화 할 수 있는 시스템 UI를 구현하였습니다.";break;
		case 7 : description = "[Samsung Ultra] 유튜브를 휩쓸었던 화제의 뮤직비디오! - 한 래퍼가 속박 가득한 일상을 벗어나 새로운 가능성으로 비상하자는 노래를 멋지게 펼칩니다. 어? 그런데 뮤직비디오에 등장하는 소재들이 온통 내 이야기? ";break;
		case 8 : description = "[PYL] 프리미엄 유니크 라이프, PYL!- i30, i40, 벨로스터 3종을 포괄하는 현대자동차의 파격과 혁신의 umbrellar brand PYL의 브랜드 사이트. 웹사이트가 가져야 할 정보중심의 구성에서 과감히 벗어나 Interactrion을 통해 얻는 Brand Image에 포커싱했다. 클릭하고 즐겨라!  ";break;
		case 9 : description = "[LG Social Concert] 슈퍼주니어, 나만을 위한 콘서트를 열어주다! - 그저 슈퍼주니어 콘서트 무료티켓을 받기 위해 글 한 줄 썼을 뿐인데…. F(X)가 리무진으로 에스코트하고 콘서트장은 오직 나만을 위한 콘서트로 변해버렸다! ";break;
		default : description = "";break;
	}
	return description
}

var IsMobile = function(){
	return {
		detect:function(){
			var uagent = navigator.userAgent.toLowerCase(); 
			var list = this.mobiles;
			var ismobile = false;
			for(var d=0;d<list.length;d+=1){
				if(uagent.indexOf(list[d])!=-1){
					ismobile = true;
				}
			}
			return ismobile;
		},
		mobiles:[
			"midp","240x320","blackberry","netfront","nokia","panasonic",
			"portalmmm","sharp","sie-","sonyericsson","symbian",
			"windows ce","benq","mda","mot-","opera mini",
			"philips","pocket pc","sagem","samsung","sda",
			"sgh-","vodafone","xda","palm","iphone",
			"ipod","android","ipad"
		]
	};
}();

function getHttpParam(name) {
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null) {
		return "";
	} else {
		return results[1];
	}
}

$(function(){
	var direct = getHttpParam("direct");

	if( direct.length >0 ) {
		var targetNo = parseInt(direct)-1;
		if(direct.length==1){direct = "0"+direct}
		var target = "#gnb_"+direct;
		$("html,body").scrollTop($(target).offset().top)
		$("#gngOff ul.gnb li").removeClass("selected").eq(targetNo).addClass("selected");
		$("#gngOn ul.gnb li").removeClass("selected").eq(targetNo).addClass("selected");

		if(direct=="06"||direct=="07"||direct=="08"||direct=="11"){
			//$("#gnb_"+direct).find(".btnReadmore").click()
		}

	}else{
		$(".gnb li").eq(0).click();
		$("#gngOff ul.gnb li").removeClass("selected").eq(0).addClass("selected");
		$("#gngOn ul.gnb li").removeClass("selected").eq(0).addClass("selected");
	}
/*	
	$(".youtube").eq(0).append('<iframe id="youtube1" width="640" height="390" src="http://www.youtube.com/embed/koTWPZmL1rc?rel=0&wmode=Opaque&enablejsapi=1" frameborder="0" allowfullscreen></iframe>')
	$(".youtube").eq(1).append('<iframe id="youtube2" width="640" height="390" src="http://www.youtube.com/embed/h7VfNzGB3-o?rel=0&wmode=Opaque&enablejsapi=1" frameborder="0" allowfullscreen></iframe>')
	$(".youtube").eq(2).append('<iframe id="youtube3" width="640" height="390" src="http://www.youtube.com/embed/PH6eFmZyKSg?rel=0&wmode=Opaque&enablejsapi=1" frameborder="0" allowfullscreen></iframe>')
	$(".youtube").eq(3).append('<iframe id="youtube4" width="640" height="390" src="http://www.youtube.com/embed/zvsDVrVMo-8?rel=0&wmode=Opaque&enablejsapi=1" frameborder="0" allowfullscreen></iframe>')
*/
	$("iframe").each(function() {
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
			var getQString = ifr_source.split('?');
			var oldString = getQString[1];
			var newString = getQString[0];
			$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
})

var movepos = 0, videoFlg = false;
$(window).scroll(function(){
	scrollTop = $(document).scrollTop();
	
	if( scrollTop >= 0 && scrollTop < 750 ) { currentPosNew = 0; }
	else if(scrollTop >= 750 && scrollTop < 1600){currentPosNew = 1;}
	else if(scrollTop >= 1600 && scrollTop < 2450){currentPosNew = 2;}
	else if(scrollTop >= 2450 && scrollTop < 3300){currentPosNew = 3;}
	else if(scrollTop >= 3300 && scrollTop < 4150){currentPosNew = 4;}
	else if(scrollTop >= 4150 && scrollTop < 5000){currentPosNew = 5;}
	else if(scrollTop >= 5000 && scrollTop < 5850){currentPosNew = 6;}
	else if(scrollTop >= 5850 && scrollTop < 6700){currentPosNew = 7;}
	else if(scrollTop >= 6700 && scrollTop < 7550){currentPosNew = 8;}
	else if(scrollTop >= 7550 && scrollTop < 8400){currentPosNew = 9;}
	else if(scrollTop >= 8400){currentPosNew = 10;}
	
	if( currentPos==1 || currentPos==4 || currentPos==6 || currentPos==8 || currentPos==10 ) {
		if( !videoFlg ) {
			movepos = scrollTop;
			videoFlg = true;			
		}
		stopVideo();		
	}


	if(currentPosNew != currentPos){
		$("#gngOff ul.gnb li").removeClass("selected").eq(currentPosNew).addClass("selected")
		$("#gngOn ul.gnb li").removeClass("selected").eq(currentPosNew).addClass("selected")
		currentPos = currentPosNew;		
	}
});

var player1,player2,player3,player4,player5;
function onYouTubeIframeAPIReady() {
	player1 = new YT.Player('youtube1', {events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange}});
	player2 = new YT.Player('youtube2', {events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange}});
	player3 = new YT.Player('youtube3', {events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange}});
	player4 = new YT.Player('youtube4', {events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange}});
	player5 = new YT.Player('youtube5', {events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange}});
}

function onPlayerReady(event) {
	//event.target.playVideo();
}

var done = false;
function onPlayerStateChange( event ) {
	if( event.data == YT.PlayerState.PLAYING && !done ) {
		setTimeout( stopVideo, 6000 );
		videoFlg = false
		done = true;
	}
}
function stopVideo() {
	if( Math.abs(movepos - $(document).scrollTop()) > 250  ) {
		if( player1 == undefined ) return;

		player1.stopVideo();
		player2.stopVideo();
		player3.stopVideo();
		player4.stopVideo();
		player5.stopVideo();
		videoFlg = false;
	}
}