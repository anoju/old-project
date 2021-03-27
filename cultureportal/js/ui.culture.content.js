$(function(){
	/* lnb sns */
	$('div.sns').pcnTab({event:'click', srcChange:false});

	/* aside */
	var promoteCarousel = $('#aside div.promote');
	if(promoteCarousel.size() > 0){ setCarousel(promoteCarousel, 500, 5000); }

	var cultureBanner = $('#aside div.cultureBanner');
	if(cultureBanner.size() > 0){ setCarousel(cultureBanner, 500, 5000); }

	/* 사이트 공통 */
	expOption();
	removeBorder();
	boardHighlight();
	
	var scrap = $('li.scrap a');
	if(scrap.size() > 0){ _openPopLink(scrap, 280, 160); }

	var print = $('li.print button');
	if(print.size() > 0){ print.click(function(){ window.print(); }); }

	var placeholder = $('.placeholder');
	if(placeholder.size() > 0){ setPlaceholder(placeholder); }
	
	/* 소식 > UCI코드복사 */
	var copyButton = $('.copyUCI');
	if(copyButton.size() > 0){ copyUCI(); }

	/* 행사/교육 > 행사/축제 */
	var occasion = $('form.selectMonth span.year button');
	if(occasion.size() > 0){ selectYear(occasion); }

	/* 문화동영상 */
	var vod = $('div.vodList a.popup');
	if(vod.size() > 0){ _openPopLink(vod, 700, 650); }

	/* 공연전시 > 문화릴레이티켓 */
	var discount = $('h5.discount a');
	if(discount.size() > 0){ viewDiscount(discount); }

	/* 공연전시 > 문화예술단체 */
	var more = $('ul.organization a.moreInfo');
	if(more.size() > 0){ viewMore(more); }

	/* 공연전시 > 문화예술공간 */
	var place = $('ul.placeList li > a:not([class="on"])');
	if(place.size() > 0){ changeSrc(place); }

	/* 공연전시 > 관람가이드 */
	var guideTab = $('ul.guideTab a');
	if(guideTab.size() > 0){ subTab(guideTab); }

	/* 전통디자인 */
	var contentTab01 = $('ul.contentTab01 a:not([class="on"])');
	if(contentTab01.size() > 0){ changeSrc(contentTab01); }

	/* 전통디자인 > 형태별문양*/
	var categoryTab01 = $('div.categoryTab01');
	if(categoryTab01.size() > 0){ moveTab(categoryTab01, 6); }

	var categoryTab02 = $('div.categoryTab02');
	if(categoryTab02.size() > 0){ moveTab(categoryTab02, 8); }

	var contentTab02 = $('div.categoryTab02 a:not([class="on"])');
	if(contentTab02.size() > 0){ changeSrc(contentTab02); }
	
	/* 전통디자인 > 문양코드복사 */
	var copyButton = $('.copyCode');
	if(copyButton.size() > 0){ copyCode(); }

	/* 전통디자인 > 전통문양활용 */
	var categoryTab03 = $('div.designSubList');
	if(categoryTab03.size() > 0){ moveTab(categoryTab03, 8); }

	/* 전통디자인 > 활용가이드 */
	var moreBtn = $('td.more button');
	if(moreBtn.size() > 0){ addInput(moreBtn); }

	/* 전통디자인 */
	var asidePatternDesign = $('#aside div.patternDesign');
	if(asidePatternDesign.size() > 0){ setCarousel(asidePatternDesign, 700, 5000); }

	/* 문화추천 > 인덱스 */
	var recommendBox = $('div.cultureIndex div.recommendBox');
	if(recommendBox.size() > 0){ setCarousel(recommendBox, 200, 5000); }

	var bannerBox = $('div.cultureIndex div.bannerBox');
	if(bannerBox.size() > 0){ setCarousel(bannerBox, 200, 5000); }

	/* 문화추천 > 문화공감토크 */
	var mediaTab = $('div.selectMedia');
	if(mediaTab.size() > 0){ mediaTab.pcnTab({event:'click'}); }
	
	var themeHead = $('p.themeHead img');
	if(themeHead.size() > 0){ setImgSize(themeHead, 723); }
	
	/* 문화추천 > 문화SNS */
	var snsTree = $('ul.snsTree');
	if(snsTree.size() > 0){ cultureSNS(); }	

	var realtimeSNS = $('div.realtimeSNS');
	if(realtimeSNS.size() > 0){ realtimeSNS.pcnTab({event:'click'}); }

	/* 기타서비스 > 예술지식백과 */
	var workSubList = $('div.workSubList');
	if(workSubList.size() > 0){
		var btn = $('div.media ul button');
		btn.bind('click', function(){
			var idx = btn.index($(this));
			$(this).addClass('on').parent().siblings().children().removeClass('on');
			$('button', workSubList).unbind();
			$('ul', workSubList).css({marginLeft:0});
			if(idx == 1){
				$('li', workSubList).hide().find('img.video').parents('li').show();
			}else if(idx == 2){
				$('li', workSubList).show().find('img.video').parents('li').hide();
			}else{
				$('li', workSubList).show();
			}
			moveTab(workSubList, 8);
		});
		btn.eq(0).trigger('click');
	}

	/* 회원가입 */
	var validationTab = $('div.validation');
	if(validationTab.size() > 0){ validationTab.pcnTab({event:'click'}); }

	var findPW =  $('div.findPW');
	if(findPW.size() > 0){ findPW.pcnTab({event:'click'}); }

	/* 고객센터 > FAQ */
	var customerFAQ = $('div.customerFAQ');
	if(customerFAQ.size() > 0){ runFAQ(customerFAQ); }

	/* 고객센터 > 오픈API */
	var apiGuide = $('ul.apiGuide a');
	if(apiGuide.size() > 0){ runAPIGuide(apiGuide); }

	/* 고객센터 > 관련사이트 */
	var siteLink = $('ul.siteLink');
	if(siteLink.size() > 0){ runSiteLink(siteLink); }

	/* 입력양식 메일 서비스 제공 회사 선택 */
	var selectMail = $('select.selectMail');
	if(selectMail.size() > 0){ selectMailServer(selectMail); }

	/* 맨위로 */
	var moveBtn = $('a.toTop');
	if(moveBtn.size() > 0){ moveTop(moveBtn); }
	
	/* 레이어 */
	var layerBackground = $('div.LayerBackground');
	if(layerBackground.size() > 0){ setLayer(); }

	/* 게시물 이미지 resizing */
	var imgs680 = $('div.article01 img, td.content img');
	if(imgs680.size() > 0){ setImgSize(imgs680, 680); }

	var imgs725 = $('div.themeContent img, div.performCont img, div.occasionCont img, div.aboutPlace img, div.designContent img');
	if(imgs725.size() > 0){ setImgSize(imgs725, 725); }
});

function setImgSize(obj, max){
	var maxWidth = max;
	$(window).load(function(){
		obj.each(function(){
			if($(this).width() > maxWidth){
				$(this).width(maxWidth);
			}
		});
	});
}

function setLayer(){
	var layerBackground = $('div.LayerBackground');
	layerBackground.height($(document).outerHeight());
	$('a.layerOpen').bind('click', function(e){
		var layer = $($(this).attr('href'));
		e.preventDefault();
		layerBackground.show();
		layer.show().find('button').click(function(){
			layer.hide();
			layerBackground.hide();
		});
	});
}

function runSiteLink(obj){
	$('> li > a', obj).bind('focus mouseenter', function(){
		_changeSrc($(this).addClass('on').parent().addClass('on').siblings().removeClass('on').find('> a').removeClass('on').each(function(){
			_changeSrc($(this), 'off');
		}).end().end().end());
	}).bind('click', function(e){
		e.preventDefault();
	});	
}

function runAPIGuide(obj){
	obj.bind('click', function(e){
		e.preventDefault();
		$(this).addClass('on').parent().siblings().children().removeClass();
		$($(this).attr('href')).nextAll().hide().prevUntil($(this).parents('ul:first')).hide().end().end().nextUntil('h5').andSelf().show();
	});
	obj.eq(0).trigger('click');
}

function runFAQ(obj){
	var question = $('> div > h5 a', obj).parent().next().hide().end().end();
	obj.pcnTab({event:'click'});
	question.bind('click', function(e){
//		alert('bb');
		e.preventDefault();
		$(this).parent().next(':hidden').slideDown(200).siblings('div').slideUp(200);
	});
}

function selectMailServer(obj){
	if(obj.val() == ''){
		obj.prev().attr('readonly', false);
	}
	obj.bind('change', function(){
		var text = $(this).val();
		if(text == ''){
			$(this).prev().attr('readonly', false).focus();
		}else{
			$(this).prev().val(text).attr('readonly', true);
		}
	});
}

function addInput(obj){
	obj.bind('click', function(){
		var pNode = $(this).parent().prev();
		var cNode = $('input:last', pNode).clone().val('');
		if($('input', pNode).size() >= 20){
			alert('20건 이상은 별도 문의 바랍니다');
		}else{
			pNode.append(cNode);
		}
	});
}

function copyCode(){
	$(".copyCode").parent().zclip({
	    path : "../flash/ZeroClipboard.swf",
	    copy : function(){return $(this).children().attr('data-code');}
	});
}

function copyUCI(){
	$(".copyUCI").parent().zclip({
	    path : "../flash/ZeroClipboard.swf",
	    copy : function(){return $(this).children().attr('data-code');}
	});
}

function setPlaceholder(obj){
	obj.each(function(){
		if($.trim($(this).val()) != ''){
			$(this).addClass('removePlaceholder');
		}		
	}).bind('focus', function(){
		if($.trim($(this).val()) == ''){
			$(this).addClass('removePlaceholder').val('');
		}
	}).bind('blur', function(){
		if($.trim($(this).val()) == ''){
			$(this).removeClass('removePlaceholder');
		}
	});
}

function selectYear(obj){
	var area = $('form.selectMonth span.year input').attr('readonly', true);
	obj.click(function(){
		var index = obj.index($(this));
		
		if(index == 0){
			index = -1;
		}
		var year = parseInt(area.val()) + index;
		var date = new Date();
		date = Number(date.getFullYear());
		if ( year < 2008){
			year = 2008;
		} else if ( year > date+2 ){
			year = date+2;
		}  
		
		area.val(year);
	});
}

function boardHighlight(){
	$('table.boardList01 td a, table.boardList01 td').bind('focus mouseover', function(){
		$(this).parents('tr:first').addClass('on');
	}).bind('blur mouseleave', function(){
		$(this).parents('tr:first').removeClass('on');
	});	
}

function subTab(obj){
	obj.bind('click', function(e){
		e.preventDefault();
		$($(this).parents('ul:first').nextAll().hide().end().end().addClass('on').parent().siblings().children().removeClass('on').end().end().end().attr('href')).nextUntil('h4').andSelf().show();
	});
	obj.eq(0).trigger('click');
}

function viewMore(obj){
	obj.next('div').addClass('close');
	obj.toggle(function(e){
		e.preventDefault();
		$(this).text('닫기').addClass('close').next().removeClass('close');
		
	}, function(e){
		e.preventDefault();
		$(this).text('더보기').removeClass('close').next().addClass('close');
		
	});
}

function viewDiscount(obj){
	obj.bind('click', function(e){
		e.preventDefault();
		$(this).removeClass('off').parent().next('ul').removeClass('off').end().siblings().children().addClass('off').end().next().addClass('off');
	});
}

function expOption(){
	$('form a.option').toggle(function(e){
		e.preventDefault();
		$(this).children().attr({
			'src' : $(this).children().attr('src').replace('Open', 'Close'),
			'alt' : '접음'
		}).parent().prev().addClass('viewAll');
	}, function(e){
		$(this).children().attr({
			'src' : $(this).children().attr('src').replace('Close', 'Open'),
			'alt' : '펼침'
		}).parent().prev().removeClass('viewAll');
	});
}

function removeBorder(){
	$('form.search01 tr:last, form.search02 tr:last').addClass('zeroBorder');
}

function cultureSNS(){
	var tree = $('ul.snsTree');
	var root = $('> li > a', tree);
	var node = $('> li > ul > li > span > a', tree);

	$('div ul', tree).each(function(){
		$(this).addClass(function(){
			return 'size0' + $(this).children().size();
		});
	});
	
	if($.browser.msie && $.browser.version < 8){
		$('> li > ul > li', tree).each(function(){
			$(this).width(function(){
				var tWidth = $(this).children('span').width();
				var cNode = $(this).find('li').size();
				if(tWidth < 94 && cNode == 3){
					tWidth = 94;
				}
				if(tWidth < 71 && cNode == 2){
					tWidth = 71;
				}
				return tWidth;
			});
		});
	}
		
	root.bind('click', function(e){
		e.preventDefault();
		$('a', $(this).addClass('on').parent().siblings().find('a').removeClass('on this').end().find('div').removeClass('on').end().end().end().next()).addClass('on');
		if($.browser.msie && $.browser.version < 8){
			$('> li > ul > li', tree).css({zIndex:800});
		}
		setBackground(root.index($(this)));
	});

	node.bind('click', function(e){
		e.preventDefault();
		$(this).parents('li:last').find('a').removeClass('this').addClass('on').end().find('div').removeClass('on').end().siblings().find('a').removeClass('on this').end().find('div').removeClass('on').end().end().end().addClass('this').parent().next().addClass('on');
		if($.browser.msie && $.browser.version < 8){
			$(this).parents('li:first').css({zIndex:1800}).siblings().css({zIndex:800});
		}
		setBackground(root.index($(this).parents('li:last').children('a:first')));
	});
	
	function setBackground(cnt){
		tree.css({backgroundPosition:-(cnt + 1) * 726 + 'px 0'});
	}
}

function moveTop(obj){
	var btn = obj;

	$(window).bind('load resize scroll', function(){
		var oHeight = $('#aside').offset().top + $('#aside').height() + 50;
		var nHeight = $(window).scrollTop();
		btn.css({
			top: oHeight,
			left: $('#aside').offset().left + $('#aside').outerWidth() - btn.width()
		});

		if(nHeight > oHeight){
			btn.css({
				top: nHeight + 50
			});
		}
	});

	btn.bind('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, 300);
	});
}