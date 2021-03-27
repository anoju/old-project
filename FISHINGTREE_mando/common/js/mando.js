$(function(){
	$("a[href=#]").click(function(e){
		e.preventDefault();
	});

	/* QNA */
	//$(".qnaA").hide();
	//$(".qnaQcon2").hide();
	$("tr.qnaQ2").click(function(){
		var $this = $(this);
		var thisNo = $this.index();
		var $next = $this.next();

		if($next.is(":hidden")){
			$(".qnaA2").hide();
			$(".qnaQcon2").hide();
			$("th","tr.qnaQ2").each(function(){
				$(this).removeClass("selected").parent().removeClass('selected')
			})
			$next.show().next().show()
			$this.addClass('selected').find("th").addClass("selected")
		}else{
			$next.hide().next().hide()
			$this.removeClass('selected').find("th").removeClass("selected")
		}			
		
	});

	$("tr.qnaQ").click(function(){
		var $this = $(this);
		var thisNo = $this.index();
		var $next = $this.next();

		if($next.is(":hidden")){
			$(".qnaA").hide();
			$("th","tr.qnaQ").each(function(){
				$(this).removeClass("selected").parent().removeClass('selected')
			})


			
			$next.show()
			$this.addClass('selected').find("th").addClass("selected")
		}else{
			$next.hide()
			$this.removeClass('selected').find("th").removeClass("selected")
		}	
	});

	/* goods view 상품이미지 */
	$("#goodsThumb li").click(function(e){
		e.preventDefault();
		$("#goodsThumb li").each(function(){
			var $target = $(this).find('a');
			$target.removeClass('selected').find('img').attr('src',$target.find('img').attr('src').replace("_on.","."))
		})
		$(".viewGoods img").attr("src",$(this).find('a img').attr('src').replace("thumb","big"));
		$('a',this).addClass("selected").find('img').attr('src',$(this).find('a img').attr('src').replace(".jpg","_on.jpg"));
	});

	/* TOP BUTTON */
	$(".btnTop").click(function(e){
		e.preventDefault();
//		$("body").scrollTo( 0 ,500 , { offset: {top:0}}, { easing:'elasout' } );
		$("html,body").animate({ scrollTop: 0 }, 400);
	});
	
	/* WINDOW SCROLL EVENT */
	$(window).bind("scroll",function(){
		topBtn()
	});

	/* A/S 안내 */
	$("#asMore").click(function(){
		var $plusCon = $(".plusCon");
		var $this = $(this);
		if($plusCon.is(":hidden")){
			$this.attr("src",$this.attr("src").replace("_on.","_off."))
			$plusCon.slideDown(function(){
				$("body").scrollTo( $plusCon ,300);		
			});
		}else{
			$this.attr("src",$this.attr("src").replace("_off.","_on."))
			$plusCon.slideUp();
		}
	});

	/* table cellspacing='0' */
	$("table").attr("cellspacing","0");

	/* 상품평 등록 버튼 - /buy/goodsview.asp */
	$("#btn_goodsview_after").click(function(){
		$("#btn_goodsview_after_w").toggle()
	});
	$("#btn_goodsview_qna").click(function(){
		$("#btn_goodsview_qna_w").toggle()
	});
			
});

/* TOP BUTTON */
function topBtn(){
	var scrollTop = $(window).scrollTop();	
	if(scrollTop < 10){
		$(".btnTop").stop().animate({opacity:0},800)
	}else{
		$(".btnTop").stop().animate({opacity:1},400)
	}
}
/* util function */
function getScrollTop(){
	if(typeof pageYOffset!= 'undefined'){
		return pageYOffset;
	}
	else{
		var B= document.body; //IE 'quirks'
		var D= document.documentElement; //IE with doctype
		D= (D.clientHeight)? D: B;
		return D.scrollTop;
	}
}













/* tabClick */
$(function(){
	$(".tabClicks li a").click(function(e){
		e.preventDefault();
		var thisTarget = $(this).attr("href");
		var thisNo = $(this).parent().index();

		$(".tabClicks li a img").each(function(){
			$(this).attr("src",$(this).attr("src").replace("_on","_off"));
		});				
		$(".tabClicks li a img").eq(thisNo).attr("src",$(".tabClicks li a img").eq(thisNo).attr("src").replace("_off","_on"));

		$(".tabCons").hide().eq(thisNo).show();				
	})
	
	
})



/* footer selectbox */
$(function(){

	$("#familySite,#familyNav").hover(function(){
		$("#familyNav").stop().slideDown(200);
	},function(){
		$("#familyNav").stop().slideUp(200);
	})

	$("#familySite,#familyNav").click(function(){
		$("#familyNav").stop().slideToggle(200);
	})

	$("#languageNav").hover(
		function(){
			$(this).find(".subNav").stop().slideDown('fast');
		},
		function(){
			$(this).find(".subNav").stop().slideUp('fast');
		}
	);

	$("#languageNav").click(function(){
		$("#languageNav").find(".subNav").stop().slideToggle('fast');
	});
/*
	$(".subNav li img").hover(
		function(){
			$(this).css('top', '0');
		},
		function(){
			$(this).css('top', '-24px');
		}
	);
*/
});

// mobile detection
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





/*시승 레이어 팝업*/
$(function(){
	$(".btnCloseCafe, .btnCloseBuy").click(function(){	/* 버튼 누르면 레이어제거하고 팝업숨김 */
		$(".layerPopCafe, .layerPopBuy").hide();
		removeDimLayer();
	})
});


/* 딤레이어 생성 함수 */
function addnDimLayer(){
	var createDiv = "<div id='dimLayer'></div>";
	$("body").append(createDiv);
}
/* 딤레이어 삭제 함수 */
function removeDimLayer(){
	$("#dimLayer").remove();
}