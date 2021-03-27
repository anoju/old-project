var wrap_div = document.getElementById('wrap');
var content_div = document.getElementById('wrapper-iefixed');
var fixed_layer = document.getElementById('bar');
var chk_ie6 = navigator.appVersion.substring(25,22);



window.onload=fixed_delayout;
window.onresize=fixed_delayout;scroll_fix;
if (chk_ie6=="6.0"){
	document.getElementById('wrap').onscroll=scroll_fix;
}else{
	window.onscroll=scroll_fix;
}

function fixed_delayout(){
	if (chk_ie6=="6.0"){
		//fixed_layer.style.width = wrap_div.clientWidth +'px';
		fixed_layer.style.width = '100%';
		if (document.documentElement.clientWidth < content_div.clientWidth){
			fixed_layer.style.bottom=14+'px';	//가로스크롤 생겼을 경우 레이어의 포지션값
		}else{
			fixed_layer.style.bottom=-1+'px';
		}
	}else{
		fixed_layer.style.width=wrap_div.clientWidth + 'px';
	}
}

function scrollX(){
	var de = document.documentElement;
	return self.pageXOffset ||
		(de && de.scrollLeft) ||
		document.body.scrollLeft;
}

function scroll6X(){
	return wrap_div.scrollLeft;
}
function scroll_fix(){
	if (chk_ie6=="6.0"){
		var scrollx_bar = scroll6X();
	}else{
		var scrollx_bar = scrollX();
	}
	fixed_layer.style.marginLeft= -scrollx_bar + 'px';
	fixed_layer.style.width=wrap_div.clientWidth +scrollx_bar + 'px';
}





