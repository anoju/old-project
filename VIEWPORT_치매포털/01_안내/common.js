//document.title = "삼성물산 건설부문";
document.write("<script type='text/javascript' src='/inc/js/common_url.js'></script>");
document.write("<script type='text/javascript' src='/inc/js/select.js'></script>");

var hn="0",sn="0",cn="0",tn="0",globalId="",flaFarm="";

function mnav(){ //상단네비
	var Depth = arguments.length;
	var DepthName = new Array("hn","sn","cn","tn");

	for(i=0;i<Depth;i++){
		if(i==0) hn =  arguments[i];if(i==1) sn =  arguments[i];if(i==2) cn =  arguments[i];if(i==3) tn =  arguments[i];
		if(arguments[i]!="") globalId = (i==0) ? arguments[i] : globalId+"_"+arguments[i] ;
		if(arguments[i]!="") flaFarm = (i==0) ?  DepthName[i]+"="+arguments[i] : flaFarm+"&"+DepthName[i]+"="+arguments[i] ;
	}
	visualChange;
}

//SUB visual + text
function visualChange() {
	var menuDapth = new Array('company','biz','tech','manage','pr','customer','recruit');

	//visual
	var obj= document.getElementById("wrapper")
	if (hn!=0) obj.style.backgroundImage="url(/img/"+menuDapth[hn-1]+"/bg_pattern.gif)";
	var obj= document.getElementById("content-wrap")
	if (hn!=0) obj.style.backgroundImage="url(/img/"+menuDapth[hn-1]+"/bg_visual.png)";
	
	//text
	if (hn==1)
	{
		//회사소개
		$('.visual').append('<strong><img src="/img/company/tit_visual_01.gif" alt="회사소개" /></strong><p><img src="/img/company/tit_visual_02.png" alt="대한민국의 건설을 주도해 온 삼성물산 건설부문 30여 년을 넘어 이제 세계의 건설을 주도합니다." /></p>');
	}else if (hn==2)
	{
		//주요사업
		//$('.visual').append('<strong><img src="/img/biz/tit_visual_01.gif" alt="주요사업" /></strong><p><img src="/img/biz/tit_visual_02.gif" alt="삼성물산 건설부문은 전임직원이 적극적이고 지속적인 활동을 통하여 밝고 따뜻한 지역사회를 위한 밑거름이 되고자 노력하고 있습니다." /></p>');
	}else if (hn==3)
	{
		//기술혁신
		$('.visual').append('<strong><img src="/img/tech/tit_visual_01.gif" alt="기술혁신" /></strong><p><img src="/img/tech/tit_visual_02.png" alt="삼성물산 건설부문은 세계적인 시공기술 역량과 기반기술 연구개발에 대한 적극적인 투자를 통해 건설산업 최고의 전문가 그룹으로 자리매김하고 있습니다. " /></p>');
	}else if (hn==4)
	{
		//지속가능경영
		$('.visual').append('<strong><img src="/img/manage/tit_visual_01.gif" alt="지속가능경영" /></strong><p><img src="/img/manage/tit_visual_02.png" alt="모두가 함께 이루는 조화 속에서 삼성물산 건설부문의 미래는 더욱 빛날 것입니다." /></p>');
	}else if (hn==5)
	{
		//홍보센터
		$('.visual').append('<strong><img src="/img/pr/tit_visual_01.gif" alt="홍보센터" /></strong><p><img src="/img/pr/tit_visual_02.png" alt="현재의 위상을 넘어서, 지금에 만족하지 않고 인류의 삶을 더욱 행복하게 하는 미래를 향해 우리의 도전은 계속되고 있습니다." /></p>');
	}else if (hn==6)
	{
		//고객센터
		$('.visual').append('<strong><img src="/img/customer/tit_visual_01.gif" alt="고객센터" /></strong><p><img src="/img/customer/tit_visual_02.png" alt="삼성물산 건설부문은 항상 열린 생각 열린 마음으로 고객님의 말씀에 귀를 기울이며 언제나 편안한 서비스를 제공하기 위하여 최선을 다하겠습니다." /></p>');
	}else if (hn==7)
	{
		//인재채용
		$('.visual').append('<strong><img src="/img/recruit/tit_visual_01.gif" alt="인재채용" /></strong><p><img src="/img/recruit/tit_visual_02.png" alt="변화를 이끄는 당신이 삼성물산 건설부문의 인재입니다. 삼성물산 건설부문은 인재와 기술을 바탕으로 인류사회에 공헌합니다." /></p>');
	}
}


function setString(node){
	var spStr = "" , last="";
	try{
		var url  = eval(node+"[0]");
		var name = eval(node+"[1]");
	}
	catch(e){
		document.write("아이디가 존재하지 않습니다 : " + node);
	}
	var nodeId  = node;
	var spStr = " <span>></span> ";
	if(node.lastIndexOf('_') != -1) setString(node.substring(0,node.lastIndexOf('_')));
	else lineMapStr += "<a class='home' href='"+eval("u0[0]")+"'><img src='/img/ico/ico_home.gif' alt='HOME' /> "+ eval("u0[1]")+"</a>" + spStr;
	if(currentPath != nodeId)
		lineMapStr += "<a href='"+url+"'>"+ name+"</a>" + spStr;
	else
		lineMapStr += name ;
}

function path(){ //파일패스
	try{
		lineMapStr ="";
		index = 0;
		currentPath="u"+globalId;
		setString("u"+globalId);
		try{ document.getElementById("path").innerHTML = lineMapStr; }
		catch(e){parent.document.getElementById("path").innerHTML = lineMapStr;}
	}catch(e){
		document.write("예외처리 발생 : " +  e);
	}
}

function link(){
	
	//var test = new Array("hn","sn","cn");
	//alert(arguments[0]);
	//alert(arguments[1]);
	//alert(arguments[2]);
	
	var url = "";
	var depth = arguments.length;
	try {
		if(depth==0) return;
		else for(i=0;i<depth;i++) url += ((i==0)?"u":"_") + arguments[i];
		url = eval(url)[0];
		if(url=="") alert("준비중입니다.");
		else location.href = url;
	}catch(e) { alert(e.message); }
}

// 팝업
function pop(url,name,w,h){
	var bw=new bwcheck();
//	if(bw.ie7) h = h-20; 
	window.open(url,name,'width='+w+',height='+h+',scrollbars=no') 
} //Popup(스크롤바없음)
function pops(url,name,w,h){
	var bw=new bwcheck();
//	if(bw.ie7) h = h-20; 	
	window.open(url,name,'width='+w+',height='+h+',scrollbars=yes','top=');
} //Popup(스크롤바있음)


$(function(){
	/*언어선택*/
	$('#l1').click(function(){
		location.href="/html/index.asp";
	});
	$('#l2').click(function(){
		location.href="/eng/html/index.asp";
	});
	/*GlobalNetwork*/
	$('#g1').click(function(){
		location.href="/html/company/global_network_america.asp";
	});
	$('#g2').click(function(){
		location.href="/html/company/global_network_africa.asp";
	});
	$('#g3').click(function(){
		location.href="/html/company/global_network_asia.asp";
	});
	$('#g4').click(function(){
		location.href="/html/company/global_network_europe.asp";
	});
	$('#g5').click(function(){
		location.href="/html/company/global_network_oceania.asp";
	});

	/*서브메뉴*/
	$('#gnb > li').click(function(){
		if($('.sub-wrap').css('display')=='block'){
			$('.sub-wrap').slideUp();
			$('.btn-subClose').hide();
		}else{
			$('.sub-wrap').slideDown();
			$('.btn-subClose').show();
		}
		return false;
	});

	$('.btn-subClose').click(function(){
		$('.sub-wrap').slideUp();
		$('.btn-subClose').hide();
	});

	/*주요사업 실적보기*/
	$("#thumbs a").click(
		function(){
			var largePath = $(this).attr("href");
			$("#largeImg img").attr({ src: largePath });
		}
	);
	$("#thumbs a").click(function(){return false});
	
	
	/*tab change*/
	$("#tabChg2 li").click(function () {
		if($('#tabChg2 li').hasClass('on')){
			$("#tabChg2 li.on").removeClass("on");
		}
		$(this).addClass("on");

		$(".tabCont").hide();
		var cont_show = $(this).find('a').attr("class");
		$("#"+cont_show).show();
		return false;
	});
	
	/* qna */
	qna();

	/*tab change + auto rolling*/
	tabChg();
});

function qna(){//open 처음부터 open되어있는경우 qna-list 옆에 open클래스 써주세요
	var $item = $(".qna-list").find("li"),
		$itemEvent = $item.find("strong").find("a"),
		open = $(".qna-list").hasClass("open")? true : false;
	if(open) $item.addClass("selected")
	$itemEvent.on("click.qna",function(event){
		event.preventDefault();
		var idx = $itemEvent.index(this);
		if(!open){
			$item.each(function(event){
				if($item.eq(event).hasClass("selected")) $item.eq(event).removeClass("selected");
			});
			$item.eq(idx).addClass("selected");
		} else {
			if($item.eq(idx).hasClass("selected")) $item.eq(idx).removeClass("selected")
			else $item.eq(idx).addClass("selected")
		};
	});
};
function tabChg(){
	var $item = $('#tabChg').find("li"),
		$itemEvnet = $item.find("a"),
		$itemTarget = $(".tab-cont"),
		$itemLeg = $item.length,
		idx = 0,
		speed = 3000;

	function init(){
		$(".biz-visual")
			.on("mouseenter", autoStop)
			.on("mouseleave", auto)
		$item.eq(idx).find("a").addClass("on");
		auto();
		$itemEvnet.on("click.tabChg",function(event){
			event.preventDefault();
			idx = $(this).parent().index();
			play();
		});
	}; init();
	
	function play(){
		$itemTarget
			.css("display","none")
			.andSelf().eq(idx).css("display","block");
		$itemEvnet.removeClass("on");
		$item.eq(idx).find("a").addClass("on");
	};
	function auto(){
		timer = window.setInterval(function(){
			idx++;
			if (idx == $itemLeg) idx = 0;
			play();
		}, speed);
	};
	function autoStop(){
		clearInterval(timer);
		timer = null;
	};
};

/* layerPop */
function layerPop(wrap, close){  //ex : layerPop("#greenskill-allconts",".layer-close")
	var $event = $(wrap).find("ul").find("li").find("a"),
		$eventClose = $(close),
		$bg = $("body"),
		$href;
	$event.click(function(event){
		event.preventDefault();
		$bg.append("<div class='layer-bg'></div>");
		$href = $(this).attr("href");
		$($href)[0].style.display = "block";
	})
	$eventClose.click(function(event){
		event.preventDefault();
		$(".layer-bg").detach();
		$($href)[0].style.display = "none";
	});
};

function pop(url,name,w,h){ window.open(url,name,'width='+w+',height='+h+',scrollbars=no, status=no') } //Popup(스크롤바없음)
function pops(url,name,w,h){ window.open(url,name,'width='+w+',height='+h+',scrollbars=yes') } //Popup(스크롤바있음)


