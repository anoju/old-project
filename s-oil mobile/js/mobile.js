var gnbSc;
var mainR;
$(function(){
	$("header .menu > a").toggle(
		function(e){
			e.preventDefault();
			gnbAc($(this));
		},
		function(e){
			e.preventDefault();				
			gnbAc($(this));
		}
	);

	if ($("#mainVisual").length){
		mainR = new roll($("#mainVisual"));
		mainR.speed = 400;
		mainR.autoTime = 5000;
		mainR.paging = true;
		mainR.init($("#mainVisual"));
	}

	if ($(".newsList").length){
		$(".newsList > dd > .cont img, .newsList > dd > .cont iframe").each(function(){
			$(this).removeAttr("width");
			$(this).removeAttr("height");
		});

		$(".newsList > dt a ").each(function(idx){
			$(this).click(function(){
				$(".newsList > dd").hide();
				$(".newsList > dt").removeClass("on");
				if ( $(this).parents("dt").hasClass("on") ){
					$(this).parents("dt").removeClass("on");
				}else{
					$(this).parents("dt").addClass("on");
					$(".newsList > dd").eq(idx).show();
				}
			});
		});

		$(".newsList > dd .closeBtn").each(function(idx){
			$(this).click(function(){
				$(".newsList > dt").eq(idx).removeClass("on");
				$(".newsList > dd").eq(idx).hide();
			});
		});
	}

});

function gnbAc(o){
	var s = $(o).parents(".menu").hasClass("on");
	$(o).parents(".menu").toggleClass("on");
	if (s){
		$(o).parents(".mainMenu").find(".menuWrap").hide();			
	}else{
		$(o).parents(".mainMenu").find(".menuWrap").fadeIn("fast");
	}
	gnbScSet();
}
$(window).resize(function(){
	changeOrientation();
});

function gnbScSet(){
	if (gnbSc){
		gnbSc.remove();
	}
	var wH = parseInt($(window).height());
	var t =110;
	var t1 = 80;
	var b = 10;
	$("#gnb").css("height",parseInt(wH-t-b)+"px");	
	$("#header .menuWrap").css("height",parseInt(wH-t1)+"px");
	gnbSc = fakescroll.preset('gnb', 'ios-mode',{blockparentscroll:true, resetwithwindow:true,useswipe:true });
}

function changeOrientation(){
	gnbScSet();
	if ($("#mainVisual").length){
		mainR.reset($("#mainVisual"));
	}
}

$(window).load(function(){
	window.scrollTo(0,0);
	if ($("#mainVisual")){
		mainR.reset($("#mainVisual"));
	}
});

window.onorientationchange = changeOrientation;

var roll = function(obj){
	var root = this;
	this.obj = obj;
	this.speed = 300;
	this.autoTime = 5000;
	this.paging = false;
	this.timer = null;
	this.movement = true;
	this.sNum = 0;

	this.reset = function(obj){
		root.liW = parseInt($(root.obj).width());
		$(root.obj).find("ul").css({
			"width" : parseInt(root.liW*root.mNum)+"px",
			"margin-left" : -1 * (parseInt(this.sNum) * this.liW)+"px"
		}).find("li").css("width",root.liW+"px");
		root.liH = parseInt($(root.obj).find("ul > li img").height());
		root.obj.height(root.liH);
	}
	
	this.init = function(obj){
		root.reset(obj);
		root.mNum = $(root.obj).find("ul > li").size();

		if (root.paging && root.mNum > 1){
			//$(this.obj).append('<div class="Rbanner_page"></div>');	
			var html = '<div class="Rbanner_page">';
			for (var i = 0,max = root.mNum;i < max ;i++ ){
				html += '<a href="#none">'+i+'</a>';
			}
			html += '</div>';
			$(root.obj).append(html);
			$(root.obj).find(".Rbanner_page a").each(function(idx){
				if (idx == 0){
					$(this).addClass("on");
				}
				$(this).click(function(e){
					root.rolAc(idx);
					e.preventDefault();
				});	
			});
		}

		

		$(root.obj).mouseover(function(){
			root.movement = false;
			if (root.timer){
				clearTimeout(root.timer);
			}
		});
		
		$(root.obj).mouseleave(function(){
			if (root.timer) clearTimeout(root.timer);
			root.movement = true;
			root.timer = setTimeout(function(){
				root.rolAc("r");	
			},root.autoTime);
		});

		root.timer = setTimeout(function(){
			root.rolAc("r");
		},root.autoTime);

	}
	
	this.btnAc = function(o,o2){
		this.o = o;
		$(this.o).find("a").each(function(idx){
			$(this).click(function(){
				var t = (idx == 0) ? "l" : "r";
				o2.rolAc(t);
			});
			$(this).mouseover(function(){
				root.movement = false;
				if (root.timer){
					clearTimeout(root.timer);
				}
			});
			
			$(this.obj).mouseleave(function(){
				if (root.timer) clearTimeout(root.timer);
				root.movement = true;
				root.timer = setTimeout(function(){
					root.rolAc("r");	
				},this.autoTime);
			});


		});
	}

	this.rolAc = function(n){
		if (n == "l"){
			this.sNum = (this.sNum > 0) ? parseInt(this.sNum)-1 : parseInt(this.mNum)-1;
		}else if (n == "r"){
			this.sNum = (this.sNum < parseInt(this.mNum)-1) ? parseInt(this.sNum)+1 : 0;
		}else{
			this.sNum = n;
		}

		if (this.paging){
			$(this.obj).find(".Rbanner_page a").removeClass("on");
			$(this.obj).find(".Rbanner_page a").eq(this.sNum).addClass("on");
		}
		
		$(this.obj).find("ul").stop().animate({
			marginLeft : -1 * (parseInt(this.sNum) * this.liW)
		},this.speed);

		if (this.movement){
			root.timer = setTimeout(function(){
				root.rolAc("r");
			},this.autoTime);
		}
		
	}	
}
