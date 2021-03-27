$(function(){
	cssSet();
	plSortSet();
	tabTimelineSet();
	gageBarSet();
	layerPop(); // 레이어팝업
	gradeInfo(); // 문화인 등급조건 레이어팝업
	select(); // 셀렉트박스 스타일
});


function cssSet(){
	//우측 첫번째 영역 마진값 부여
	if($('.timeviewCon.right').size() > 0){
		var $left = $('.timeviewCon.left:first')
		var	$lHeight = $left.outerHeight()
		var $right = $('.timeviewCon.right:first')
		var	$rHeight = $right.outerHeight()		
		//alert($lHeight-$rHeight);		
		$('.timeviewCon.right:first').css({'margin-top':($lHeight-$rHeight)+20})
	}
}

//조회 조건
function plSortSet(){	
	$('.plSort a').click(function(){
		var $this = $(this).parent()
		$this.addClass('on').siblings().removeClass('on');
		return false;
	});
}

//전체, 진행, 해결 탭
function tabTimelineSet(){
	$('.tabTimeline a').click(function(){
		var $this = $(this).parent()									
		var idx = $this.index();								
		switch(idx){
			case 0 :
				$this.next().after($this);
				break;
			case 1 :
				
				break;
			case 2 :
				$this.prev().before($this);
				break;
		}						
		$this.addClass('on').siblings().removeClass('on');
		return false;
	});
	$('.tabTimeline a:first').trigger('click');
}

//조회 조건
function gageBarSet(){	
	if($('#gageBar').size() > 0){
		var firstNum = $('#gageBar .first .num').text();
		var lastNum = $('#gageBar .last .num').text();
		var nowNum = $('#gageBar .now .num').text();
		var lfNum = lastNum - firstNum
		var gageWidth = parseInt((nowNum-firstNum)/lfNum*100);
		$('#gageBar .now .gage').animate({'width':(gageWidth)+'%'},1000);
		$('#gageBar .now .num').hide();
		$('#gageBar .now .num').delay(500).css({'width':(gageWidth+9) +'%'}).fadeIn();
	}
}


/* layerPop */
function layerPop(){
	$('.btnReport, .showGrade').click(function(e){
		e.preventDefault();
		$('html').addClass('hideScroll');
		$('<div class=bgLayer></div>').appendTo('#contentWrap');
		$('.bgLayer').fadeTo('fast', 0.6);
		$('.layerPop').fadeIn();
	});

	$('.btnPopClose, .btnPopCancel').click(function() {
		$('.layerPop').fadeOut(300,function() {
			$('.bgLayer').hide(300,function() {
				$('html').removeClass('hideScroll');
				$('.bgLayer').remove();
			});
		});
	});
}

function gradeInfo(){
	if($('.myGrade').size()>0){
		$('.myGrade .questionMark').click(function(e){
			e.preventDefault();
			$('.popAdviceWrap').fadeIn();
		});
		$('.btnPopClose').click(function(e){
			e.preventDefault();
			$('.popAdviceWrap').fadeOut();
		});
	}
}

function select(){
	if ($("select.txtSel").size() > 0) {
		$("select.txtSel").selectBox();
		$('a.selectBox').attr('tabindex',0);
	}
}