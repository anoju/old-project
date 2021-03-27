	$(function(){
		var nowContentLength = 4;
		var currentPage = 1;
		$(".thumbmulti li").click(function(e){
			e.preventDefault();
			var $this = $(this);
			var thisNo = $this.index();
			var targetYoutubeUrl = $this.find("a").attr("href")
			if(thisNo > nowContentLength-1){return false;}
			//var innerHTMLStr='<iframe width="578" height="330" src="'+targetYoutubeUrl+'" frameborder="0" allowfullscreen></iframe>';

			//$(".mediaView").html("");
			$(".thumbmulti li").each(function(){
				$(this).find("a>img").attr("src",$(this).find("a>img").attr("src").replace("_on","_off"))
			})
			$this.find("a img").attr("src",$this.find("a img").attr("src").replace("_off","_on"))

			$(".mediaTit li").removeClass("active").eq(thisNo).addClass("active")
			//$(".mediaView").html(innerHTMLStr)
			$(".mediaView>iframe").attr('src',targetYoutubeUrl);

		})
		$(".multiPaging a").click(function(e){
			e.preventDefault();
			var thisNo = $(this).index();
			currentPage = thisNo;
			$(".thumbmulti li").each(function(){
				if(parseInt($(this).index()/3) != currentPage){
					$(this).hide();
				}else{
					$(this).show();
				}
			})
			$(".multiPaging a").find("img").attr("src",$(".multiPaging a").find("img").attr("src").replace("_on","_off")).end().eq(thisNo).find("img").attr("src",$(".multiPaging a").find("img").attr("src").replace("_off","_on"))
		})
		$(".thumbmulti li").each(function(){
			if($(this).index() >= nowContentLength-1){
				$(this).hide();
			}
		})

		// ######################
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
		// ######################
	})
