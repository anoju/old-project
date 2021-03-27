$(function(){
	//#content 중복 사용 시 하위 #content의 id 속성 제거
	if($('#content #content').length > 0)$('#content #content').removeAttr('id'); 
	
	//a태그 링크 '#', '#none' 이동 방지
	$(document).on('click','a',function(e){
		var $href = $(this).attr('href');
		if($href == '#' || $href == '#none')e.preventDefault();
	});

	preLoading();
	htmlInclude();
	radioSelectUi();
	toggleUI('.btn-toggle-01', false);
	wordCount();
	tabUI();
	
	//토글버튼
	$('.ui-toggle-btn [class*=btn]').click(function(e){
		$(this).closest('.ui-toggle-btn').find('[class*=btn]').removeClass('on');
		$(this).addClass('on');
	});

	//펀드업무 tip 설정
	$(document).on('click','.list-setting .btn-setting-tip',function(e){
		e.preventDefault();
		var $this = $(this),
			$box = $this.closest('.list-setting');
		
		if($box.hasClass('on')){
			$box.removeClass('on');
		}else{
			$('.list-setting').removeClass('on');
			$box.addClass('on');
		}
	});
	if($('.list-setting').length > 0){
		$(document).on('click',function(){
			$('.list-setting').removeClass('on');
		}).on('click','.list-setting',function(e) {
			e.stopPropagation();
		});
	}

	//펀드별 수익률 알림 서비스 항목_받지 않음 선택일때
	$('.ui-sel-01').change(function(){
		var $txt = $(this).find("option:selected").text();
			$input = $(this).closest('table').find('.input input');
			$button = $(this).closest('table').find('.button .btn-white-s');

		if($txt == '받지 않음'){
			$input.prop('disabled',true);
			$button.addClass('disabled');

		}else{
			$input.prop('disabled',false);
			$button.removeClass('disabled');
		}
	});
	
	//받음, 받지않음 readonly 일때 checked 막기
	$(document).on('click','.btn-st [type=radio]',function(){
		if($(this).prop('readonly') || $(this).prop('disabled')) return false;
	});
});

var preLoading = function(){
	var isWebPreLoading = sessionStorage.getItem('isWebPreLoading'),
		$class = 'pre-loading',
		$imgarry = [
			'/resource/img/wms/web/bg/bg-type-chart-01.png',
			'/resource/img/wms/web/bg/bg-type-chart-02.png',
			'/resource/img/wms/web/bg/bg-type-chart-03.png',
			'/resource/img/wms/web/bg/bg-type-chart-04.png',
			'/resource/img/wms/web/bg/bg-type-chart-05.png'
		];
		
	if(isWebPreLoading != 'true'){
		var $html = '<div class="'+$class+'">';
		for(var i in $imgarry){
			$html += '<span style="background-image:url('+$imgarry[i]+');"></span>';
		}
		$html += '</div>';
	
		sessionStorage.setItem('isWebPreLoading',true);
		$('body').append($html);
	}
};

var htmlInclude = function(){
	var $elements = $.find('*[data-include-html]');
	if($elements.length){
		$.each($elements, function() {
			var $this =	$(this),
				$html = $this.data('include-html'),
				$htmlAry = $html.split('/'),
				$htmlLast = $htmlAry[$htmlAry.length -1];
			
			$this.load($html,function(res,sta,xhr){
				if(!$('html').hasClass('ie8'))console.log('Include Html!');
				if(sta == "success")$this.children().unwrap();
			});	
		});
	}
};

var radioSelectUi = function(){
	//setting
	function btnChange(tar){ 
		var $this = $(tar),
			isClick = $this.data('active');

		if($this.find('input[type=radio]:checked').length == 0){
			$this.find('> ul').find('input[type=radio]').not(':disabled').first().prop('checked', true);
		}

		var $clon = $this.find('input[type=radio]:checked').siblings('.lbl').clone();

		$this.children('a, .lbl').remove();
		$this.prepend('<span class="lbl">'+ $clon.html() + '</span>');

		if(isClick != false && $this.find('input[type=radio]').not(':disabled').length != 1){
			$this.children('.lbl').wrap('<a href="#"></a>');
		}		
	}
	$('.radio-select').each(function(){
		btnChange(this);
	});

	//open
	$(document).on('click','.radio-select > a',function(e){
		e.preventDefault();
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
		}else{
			$('.radio-select').removeClass('on');
			$(this).parent().addClass('on').find('input:checked').focus();
		}
	});

	//selected
	$('.radio-select').on('change','input[type=radio]',function(){
		var $closest = $(this).closest('.radio-select');
		btnChange($closest);
	});	

	//close
	$('.radio-select').on('click','> ul .lbl',function(){ 
		var $this = $(this),
				$select = $this.closest('.radio-select');
		setTimeout(function(){
			$select.removeClass('on').children('a').focus();
		},1);
	});
	$('.radio-select').on('keydown','> ul input',function(e){
		var $this = $(this),
			$closest = $this.closest('.radio-select'),
			$keyCode = (e.keyCode ? e.keyCode : e.which);
		//console.log(e.keyCode);
		if($keyCode == 13 || $keyCode == 32 || $keyCode == 27){		// if(엔터 || 스페이스 || ESC){
			$this.siblings('.lbl').trigger('click');
		}
		if($keyCode == 9){		// 탭키(포커스 아웃시 닫기)
			$closest.removeClass('on');
		}
		if($keyCode == 37 || $keyCode == 38 || $keyCode == 39 || $keyCode == 40){	// 방향키(ie에서 방향키 이동 시 닫히는 현상때문에 추가)
			setTimeout(function(){
				$closest.addClass('on');
			},1);
		}
	});
	$(document).on('click',function(){
		$('.radio-select').removeClass('on');
	}).on('click','.radio-select',function(e) {
		e = e || window.event;
		if(typeof e.stopPropagation == "function"){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	});
};

var toggleUI = function(btn,isTxtChange){
	var $speed = 500;
	
	$(document).on('click',btn,function(){		
		if($(this).hasClass('disabled')) return;
		var $target,
			isList = false;
		if($(this).parents('.ui-toggle-list').size() > 0){
			$target = $(this).closest('li').find('.toggle-cont');
			isList = true;
		}else{
			$target = '#' + $(this).data('target');
		}
		if($($target).is(':animated')) return;
		if($(this).hasClass('on')){
			$(this).removeClass('on').closest('.box-toggle').removeClass('on');
			if(isTxtChange)$(this).text('상세보기 열기');
			$($target).stop().slideUp($speed);
		}else{
			$(this).addClass('on').closest('.box-toggle').addClass('on');
			if(isTxtChange)$(this).text('상세보기 닫기');
			if(isList){
				$($target).closest('li').siblings().find('.btn-toggle-01').removeClass('on').closest('.box-toggle').removeClass('on');
				$($target).closest('li').siblings().find('.toggle-cont').stop().slideUp($speed);
			}
			$($target).stop().slideDown($speed,function(){
				var $scrollTop = $(window).scrollTop(),
					$winH = $(window).height();
				if($('.btn-wrap.fixed').length > 0)$winH -= 50;
				var $top = $(this).offset().top,
					$height = $(this).outerHeight(true),
					$gap = $top+$height-$scrollTop-$winH,
					$scroll = Math.min($top,$scrollTop+$gap);
				if($gap>0)$('html, body').stop().animate({'scrollTop':$scroll},$speed);
			});
		}
	});
};

var alarmBox = function(txt,tit,link){
	var $delay = 3000,
		$speed = 500,
		$className = '.alarm-box';

	var $boxHtml = '<div class="'+$className.substring(1)+'">';
		$boxHtml += (link? '<a href="'+link+'" class="cont">':'<div class="cont">');
		if(tit)$boxHtml += '<div class="tit">'+tit+'</div>';
		$boxHtml += '<div class="txt">'+txt+'</div>';
		$boxHtml += (link? '</a>':'</div>');
		//$boxHtml += '<a href="#" class="close">닫기</a>';
		$boxHtml += '</div>';

	if($($className).length <= 0){
		$('body').prepend($boxHtml);
	}else{
		$($className).find('.tit').text(tit);
		$($className).find('.txt').text(txt);
	}

	var $height = $($className).outerHeight();
	$($className).css({'marginBottom':-$height}).dequeue().stop().animate({'marginBottom':0},$speed).delay($delay).animate({'marginBottom':-$height},$speed,function(){
		$(this).remove();
	});	 
	
	/*$($className).css({'marginBottom':-$height}).animate({'marginBottom':0},$speed,function(){
		$(this).find('.cont').focus();
	});*/
	
	$('.alarm-box .close').click(function(){
		$($className).stop().animate({'marginBottom':-$height},$speed,function(){
			$(this).remove();
		});
	});
};

var wordCount = function(){
	$(document).on('keyup','[data-word-count]',function(){
		var $this = $(this),
			$val = $this.val(),
			$max = $this.attr('maxlength'),
			$length = $val.length,
			$tar = $('#'+$this.data('word-count'));
			
		$tar.text(Math.min($max,$length));
	});
};

var tabUI = function(){
	var $onText = '<span>현재</span>';

	$(document).on('click','.ui-tabmenu a',function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		$(href).addClass('on').siblings('.tab-cont').removeClass('on');
		$(this).parent().prepend($onText).siblings().children('span').remove();
		//웹 접근성 보완
		var $role = $(this).attr('role');
		if($role == 'tab'){
			var $tabpanel = $(this).attr('aria-controls');
			$(this).attr('aria-selected',true).closest('li').siblings().find('[role=tab]').attr('aria-selected',false);
			$('#'+$tabpanel).attr('aria-expanded',true).siblings('[role=tabpanel]').attr('aria-expanded',false);
		}
	});

	$(window).load(function(){
		if($('.ui-tabmenu').length > 0){
			$('.ui-tabmenu').each(function(index, element) {
				var $this = $(this);
				$this.find('li').eq(0).find('a').trigger('click');	
			});
		}
	});
};

var alertText =	function(tar,text,val){
	if(val == null)val = ture;
	var $parent = $(tar).parent();
	//if($(tar).closest('table').length > 0)$parent = $(tar).closest('td');
	var $size = $('.error-txt').size();
	var $error = $parent.find('.error-txt');
	var $ariaIdTxt = 'ui-alertTxt',
			$ariaId =	$ariaIdTxt+($size+1);

	if($error.length > 0){
		$error.show().html(text);
		if($error.attr('id') != null){
			$ariaId = $error.attr('id');
		}else{
			$error.attr('id',$ariaId);
		}
		if(val == false)$error.addClass('blue');
	}else{
		var $html = '<div id="'+$ariaId+'" class="wsr-alert error-txt';
				if(val == false)$html += ' blue';
				$html += '">'+text+'</div>';

		$parent.append($html);
	}
	$(tar).attr({
		'aria-invalid':'true',
		'aria-describedby': $ariaId
	}).focus();
};