$.fn.imagesLoaded = function(callback){  
	var elems = this.filter('img'),
		len   = elems.length,
		blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		elems.bind('load.imgloaded',function(){
			if (--len <= 0 && this.src !== blank){
				elems.unbind('load.imgloaded');
				callback.call(elems,this);
			}
		}).each(function(){
			// cached images don't fire load sometimes, so we reset src.     
			if (this.complete || this.complete === undefined){
				var src = this.src; 
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				// data uri bypasses webkit log warning (thx doug jones)  
				this.src = blank;   
				this.src = src; 
			} 
		});  
	return this;
};

function over_img(img,n){

	if (n == "on")
	{
		var hover = "_on";
	}else{
		var hover = "_off";
	}
	if (img.parent().hasClass("no") == false && img.parent().hasClass("on") == false  && img.hasClass("on") == false){
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



$(function(){
	$(".photo_vod li").click(function(){		
		pop_num = $(this).index()+1;
		
		var title = $(this).find("> a > .img > img").attr("alt");
		if ($(this).hasClass("movie"))
		{
			pop_type = "movie";
			$(".pop_player").show();
			$(".pop_view").hide();
			$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/Kqv40dJmOpI?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/Kqv40dJmOpI?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>');
			$("#pop_view .pop_con .txt").html(title);
			pop_toggle2("open","movie");
			

		} else if ($(this).hasClass("movie2")) {
			
			pop_type = "movie";
			$(".pop_player").show();
			$(".pop_view").hide();			
			$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>');
			$("#pop_view .pop_con .txt").html(title);
			pop_toggle2("open","movie2");
		}else{
			pop_type = "img";
			$(".pop_box .pop_player .player").html('')		
			$(".pop_player").hide();
			$(".pop_view").show();
			$(".pop_view > img").attr("src","images/1280/pr_room/pic_pop"+pop_num+".png");
			$(".pop_view .pop_con .txt").html(title);
			pop_toggle2("open","img");

		}
	})

	$(".pop_box .prev_btn").click(function(){
		var max = $(".photo_vod li").length
		if (pop_num == 1)
		{
			pop_num = max;
		}else{
			pop_num = pop_num - 1 ;
		}
		var title = $(".photo_vod li").eq(pop_num-1).find("> a > .img > img").attr("alt");
		if ($(".photo_vod li").eq(pop_num-1).hasClass("movie"))
		{
			pop_type = "movie";
			$(".pop_player").show();
			$(".pop_view").hide();
			$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/Kqv40dJmOpI?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/Kqv40dJmOpI?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>')		

		} else if ($(".photo_vod li").eq(pop_num-1).hasClass("movie2")) {
			pop_type = "movie";
			$(".pop_player").show();
			$(".pop_view").hide();
			$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>')		
		}else{
			pop_type = "img";
			$(".pop_box .pop_player .player").html('');		
			$(".pop_player").hide();
			$(".pop_view").show();
			$(".pop_view > img").attr("src","images/1280/pr_room/pic_pop"+pop_num+".png");
			$(".pop_view .pop_con .txt").text(title);
		}
		
	})
	$(".pop_box .next_btn").click(function(){
		var max = $(".photo_vod li").length ;
		if (pop_num < max)
		{
			pop_num = pop_num +1;
		}else{
			pop_num = 1;
		}
		var title = $(".photo_vod li").eq(pop_num-1).find("> a > .img > img").attr("alt");		
		if ($(".photo_vod li").eq(pop_num-1).hasClass("movie"))
		{
			pop_type = "movie";
			$(".pop_player").show();
			$(".pop_view").hide();
			$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/Kqv40dJmOpI?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/Kqv40dJmOpI?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>')		
			pop_toggle2("open","movie");

		} else if ($(".photo_vod li").eq(pop_num-1).hasClass("movie2")) {
			pop_type = "movie";
			$(".pop_player").show();
			$(".pop_view").hide();
			$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>')		
			pop_toggle2("open","movie2");
		}else{
			pop_type = "img";
			$(".pop_box .pop_player .player").html('')		
			$(".pop_player").hide();
			$(".pop_view").show();
			$(".pop_view > img").attr("src","images/1280/pr_room/pic_pop"+pop_num+".png");
			$(".pop_view .pop_con .txt").html(title);
			pop_toggle2("open","img");
		}
		
	})	

});

var pop_num = 1
function pop_toggle2(n,kind){	
	if (n == "close")
	{
		$(".pop_box").stop().animate({"top":"-100%"},{ duration:200, easing:"easeInOutQuint", complete:function(){}});
		$("#pop_wrap .bg").stop().delay(100).animate({"top":"-100%"},{ duration:300, easing:"easeInOutQuint", complete:function(){
			$("#pop_wrap").hide();
			$("html").css({"overflow-y":"auto","overflow-x":"auto"});
			$(".pop_box .pop_player .player").html('');
		}});
		
	}
	if (n == "open")
	{		
		$("#pop_wrap").show();
		$("#pop_wrap .bg").stop().animate({"top":"0%"},{ duration:200, easing:"easeInOutQuint"});
		$(".pop_box").stop().delay(100).animate({"top":"50%"},{ duration:400, easing:"easeInOutQuint", complete:function(){
			$("html").css({"overflow-y":"hidden","overflow-x":"hidden"});
		}});
	}
	if (kind == "movie")
	{
		$(".pop_box").css({ 'height' : '451px' , 'margin' : '-224px 0 0 -463px' }) ;
		pop_type = "movie";
		$(".pop_player").show();
		$(".pop_view").hide();

		$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/Kqv40dJmOpI?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/Kqv40dJmOpI?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>')		
//		$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>')		

	} else if (kind == "movie2"){
		$(".pop_box").css({ 'height' : '451px' , 'margin' : '-224px 0 0 -463px' }) ;
		pop_type = "movie";
		$(".pop_player").show();
		$(".pop_view").hide();
		$(".pop_box .pop_player .player").html('<object width="692" height="389"><param name="movie" value="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode"     value="transparent"/></param><embed src="http://www.youtube.com/v/r71zwOiR3C4?version=3&amp;hl=ko_KR&amp;rel=0&amp;autoplay=1&amp;autohide=1" type="application/x-shockwave-flash" width="692" height="389" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>')		
	}else{
		pop_type = "img";
		$(".pop_player").hide();
		$(".pop_view").show();
	}
}

//$(function(){
$(window).load(function(){
	$('.press_list_item').eq(0).find('.list_content').show() ;
	$('.press_list_item').eq(0).addClass("on");
}) ;
//}) ;

function press_open(n){	
	if ( $(".press_list_item").eq(n-1).hasClass("on") ) {
		$(".press_list_item").eq(n-1).find('.list_content').slideUp() ;
		$(".press_list_item").eq(n-1).removeClass( 'on' ) ;		
	} else {
		$(".press_list_item").eq(n-1).addClass("on");
		$(".press_list_item").eq(n-1).find('.list_content').slideDown(function(){
			$('html , body').animate({ 'scrollTop' : ( $(".press_list_item").eq(n-1).offset().top - 67 ) + 'px' }) ;
		}) ;
	}
	omniture("pr-room-dropdown-"+n)
} ;

//function press_open(n){
//	if ( $('.press_list_item').eq(n-1).hasClass( 'on' ) ) {
//
//		$('.press_list_item').eq(n-1).find('.list_content').slideUp() ;
//		$('.press_list_item').eq(n-1).removeClass( 'on' ) ;
//
//	} else {
//
//		$(".press_list_item").find('.list_content').slideUp() ;
//		$(".press_list_item").removeClass( 'on' ) ;
//
//		$(".press_list_item").eq(n-1).addClass("on");
//		$(".press_list_item").eq(n-1).find('.list_content').slideDown(function(){
//			$('html , body').animate({ 'scrollTop' : ( $(".press_list_item").eq(n-1).offset().top - 67 ) + 'px' }) ;
//		}) ;
//
//	}
//}



////////////////////////////////////
////// omniture 트랙킹 소스 ////////
////////////////////////////////////

$(function(){
	$(".top>.menu li").click(function(){
		omniture("left-topmenu-"+topMenuTitle($(this).index()))		
	})
	$(".tabFixed .tab li").click(function(){
		var thisRel = $(this).find("a").attr("rel")
		omniture(prMenuTitle(thisRel))		
	})
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
	/* omniture 트랙킹을 위해 추가 */
	var s=s_gi(s_account); 
	s.linkTrackVars='None';
	s.linkTrackEvents='None';
	s.tl(this,'o',str);
}
function menuTitle(obj){
	switch(obj){
		case 0:return "ABOVEANDBEYOND";break;
		case 1:return "PERFECT VIEWING shNGLE";break;
		case 2:return "COLOR REFINER";break;
		case 3:return "ABSOLUTE MOTION CLARITY";break;
		case 4:return "PAPER SLIM";break;
		case 5:return "4 COLOR PIXEL";break;
		case 6:return "INFINITE CONTRAST";break;
		case 7:return "NEW BEGINNING";break;
		default:return "";break;
	}
}
function topMenuTitle(obj){
	switch(obj){
		case 0:return "360 View";break;
		case 1:return "features";break;
		case 2:return "PR ROOM";break;
		default:return "";break;
	}
}
function prMenuTitle(obj){
	switch(obj){
		case "press":return "pr-room-menu-NEWS CLIPPING";break;
		case "photo":return "pr-room-menu-PHOTOS AND VIDEOS";break;
		case "OLED":return "features-menu-OLED TV";break;
		case "SMART":return "features-SMART TV";break;
		case "CINEMA":return "features-CINEMA 3D";break;
		case "DESIGN":return "features-DESIGN";break;
		case "Stand_Type":return "360VIEW-Stand_Type";break;
		case "Floor_Stand_Type":return "360VIEW-Floor_Stand_Type";break;
		case "Wall_Type":return "360VIEW-Wall_Type";break;
		default:return "";break;
	}
}
