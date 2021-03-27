	String.prototype.IsNum = function(){
		return (/^[0-9]*$/).test(this);
	}
	
	function chkNum(){
		if(!(String.fromCharCode(event.keyCode)).IsNum())
			event.returnValue=false;
	}

	function setStrLength(obj, target, max){
		var o1 = obj;
		var o2 = document.getElementById(target);
		
		o2.innerHTML = o1.value.length+'자';
		
		if(o1.value.length > max){
			alert('최대길이 '+max+'자를 초과했습니다.');
			o1.value = o1.value.substring(0,max);
			o2.innerHTML = o1.value.length+'자';
		}
	}
	
	function popup(url, name, option){
		var win = document.open(url, name, option);
		win.focus();
		return win;
	}

	function nextFocus(target){
		var obj = event.srcElement;
		
		if(obj.tagName == "INPUT")
			if(obj.value.length>=obj.maxLength)
				target.focus();
	}
	
	function getSelectedText(obj){
		for(i=0;i<obj.options.length;i++){
			if(obj.options[i].selected)
				return obj.options[i].text;
		}
		return "";
	}
	
	function setEmail(inp, val){
		if(val != "custom"){
			inp.readOnly = true;
			inp.value = val;
		}else{
			inp.readOnly = false;
			inp.value = '';
			inp.focus();
		}
			
	}
	
	function isNull(str, mes, len, len2){
		var length;
		var message = mes + '을(를) ';
		
		if(len == undefined)
			length = 0;
		else
			length = len;
		
		if(str.value.replace(/(^\s*)|(\s*$)/g,"").length < length || str.value.replace(/(^\s*)|(\s*$)/g,"").length == 0){
			if(length > 0 && len2 == undefined)
				message += length + '자리 '
			else if(length > 0 && len2 != undefined)
				message += length+'~'+len2+'자리 ';
				
			message += '입력해주세요';
			alert(message);
			str.focus();
			return false;
		}
		return true;
	}
	
	function isValidJuminNo(jumin_no) {
		//주민등록번호 끝자리 연산법 참고
		var temp = 0;
		var str_no = jumin_no.toString(); //전체 주민등록번호 매개변수의 값을 문자열로 변환
		var checktemp = str_no.substring(12, 13); //13자리중 끝자리값
		for (var i = 0; i <=11 ; i++) {
			temp = temp + ((i % 8 + 2) * parseInt(str_no.substring(i, i+1)))
		}
		//for문은 끝자리 연산법에 의한 수식계산입니다.(1번~2번)
		temp = 11 - (temp % 11); //3번
		temp = temp % 10; //4번
		
		if (temp == checktemp) return true;
		else return false;
	}
	
	function getRadioValue(str){
		var obj = document.getElementsByName(str);
		
		for(var i=0;i<obj.length;i++){
			if(obj[i].checked)
				return obj[i].value;
		}
		return null;
	}
	
	function setCookie(key,val){
	    var expires = new Date();
	    document.cookie = key+"=" + escape (val) + ";";
	} 
	
	function delCookie(key){
		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate()-1);
		document.cookie = key+"=; expires=" + expireDate.toGMTString()+ + ";";
	}
	
	function getCookieVal(offset) { 
		var endstr = document.cookie.indexOf (";", offset); 
		if (endstr == -1) endstr = document.cookie.length; 
		return unescape(document.cookie.substring(offset, endstr)); 
	} 
	
	function getCookie(str) { 
		var arg = str+'='; 
		var alen = arg.length; 
		var clen = document.cookie.length; 
		var i = 0; 
		while (i < clen) {
			var j = i + alen; 
			if (document.cookie.substring(i, j) == arg) return getCookieVal(j); 
			i = document.cookie.indexOf(" ", i) + 1; 
			if (i == 0) break; 
		}
		return null; 
	}