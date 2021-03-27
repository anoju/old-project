
////////////////////////////////////////////////////
/////////////GNB HEADER/////////////////////////////
////////////////////////////////////////////////////
$(function(){
	var $gnb = $("#gnb li");
	var d1 = "<%=d1%>";
	var d2 = "<%=d2%>";

	$gnb.bind("click mouseover",function(e){

		var thisNo = $(this).index();
		if(thisNo != 3){
			$(".sGnbArea").slideDown(300)
			$gnb.removeClass("selected").eq(thisNo).addClass("selected")
			$(".sGnb ul").hide().eq(thisNo).show()
		}else{
			//$(".sGnbArea").slideUp()
			if(e.type=="click"){
				addnDimLayer()
				$("#dimLayer").css({'opacity': '0.8','display': 'block','height':'3000px','position':'fixed'});
				$("#comingsoonLayer").show();
				return false;
			}
		}
	}).eq(d1-1).trigger("click")

	/* 메뉴:mouse out 원래메뉴로 복귀 */
	$("#headWrap").not("#utilWrap").hover(function(){
	},function(){
		if(d1>0 || d1<6){
			$gnb.removeClass("selected").eq(d1-1).addClass("selected");
			$(".sGnb ul").hide().eq(d1-1).show().find("li").eq(d2-1).addClass("selected").siblings().removeClass("selected");
		}
	})

	/* 메뉴:mouse out 원래메뉴로 복귀 */
	$(".sGnb ul").mouseover(function(){
		var $this = $(this);
		var $thisNo = $this.index();

		$this.find("li").hover(function(){
			$(this).addClass("selected").siblings().removeClass("selected")
		},function(){
			if(d1!=0 && d1<=6){
				$(".sGnb ul").eq($thisNo).find("li").eq(d2-1).addClass("selected").siblings().removeClass("selected");
			}
		})
	})

	/* Util 메뉴 mouse over */
	$("#utilOut li").bind("click mouseover",function(e){
		var thisNo = $(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		if(e.type == "click"){
			if(thisNo>=2){
				addnDimLayer()
				$("#dimLayer").css({'opacity': '0.8','display': 'block','height':'3000px','position':'fixed'});
				$("#comingsoonLayer").show();
				return false;
			}
		}
	});
	$("#utilIn li").bind("click mouseover",function(e){
		var thisNo = $(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		if(e.type == "click"){
			if(thisNo>=2){
				addnDimLayer()
				$("#dimLayer").css({'opacity': '0.8','display': 'block','height':'3000px','position':'fixed'});
				$("#comingsoonLayer").show();
				return false;
			}
		}
	});

	$("#utilWrap ul").hover(function(){
		var $thisNo = $(this).index();
		$("#utilWrap ul").eq($thisNo).find("li").mouseover(function(){
		})
	},function(){
	})

	$(".sGnb_0"+d1).find("li").removeClass("selected").eq(d2-1).addClass("selected");

	if(d1==0 || d1>6){
		$("#gnb li").each(function(){
			$(this).removeClass("selected");
		})
		$(".sGnbArea").hide();
/**/
		if(d1==0 || d1 > 6){
			$("#headWrap").hover(function(){

			},function(){
				$(".sGnbArea").stop().slideUp(300);
				$gnb.removeClass("selected");
			});
		}

		/* Util */
		if(d1==7){
			var $utilWrapOut = $("#utilOut li");
			var $utilWrapIn = $("#utilIn li");
			$utilWrapOut.bind("click mouseover",function(){
				$(this).addClass("selected").siblings().removeClass("selected");
			}).eq(d2-1).trigger("click")
			$utilWrapIn.bind("click mouseover",function(){
				$(this).addClass("selected").siblings().removeClass("selected");
			}).eq(d2-1).trigger("click")
		}
	}

})