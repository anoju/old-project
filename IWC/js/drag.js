$(function(){
	$('.frontBack').each(function(){$(this).frontBackSlider();});
	//alert('aa');

	if($('body').hasClass('paralax')){paralaxBG();}
});
$.fn.frontBackSlider=function(opts){
	var string_VIEW_BACK='View Back';
	var string_VIEW_FRONT='View Front';
	var GLOBAL_EASING='easeInOutQuad';
	var opacitySupport=$.support.opacity;
	var defaults={dur:300,easing:GLOBAL_EASING};
	var frontBackID=$(this).attr("id");
	var wrap=$('<div id="'+frontBackID+'" class="frontBackWrap"></div>');
	var options=$.extend(defaults,opts);
	var sur=this;
	var sliderWindow=$('<div class="sliderWindow"></div>');
	var handle=$('<div class="handle"></div>');
	var shadow=$('<div class="shadow"></div>');
	var controls=$('<div class="fbSliderControls"><a href="#back" class="first">'+string_VIEW_BACK+'</a><a href="#front" >'+string_VIEW_FRONT+'</a></div>');
	var frontBtn=controls.find('a[href$="#front"]');
	var backBtn=controls.find('a[href$="#back"]');
	var front=this.find('.front');
	var limitRight=432;
	var half=limitRight/2;
	var shW;
	var lineLength=function(x,y,x0,y0){return Math.sqrt((x-=x0)*x+(y-=y0)*y);};

	this.wrap(wrap);
	if(this.find('li').length==2){
		sliderWindow.append(handle).insertBefore(this);
		controls.insertAfter(this);
		shW=shadow.width();
		if(opacitySupport){
			shadow.css({opacity:.1});
		}else{
			shadow.hide();
		}
	}
	frontBtn.bind('click',function(){slideWindowTo(442);return false;});
	backBtn.bind('click',function(){slideWindowTo(handle.width()+2);return false;});
	handle.bind('drag',function(e,d){
		var pX=d.offsetX-$('#'+frontBackID).offset().left;var realX=(pX+30);	
		var targX=Math.min(limitRight,Math.max(32,realX));sliderWindow.width(targX);front.width(targX-15);
		if(opacitySupport){
				var tmp=lineLength(pX+15,0,half,0);
				var shO=tmp/half;shadow.css({left:targX-shW,opacity:1-shO});
		}
	});
	
	var slideWindowTo=function(x){sliderWindow.stop().animate({width:x},{duration:options.dur,easing:options.easing});
	front.stop().animate({width:x-15},{duration:options.dur,easing:options.easing});
	var shoPac=1-(lineLength(x+15,0,half,0)/half);
	if(opacitySupport){shadow.stop().fadeTo(options.dur/2,.1).animate({left:x-shW,opacity:0},{duration:options.dur,easing:options.easing,queue:false});}}
	slideWindowTo(limitRight);
}

var paralaxBG=function(){
	var w=$(window);
	var b=$('body');
	w.scroll(function(){
		var paralaxStartY=350;
		if($('body').hasClass('siderale')){
			paralaxStartY=150;
		}
	var bgTargY=-w.scrollTop()/4+paralaxStartY;
	var bgTarg='50% '+bgTargY+'px';
	b.css('backgroundPosition',bgTarg);
	});
}