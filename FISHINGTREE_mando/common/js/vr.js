$(function(){
	$("html,body").animate({ scrollTop: 115 }, 600);
	$(".fold").bind("click",function(){
		$(".tabFold li").each(function(){
			$(this).removeClass("selected")
		});
		$(this).addClass("selected");
		$("div").has(".preload_img").remove();
		$("#colors_ctrls").remove();
		$("#view_overlay").remove();
		$(".folding").removeClass("selected").find(".btnSpot a").removeClass("selected")
		imgLoad(0);
	})
	$(".enfold").click(function(e){
		e.preventDefault();
		$(".tabFold li").each(function(){
			$(this).removeClass("selected")
		});
		$(this).addClass("selected");
		$("div").has(".preload_img").remove();
		$("#colors_ctrls").remove();
		$("#view_overlay").remove();
		$(".enfolding").removeClass("selected").find(".btnSpot a").removeClass("selected")
		imgLoad(1);
	});
	$(".tabFold").click(function(){
		$(".folding").animate({
			'filter' : 'alpha(Opacity=0)',
			'opacity' : 0
		},0)
		$(".enfolding").animate({
			'filter' : 'alpha(Opacity=0)',
			'opacity' : 0
		},0)
		if($.browser.msie){
			$(".folding").hide()
			$(".enfolding").hide()
		}
	})

	/* vr Folding 버튼 */
	$(".btnSpot").css("z-index","23")
	$(".btnSpot").hover(function(){
		var $this = $(this)
		$(".folding").each(function(){
			$(this).removeClass("selected")
			$(".btnSpot",this).css("z-index","20").find("a").removeClass("selected")
		})
		$(".enfolding").each(function(){
			$(this).removeClass("selected")
			$(".btnSpot",this).css("z-index","20").find("a").removeClass("selected")
		})
		$this.css("z-index","23").parent().addClass("selected").find("a").addClass("selected")
	},function(){
		$(".folding").each(function(){
			$(this).removeClass("selected")
			$(".btnSpot",this).css("z-index","23").find("a").removeClass("selected")
		})	
		$(".enfolding").each(function(){
			$(this).removeClass("selected")
			$(".btnSpot",this).css("z-index","23").find("a").removeClass("selected")
		})					
	})
	$(".btnSpot",".folding").click(function(){
		var $this = $(this)
		//var $thisNo = $this.parent().index();
		var $thisNo = $this.find("img").attr("alt")
		var popImg = "/images/product/vr/vrpop/fold_pop_0"+$thisNo+".jpg";

		$(".popSpotArea").find("#vrPop").attr({"src":popImg,"alt":$thisNo,"class":"imgfolding"}).end().show();
			$(".popSpot .next").show()
			$(".popSpot .prev").show()
		if($thisNo==8){
			$(".popSpot .next").hide()
		}else if($thisNo==1){
			$(".popSpot .prev").hide()
		}
		addnDimLayer()
		
		$("#dimLayer").css({'opacity': '0.8','display': 'block','height':'3000px','position':'fixed'});
	});

	/* vr Enfolding 버튼 */
	$(".btnSpot",".enfolding").click(function(){
		var $this = $(this)
		//var $thisNo = $this.parent().index()+1
		var $thisNo = $this.find("img").attr("alt")
		var popImg = "/images/product/vr/vrpop/enfold_pop_01.jpg";

		$(".popSpotArea").find("#vrPop").attr({"src":popImg,"alt":($thisNo),"class":"imgenfold"}).end().show();
		$(".popSpot .next").hide()
		$(".popSpot .prev").hide()
		addnDimLayer()
		$("#dimLayer").css({'opacity': '0.8','display': 'block','height':$("#conWrap").height()+130});
	});

	/* image PopUp Close */
	$(".btnCloseSpot").click(function(){
		removeDimLayer();
		$(".popSpotArea").hide();
	})
	/* popSpot prev */
	$(".popSpot .prev").click(function(){
		var $thisClass = $("#vrPop").attr("class"),
			$thisNo = parseInt($("#vrPop").attr("alt")),
			foldNo = 6,enfoldNo = 1,maxNo = 0,popImg = '',targetNo = 0;

		if($thisClass == "imgfolding"){maxNo = foldNo;popImg="/images/product/vr/vrpop/fold_pop_0";}
		else{maxNo = enfoldNo;popImg="/images/product/vr/vrpop/enfold_pop_0";}

		if($thisNo==2){
			$(this).hide();
		}
		$(".popSpot .next").show()
		if($thisNo > 1){
			$(".popSpotArea").find("#vrPop").attr({"src":popImg + ($thisNo-1) +".jpg","alt":($thisNo-1),"class":$thisClass});
		}
	});

	/* popSpot next */
	$(".popSpot .next").click(function(){
		var $thisClass = $("#vrPop").attr("class"),
			$thisNo = parseInt($("#vrPop").attr("alt")),
			foldNo = 6,enfoldNo = 1,maxNo = 0,popImg = '',targetNo = 0;

		if($thisClass == "imgfolding"){maxNo = foldNo;popImg="/images/product/vr/vrpop/fold_pop_0";}
		else{maxNo = enfoldNo;popImg="/images/product/vr/vrpop/enfold_pop_0";}

		if($thisNo==(maxNo-1)){
			$(this).hide();
		}
		$(".popSpot .prev").show()
		if($thisNo < maxNo){
			$(".popSpotArea").find("#vrPop").attr({"src":popImg + ($thisNo+1) +".jpg","alt":($thisNo+1),"class":$thisClass});
		}
	});


	function imgLoad(target){
		var imgAdd = "";
		var imgForder=  [
			"/images/product/vr/on/" ,
			"/images/product/vr/off/" ];
		$("#productvr").html("")
		for (var x=0; x< 60; x++){
			imgAdd = imgAdd + "<img src='" + imgForder[target] + x + ".png' />"
		}
		$("#productvr").html(imgAdd)
		jQuery('#productvr').j360({nowSelect:target});
	}
	function addnDimLayer(){
		var createDiv = "<div id='dimLayer'></div>";
		$("body").append(createDiv);
	}
	function removeDimLayer(){
		$("#dimLayer").remove();
	}
	imgLoad(0)
})