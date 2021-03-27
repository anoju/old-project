/*
	tab 기능을 구현하기 위한 jQuery plugin
	작성자 : 김정민
	작성일 : 
	버  전 : 0.2
*/
;(function(jQuery){
	jQuery.fn.pcnTab = function(pcn){
		pcn = jQuery.extend({
			activeClass : 'on',
			event : 'click',
			srcChange : true
		}, pcn || {});

		return this.each(function(){ 
			var tab = $('> :header > *:not(span)', this);

			tab.bind(pcn.event, function(e){
				$((pcn.event).split(' ')).each(function(){
					if(this == 'click'){
						e.preventDefault();
					}
				});

				tab.removeClass(pcn.activeClass).parent().nextUntil(':header').hide();
				$(this).addClass(pcn.activeClass).parent().nextUntil(':header').show();
	
				if(pcn.srcChange){
					_changeTabSrc($(this).parent().siblings(), 'toOff');
					if($(this).find('img').size() > 0){
						_changeTabSrc($(this));
					}
				}
			});
			tab.eq(0).trigger((pcn.event).split(' ')[0]);
		});
	};

	function _changeTabSrc(obj, fnc){
		var text = ['On.', 'Off.'];
		var target = $('img', obj);

		if(fnc){
			text = ['Off.', 'On.'];
		}

		if(target.size() > 0){
			target.each(function(){
				$(this).attr('src', $(this).attr('src').replace(text[1], text[0]));
			});
		}
	}
})(jQuery);