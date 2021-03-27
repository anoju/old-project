$(function(){
	var $wrap = $('#wrap');
	var className = "res";
	function resizeWidth(){
		var windowWidth = $(window).outerWidth();
		if(windowWidth <= 1024){
			$wrap.removeClass().addClass(className + '768')
			table_cut(windowWidth);
			if(windowWidth <= 768){
				$wrap.removeClass().addClass(className + '320')
				table_cut(windowWidth);
			}
		}else {
			$wrap.removeClass();
			table_cut(windowWidth);
		}
	}
	
	resizeWidth();
	$(window).resize(function(){
		resizeWidth();
	});
	
	function table_cut(e){
		var number = [0,1,2,4,5]
		$('#wrap table tr').each(function(){
			var $this = $(this)
			if(e <= 768){
				$.each(number,function(index){
					$this.children().eq(number[index]).hide();
				})
			}else{
				$this.children().show();
			}
		});
	}
});