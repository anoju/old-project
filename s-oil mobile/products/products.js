function productTab(){
	$(".atc_products .flyBtn a").each(function(idx){
		$(this).toggle(
			function(){
				$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_open","_close") );
				//$(this).parents(".insideWrap").find(".selBtns").toggleClass("hide");
				$(this).parents(".insideWrap").find(".selBtns").animate(
					{height:150},200
				);
			},
			function(){
				$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_close","_open") );
				//$(this).parents(".insideWrap").find(".selBtns").toggleClass("hide");
				$(this).parents(".insideWrap").find(".selBtns").animate(
					{height:0},200
				);
			}
		);
	});

	$(".selBtns .b").each(function(idx){
		$(this).click(function(){
			$(".selBtns .b").removeClass("on");
			$(".selBtns .b").eq(idx).addClass("on");
			alert(
				"big button click"
			);
		});
	});

	$(".selBtns .s").each(function(idx){
		$(this).click(function(){
			$(".selBtns .s").removeClass("on");
			$(".selBtns .s").eq(idx).addClass("on");
			alert(
				"small button click"
			);

		});
	});

}

$(function(){
	productTab();
});