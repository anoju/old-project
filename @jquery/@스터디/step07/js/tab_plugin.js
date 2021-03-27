// tab 플러그인 제작 - 장영석	
;(function($){
	$.fn.tabMenu = function(options){
		var opt = $.extend({
			tab_method : 'one',
			tab_event : 'click'
		},options);
		return this.each(function(){
			var $this = $(this);
			var memory=$(this).find('.on').children('a').find('img');
			switch (opt.tab_method){
				case 'one':
					one();
					break;
				case 'two':
					two();
					break;
				default:
					break;
			}
			function one(){
				$this.children('ul').children('li').children('a').bind(opt.tab_event,function(){
					$(this).parent().addClass('on').siblings().removeClass('on');
				});
			}
			function two(){
				$this.find('img').css('margin-top',0);
				memory.attr('src',memory.attr('src').replace('.gif','_on.gif'));
				$this.children('ul').children('li').children('a').bind(opt.tab_event,function(){
					if(memory != ''){
						memory.attr('src',memory.attr('src').replace('_on.gif','.gif'));
					}
					memory = $(this).find('img');
					memory.attr('src',memory.attr('src').replace('.gif','_on.gif'));
					$(this).parent().addClass('on').siblings().removeClass('on');
				});
			}
		});
	};
})(jQuery)
