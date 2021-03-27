var UserAgent = navigator.userAgent;
if (UserAgent.match(/iPhone|iPod|iPod2/) != null){
  isiPhone = true;
}else{
  isiPhone = false;
}
function on_img(img,n){
	if (n == "on")
	{
		var hover = "_on";
	}else{
		var hover = "_off";
	}
	menuimg = img.find("img");
	if (menuimg.attr("src").indexOf(".jpg") > 0){
		menuimg_type = ".jpg";
	}else if (menuimg.attr("src").indexOf(".gif") > 0){
		menuimg_type = ".gif";
	}else if (menuimg.attr("src").indexOf(".png") > 0){
		menuimg_type = ".png";
	}

	menuimg_src = menuimg.attr("src").split("_off")[0];

	menuimg_src = menuimg_src.split("_on")[0];
	menuimg.attr("src",menuimg_src+hover+menuimg_type);
}
var view_num = 0;
var play;
$(document).ready(function(){
	$(window).scrollTo(0 , { duration:500, easing:"easeInOutQuart"});
	$(".menu_toggle").click(function () {
		var menu = $(".menu_toggle img");
		var menuimg = $(".menu_toggle img").attr("src");
		if (menuimg.indexOf("_off.png") > 0){
			menu.attr("src", menu.attr("src").replace("_off.png", "_on.png"));
		}
		else if (menuimg.indexOf("_on.png") > 0){
			menu.attr("src", menu.attr("src").replace("_on.png", "_off.png"));
		}
		$(".gnb").slideToggle("fast");
		return false;
	});



	$(".slidingDiv > ul > li > a").click(function(){
		var thisTitle = $(this).find("dt").text();
		on_img($(".slidingDiv > ul > li > a").find(".txt_btn"),"on");
		$(".txt_box").slideUp({ duration:500, easing:"easeInOutQuint",complete:function(){
		}});
		if ($(this).next().css("display") == "none"){
			$(this).next().slideDown({ duration:500, easing:"easeInOutQuint",complete:function(){
			}});
			on_img($(this).find(".txt_btn"),"off");
			defprlist($(this).parent().index()+1);
		}else{
			on_img($(this).find(".txt_btn"),"on");
		}

		var s=s_gi(s_account);
		s.linkTrackVars='None';
		s.linkTrackEvents='None';
		s.tl(this,'o','pr-room-dropdown-'+thisTitle);
		return false;
	})


	$(".view_wrap .btn_prev").click(function(){
		clearInterval(play);
		play = setInterval(function(){view_360("prev")}, 240);
	})
	$(".view_wrap .btn_next").click(function(){
		clearInterval(play);
		play = setInterval(function(){view_360("next")}, 240);
	})

	$(".view_wrap .btn_prev2").click(function(){
		clearInterval(play);
		play = setInterval(function(){view_360("prev")}, 80);
	})
	$(".view_wrap .btn_next2").click(function(){
		clearInterval(play);
		play = setInterval(function(){view_360("next")}, 80);
	})
	$(".btn_stop").click(function(){
		clearInterval(play);
	})

	$(window).resize(function() {
		$(".btn_stop").height($(".view_360_img img").height());
	});
	window.onorientationchange = function() {
		$(".btn_stop").height($(".view_360_img img").height());
	}
	
	var myScroll;
	setTimeout(function(){
		$(".btn_stop").height($(".view_360_img img").height())
		
	},500)

	/* omniture 트랙킹을 위해 추가 - 메뉴 > PR || VR 클릭 */
	$(".menuClick").click(function(){
		var thisTarget = $(this).attr("href");
		if(thisTarget=="type_stand.html"){
			s.pageName = "360View";
			s.t()
		}else if(thisTarget=="pr_room01.html"){
			s.pageName = "Pr Room";
			s.t()
		}else{return false;}
	})
	/* omniture 트랙킹을 위해 추가 - PR > 원문기사 클릭*/
	$(".link_over").click(function(){
		var thisLink = $(this).find("a").attr("href");
		var s=s_gi(s_account);
		s.linkTrackVars='None';
		s.linkTrackEvents='None';
		s.tl(this,'e','pr-room-click-'+thisLink);
	})
	/* omniture 트랙킹을 위해 추가 - vr > 버튼클릭 */
	$(".type_tab > li > a").click(function(){
		var thisLink = $(this).find("img").attr("alt");
		var s=s_gi(s_account);
		s.linkTrackVars='None';
		s.linkTrackEvents='None';
		s.tl(this,'o','3d-vr-click-'+thisLink);
	})

	$(".pr_view > li").click(function(){
		var thisNo = $(this).index();
		var title = $(this).find("span").text();
		if(thisNo == 0){
			/* omniture 트랙킹을 위해 추가 - PR > 영상*/
			var s=s_gi(s_account);
			s.linkTrackVars='None';
			s.linkTrackEvents='None';
			s.tl(this,'o','pr-room-video-'+title);
		}else{
			/* omniture 트랙킹을 위해 추가 - PR > 사진 */
			var s=s_gi(s_account);
			s.linkTrackVars='None';
			s.linkTrackEvents='None';
			s.tl(this,'o','pr-room-photo-'+title);
		}
	})
});
// 모바일 접속시 주소창 자동으로 사라지게


function main_scroll(n){
	if (n == 1){
		$(window).scrollTo(0 , { duration:500, easing:"easeInOutQuart"});
	}else{
		$(".gnb").hide();
		$(window).scrollTo($("#section0"+n).offset().top , { duration:700, easing:"easeInOutQuart"});
	}
	$(".gnb").slideUp("fast");
}
function main_scroll2(n){	
	if (n == 1)
	{
		$(window).scrollTop(0 , { duration:0});	
	}else{
		$(window).scrollTop($("#section0"+n).offset().top , { duration:0});	
	}
	
}

function view_360(n){
	var max = $(".view_360_img p").length
	if (n == "prev")
	{
		if (view_num == 1)
		{
			view_num = max;
		}else{
			view_num = view_num - 1 ;
		}
	}
	if (n == "next")
	{
		if (view_num < max)
		{
			view_num = view_num +1;
		}else{
			view_num = 1;
		}
	}
	$(".view_360_img p").hide();
	$(".view_360_img p").eq(view_num-1).show();
}
function defMenuName(mNo){
	var menuName = menuTitle(mNo-1);	
	s.pageName = menuName;
	s.t()
	omniture('mobile-top-menu-'+menuTitle(mNo-1))
}


$(function(){
	$("p.visual_img").click(function(){	
		var thisNo = $(this).index();
		omniture('mobile-2depth-menu-'+menuTitle(thisNo))
	});
	$(".feature_tab li").click(function(){
		var thisTitle = $(this).find("img").attr("alt");
		omniture('mobile-feature-menu-'+thisTitle);
	});
	$(".pr_tab li").click(function(){
		var thisTitle = $(this).find("img").attr("alt");
		omniture('mobile-pr-room-menu-'+thisTitle);
	});
	$(".slidingDiv li").click(function(){
		var thisTitle = $(this).find("dt").text();
		omniture('mobile-pr-room-dropdown-'+thisTitle);
	})
	$(".type_tab li").click(function(){
		var thisTitle = $(this).find("img").attr("alt");
		omniture('mobile-pr-room-menu-'+thisTitle);
	});

	$(".facebook").click(function(e){
		e.preventDefault();
		fbshare();
	})
	$(".tweeter").click(function(e){
		e.preventDefault();
		twshare();
	})

})

function omniture(str){
	/* omniture 트랙킹을 위해 추가*/
	var s=s_gi(s_account); 
	s.linkTrackVars='None';
	s.linkTrackEvents='None';
	s.tl(this,'o',str);
}
function menuTitle(obj){
	switch(obj){
		case 0:return "ABOVEANDBEYOND";break;
		case 1:return "Perfect Viewing Angle";break;
		case 2:return "COLOR REFINER";break;
		case 3:return "ABSOLUTE MOTION CLARITY";break;
		case 4:return "PAPER SLIM";break;
		case 5:return "4 COLOR PIXEL";break;
		case 6:return "INFINITE CONTRAST";break;
		case 7:return "NEW BEGINNING";break;
		default:return "";break;
	}
}
