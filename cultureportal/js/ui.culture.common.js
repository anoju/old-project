$(function(){
	/* common */
	$('#head div.banner li').changeBanner('#head div.banner > span');
	$('#gnb a:not([class=on])').changeSrc();
	localHighlight();
	localLnbClickListener();
	addFav();
	
	/* datepicker */
	if($(".datepicker").size() > 0){
		$(".datepicker").datepicker({
			showOn:"button",
			buttonImage:"/images/common/icon/icoCalendar.gif",
			buttonImageOnly:true
		});
	}

	/* haeder > sitemap */
	var sitemapLink = $('a[href=#sitemap]');
	sitemapLink.bind('click', function(e){
		var sitemap = $($(this).attr('href'));
		e.preventDefault();
		sitemap.fadeIn(500).find('button').bind('click', function(){
			sitemap.fadeOut(500);
			sitemapLink.focus();
		});
		sitemap.focus();
	});

	/* head > monthly culture */
	var monthCulture = $('#head div.navigator div.notice div');
	if(monthCulture.size() > 0){
		monthCulture.pcnCarousel({
			speed : 500,
			auto : 5001,
		 	visible : 1,
		 	vertical : true
		});
	}
	
	/* footer > organization banner */
	var bannerTab = $('#orgBanner');
	if(bannerTab.size() > 0){ moveTab(bannerTab, 8); }
	bannerTab.hide();
	
	/* footer > banner */
	var orgBannerLink = $('a[href=#orgBanner]');
	var orgBanner = $(orgBannerLink.attr('href'));
	orgBannerLink.toggle(function(e){
		orgBanner.slideDown(100);
		_changeSrc(orgBannerLink, 'off');
		orgBannerLink.children('img').attr('alt', '닫기');
	}, function(e){
		e.preventDefault();
		orgBanner.slideUp(100);
		_changeSrc(orgBannerLink);
		orgBannerLink.children('img').attr('alt', '열기');
	});

});

function addFav(){
	var fav = $('a.addFavorite');
	var favList = ['opera', 'firefox', 'msie']; 
	var isFav = false;

	for(var i in favList){
		 if(navigator.userAgent.toLowerCase().match(new RegExp(favList[i]))){
			 isFav = true;
		 }
	}

	if(fav.size() > 0){ 
		if(isFav){
			fav.jFav();
		}else{
			fav.bind('click', function(e){
				e.preventDefault();
				alert('해당 기능을 지원 하지않는 브라우저입니다.\n\n"Ctrl + D"키를 누르거나 브라우저의 즐겨찾기 기능을 이용해 추가해 주세요.');
			});
		}
	}
}

function openPopup(obj, oWidth, oHeight){
	var url = obj;
	var pWidth = oWidth;
	var pHeight = oHeight;
	var option = 'width=' + pWidth + 'px,height=' + pHeight + 'px,toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=no';
	window.open(url, '', option);
	return false;
}

function moveTab(obj, view){
	var listView = view;
	var listCount = $('li:visible a', obj).size() - 1;
	var listScope = $('li a', obj).index($('a.on', obj));
	var listTotalPage = parseInt(listCount / listView);
	var listActivePage = parseInt(listScope / listView);
	var action = [-1, 1];
	var actionWidth = parseInt($('li:first', obj).outerWidth());

	if(0 != listActivePage){
		$('ul', obj).animate({
			marginLeft : listView * listActivePage * -1 * actionWidth
		}, 400);	
	}

	$('button', obj).bind('click', function(){
		var bIndex = $('button', obj).index($(this));
		var bAction = action[bIndex];
		listActivePage = listActivePage + bAction;

		if(1 == bIndex && listActivePage > listTotalPage){
			listActivePage = listTotalPage;
			alert('마지막입니다');
		}else if(0 == bIndex && listActivePage < 0){
			listActivePage = 0;
			alert('처음입니다');
		}else{
			$('ul', obj).animate({
				marginLeft : listView * listActivePage * -1 * actionWidth
			}, 400);
		}
	});
}

function setCarousel(obj, time01, time02){
	var dTime = time01 ? time01 : 700;
	var iTime = time02 ? time02 : 5000;

	$('div', obj).pcnCarousel({
		speed : dTime,
	 	visible : 1,
	 	btnNext : $('button:last', obj),
	 	btnPrev : $('button:first', obj),
		afterEnd : function(e){
			var cnt = e.index() -1;
			var btn = $('span a', obj); 
			if (cnt >= btn.size()){
				cnt = 0;
			}
			btn.children('img').each(function(){
				$(this).attr('src', $(this).attr('src').replace('On', 'Off'));
			});
			btn.eq(cnt).children('img').attr('src', btn.eq(cnt).children('img').attr('src').replace('Off', 'On'));
		},
		btnGo : $('span a', obj)
	});
	
	var linkHandle = setInterval(function(){
		 $('button:last', obj).trigger('click');
	}, iTime);
	
	$('span a', obj).bind('click', function(){
		clearInterval(linkHandle);
		linkHandle = setInterval(function(){
			$('button:last', obj).trigger('click');
		}, iTime);
	});
}

function localHighlight(){
	/*var local = $.trim($('#content div.head span strong').text());
	var cate = $.trim($('div.localNavigator h2 img').attr('alt'));
	var lnb = $('#lnb > li > a');
	var gnb = $('#gnb a');
	
	lnb.each(function(){
		if($.trim($(this).text()) == local){
			$(this).addClass('on');
		}
	});

	gnb.each(function(){
		if($.trim($('> img', this).attr('alt')) == cate){
			_changeSrc($(this).addClass('on'));
		}
	});
	
	 임시 */
	var localFunction = $('#lnb > li > ul').addClass('off').prev();
	localFunction.each(function(e){
		/*
		if(!$(this).hasClass('hasMain')){
			$(this).click(function(e){
				e.preventDefault();
				localFunction.next().addClass('off');
				$(this).next().removeClass('off');
			});
		}
		*/

		if($(this).hasClass('on')){
			$(this).next().removeClass('off');
		}
	});
}

function localLnbClickListener(){
	$('#lnb > li').each(function(){
		var liEl = $(this);
		liEl.click(function(){
			var clickedNode = liEl.find("a").html();
			$('#lnb > li > ul').each(function(){
				var nodeText = $(this).parent().find("a").html();
				//console.log(nodeText == clickedNode);
				$(this).removeClass('on').addClass('off');
				if(nodeText == clickedNode){
					$(this).removeClass('off').addClass('on');
				}
			});
//			$(this).find("ul").removeClass('off').addClass('on');
			//console.log($(this).find("ul").html());
		});
	});
}

function changeSrc(obj){
	obj.bind('focus mouseenter', function(){
		_changeSrc($(this));
	}).bind('blur mouseleave', function(){
		_changeSrc($(this), 'culture');
	});
}

$.fn.extend({
	changeBanner : function(buttonBox){
		var btn = $('button', buttonBox);
		var bnr = $(this);
		var bCnt = $(this).size() - 1;
		var bIndex = 0;

		bnr.not(':first').hide();

		if(bCnt == 0){
			btn.hide();
			bnr.addClass('only');
		}else{
			btn.click(function(){
				var bAction = btn.index($(this)) == 0 ? -1 : 1;
				bIndex += bAction;
				if(bCnt < bIndex){
					bIndex = 0;
				}else if(0 > bIndex){
					bIndex = bCnt;
				}
				bnr.eq(bIndex).show().siblings().hide();
			});
		}
	},

	changeSrc : function(){
		$(this).bind('focus mouseenter', function(){
			_changeSrc($(this));
		}).bind('blur mouseleave', function(){
			_changeSrc($(this), 'culture');
		});
	}
});

function _changeSrc(obj, fnc){
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

function _openPopLink(obj, oWidth, oHeight){
	obj.click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		var pWidth = oWidth;
		var pHeight = oHeight;
		var option = 'width=' + pWidth + 'px,height=' + pHeight + 'px,toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no';
		window.open(url, '', option);
	});	
}
/*통합검색*/
function onSearch( frm ){
	
	var q = frm.q.value;
	q = $.trim(q);
	if(q == ""){
		alert("검색어를 입력해주세요");
		frm.q.select();
		frm.q.focus();
		return false;
	}
	
	//form.method="post";
	//form.q.value=encodeURI(str,"utf-8");
	//form.action="search.do";
	
	//form.submit();
	//return false;		
}
function onSearchByQuery( action, paramKey, paramValue ){
	var frm = $("#searchForm");
	frm.find("[name="+paramKey+"]").val(paramValue);
	//alert([frm.find("[name="+paramKey+"]").val(),paramValue,paramKey].join());
	var q = "";
	if(paramKey == "q"){
		q = frm.find("[name="+paramKey+"]").val();
	}else{
		q = frm.find("[name=q]").val();
	}
	q = $.trim(q);
	if(q == ""){
		alert("검색어를 입력해주세요");
		frm.q.select();
		frm.q.focus();
	}else{
		frm.action = action;
		frm.submit();
	}
}

function dateCheck(inputDate, point){
    var dateElement = new Array(3);
    
    if(point != ""){
        dateElement = inputDate.split(point);
        if(inputDate.length != 10 || dateElement.length != 3){
            return false;
        }
    }else{
        dateElement[0] = inputDate.substring(0,4);
        dateElement[1] = inputDate.substring(4,6);
        dateElement[2] = inputDate.substring(6,9);
      
    }
    //년도 검사
    if( !( 1800 <= dateElement[0] && dateElement[0] <= 4000 ) ) {
        return false;
    }

    //달 검사
    if( !( 0 < dateElement[1] &&  dateElement[1] < 13  ) ) {
        return false;
    }

    // 해당 년도 월의 마지막 날
    var tempDate = new Date(dateElement[0], dateElement[1], 0);
    var endDay = tempDate.getDate();

    //일 검사
    if( !( 0 < dateElement[2] && dateElement[2] <= endDay ) ) {
         return false;
    }

    return true;
}

/*
 * 날짜 비교
 * 종료일이 시작일 보다 작을때 false를
 * 정상 기간일 경우 true를 리턴한다.
 * @param startDate 시작일
 * @param endDate 종료일
 * @param point 날짜 구분자
 */
 function dateCompare(startDate, endDate, point){
    //정상 날짜인지 체크한다.
    var startDateChk = dateCheck(startDate, point);
    if(!startDateChk){
        return false;
    }
    var endDateChk = dateCheck(endDate, point, "end");
    
    if(!endDateChk){
        return false;
    }

    //년 월일로 분리 한다.
    var start_Date = new Array(3);
    var end_Date = new Array(3);

    if(point != ""){
        start_Date = startDate.split(point);
        end_Date = endDate.split(point);
        if(start_Date.length != 3 && end_Date.length != 3){
            return false;
        }
    }else{
        start_Date[0] = startDate.substring(0,4);
        start_Date[1] = startDate.substring(4,6);
        start_Date[2] = startDate.substring(6,9);

        end_Date[0] = endDate.substring(0,4);
        end_Date[1] = endDate.substring(4,6);
        end_Date[2] = endDate.substring(6,9);
    }

    //Date 객체를 생성한다.
    var sDate = new Date(start_Date[0], start_Date[1], start_Date[2]);
    var eDate = new Date(end_Date[0], end_Date[1], end_Date[2]);

    if(sDate > eDate){
        return false;
    }

    return true;
}