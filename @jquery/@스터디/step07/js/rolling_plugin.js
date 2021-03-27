// tab 플러그인 제작 - 장영석	
;(function($){
	$.fn.rolling = function(options){
		var opt = $.extend({
			speed:1000,
			height:16
		},options);
		return this.each(function(){
			var $this = $(this);
			var $rolling = $this.find('div>ul');
			var $length = $this.find('div>ul>li').length;
			var time = setInterval(timer,opt.speed*2);
			function timer(){
				$rolling.animate({'top':'-=' + opt.height},opt.speed,function(){
					$rolling.append($rolling.children().eq(0)).css('top',0);
				});
			};
			$this.hover(function(){
				clearInterval(time);
			},function(){
				time = setInterval(timer,opt.speed*2);
			});
		});
	};
})(jQuery)
