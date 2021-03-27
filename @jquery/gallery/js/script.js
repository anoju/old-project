	var $thumbsGallery = $(".thumbs li"),
	maxLength = $thumbsGallery.length,
	$thumbViewCnt = 6,
	$thumbTotPage = maxLength - $thumbViewCnt,
	$thumbWidth = 348,
	$thumbCurrentPage = 1;

	$thumbsGallery.click(function(e){
		e.preventDefault();
		var $this = $(this);
		var thisNo = $this.index();

		$thumbsGallery.each(function(){
			$(this).find("a>img").attr("src",$(this).find("a>img").attr("src").replace("_on","_off")).removeClass("selected")
		})
		$this.find("a>img").attr("src",$this.find("a>img").attr("src").replace("_off","_on")).addClass("selected")
		$("#galleryImg").attr("src","img/gallery_"+((thisNo+1) < 10 ? "0"+(thisNo+1):(thisNo+1))+".png")
	});

	$("#btnL").click(function(){
		var galleryNo = getGalleryIndex();
		var targetNo = galleryNo == 0 ? maxLength : galleryNo-1;

		if(targetNo == 5){
			$(".thumbs").stop(true).animate({"left":"0px"}, 0);
		}else if(targetNo == 12){
			$(".thumbs").stop(true).animate({"left":-$thumbWidth+"px"}, 0);
		}
		targetNo = targetNo == 12 ? 11 : targetNo;
		$thumbsGallery.eq(targetNo).click();
	})

	$("#btnR").click(function(){
		var galleryNo = getGalleryIndex();
		var targetNo = galleryNo == maxLength ? 0 : galleryNo+1;
		
		if(targetNo == 6){
			$(".thumbs").stop(true).animate({"left":-$thumbWidth +"px"}, 0);
		}else if(targetNo == 12){
			$(".thumbs").stop(true).animate({"left":"0px"}, 0);
		}
		targetNo = targetNo == 12 ? 0 : targetNo;
		$thumbsGallery.eq(targetNo).click();
	})

	function getGalleryIndex(){
		var rtn;
		$thumbsGallery.each(function(){
			if($(this).find("a>img").hasClass("selected")){
				rtn = $(this).index();
			}
		})
		return rtn;
	}