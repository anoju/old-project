;(function(jQuery){
	jQuery.fn.pcnCarousel = function(pcn){
		pcn = jQuery.extend({
			auto : null,
			speed : null,

			btnPrev : null,
			btnNext : null,
			btnGo : null,
			btnGoEvent : 'click',
			btnStop : null,
			btnStart : null,

			vertical: false,
			circular: true,
			start: 0,
			view : 1,
	        scroll: 1,

			beforeStart : null,
			afterEnd : null
		}, pcn || {});

		return this.each(function(){ 
			var cont = jQuery(this);
			var list = jQuery('> *:first', cont);
			var listItem = jQuery('> *', list).css('float', pcn.vertical ? 'none' : 'left');
			var listSize = listItem.size();
			var movePixel = pcn.vertical ? listItem.outerHeight() : listItem.outerWidth();
			var intv;

			if(pcn.view > listSize){
				pcn.view = listSize;
			}
			if(pcn.scroll > pcn.view){
				pcn.scroll = pcn.view;
			}

			if(pcn.circular){
				list.prepend(listItem.slice(-pcn.view).clone()).append(listItem.slice(0, pcn.view).clone());
				pcn.start += pcn.view;
			}else{
				if(listSize - pcn.view < pcn.start){
					pcn.start = listSize - pcn.view;
				}
			}

			cont.css(pcn.vertical ? {'width' : listItem.outerWidth(), 'height' : pcn.view * listItem.outerHeight()} : { 'width' : pcn.view * listItem.outerWidth(), 'height' : listItem.outerHeight()});
			list.css(pcn.vertical ? {'margin-top' : -pcn.start * listItem.outerHeight(), 'width' : listItem.outerWidth(), 'height' : listItem.outerHeight() * jQuery('> *', list).size()} : {'margin-left' : -pcn.start * listItem.outerWidth(), 'width' : listItem.outerWidth() * jQuery('> *', list).size(), 'height' : listItem.outerHeight()});

			var current = pcn.start;

			if(pcn.btnPrev){
				jQuery(pcn.btnPrev).click(function(){
					return go(current - pcn.scroll);
				});
			}

			if(pcn.btnNext){
				jQuery(pcn.btnNext).click(function(){
					return go(current + pcn.scroll);
				});
			}

			if(pcn.btnGo){
				jQuery.each(pcn.btnGo, function(index, val) {
					jQuery(val).bind(pcn.btnGoEvent, function(e) {
						e.preventDefault();
						return go(pcn.circular ? index + pcn.view : index);
					});
				});
			}

			if(pcn.btnStart){
				pcn.btnStart.click(function(e){
					e.preventDefault();
					if(!intv){
						setStart();
					}
				});
			}

			if(pcn.btnStop){
				pcn.btnStop.click(function(e){
					e.preventDefault();
					if(intv){
						intv = clearInterval(intv);
					}
				});
			}

			if(pcn.auto && !intv){
				setStart();
			}

			function go(to){
				var action;

				if(pcn.beforeStart){
					pcn.beforeStart.call(this, vis());
				}

				if(pcn.circular){
					if(to < current && to < 0){
						current += listSize;
						to += listSize;
						setPosition();
					}else if(to > current && to > listSize + pcn.view){
						current -= listSize;
						to -= listSize;
						setPosition();
					}
				}else{
					if(to < current && to < 0){
						current = pcn.scroll;
						to = 0;
			//			pcn.btnNext.removeClass('disabled');
			//			pcn.btnPrev.addClass('disabled');
					}else if(to > current && to + pcn.view > listSize){
						current = listSize - pcn.view - pcn.scroll;
						to = listSize - pcn.view;
			//			pcn.btnPrev.removeClass('disabled');
			//			pcn.btnNext.addClass('disabled');
					}
				}

				action = pcn.vertical ? {'margin-top' : -movePixel * to} : {'margin-left' : -movePixel * to}

				list.not(':animated').animate(
					action, pcn.speed, function(){
					current = to;
					if(pcn.afterEnd){
						pcn.afterEnd.call(this, vis());
					}
				});
			}

			function vis(){
				return jQuery('> *', list).slice(current).slice(0, pcn.view);
			}

			function setPosition(){
				list.css(pcn.vertical ? {'margin-top' : -movePixel * current} : {'margin-left' : -movePixel * current});
			}

			function setStart(){
				if(pcn.speed){
					intv = setInterval(function(){
						return go(current + pcn.scroll);
					}, pcn.auto + pcn.speed);
				}
			}
		});
	};
})(jQuery);