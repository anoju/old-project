// JavaScript Document
function myMoveSubmenu(elementID, targetX, targetY, interval){
	var element =document.getElementById(elementID)
	
	//setTimeout을 그대로 두게되면 cpu가 계속 돌아감(안정성)
	if(element.myV){
			clearTimeout(element.myV)
		}
	
	var Xpos = parseInt(element.style.left)
	var Ypos = parseInt(element.style.top)
	
	//현재 재귀함수를 머추는 조건 움직일 대상이 목적지 도달시 멈춤
	if(Xpos==targetX && Ypos==targetY){
		return true}
		
	//목적지 미도달시 
	if(Xpos < targetX){
		var dis = Math.ceil((targetX - Xpos)/10)
		Xpos += dis //Xpos = Xpos + dis
		}
	if(Xpos > targetX){
		var dis = Math.ceil((targetX - Xpos)/10)
		Xpos += dis
		}
	if(Ypos < targetY){
		var dis = Math.ceil((targetY - Ypos)/10)
		Ypos += dis
		}
	if(Ypos > targetY){
		var dis = Math.ceil((targetY - Ypos)/10)
		Ypos += dis
		}
	
	element.style.left = Xpos + "px"
	element.style.top = Ypos + "px"
	
	
	//객체에 원격으로 변수를 밀어 넣을수 있음
	var repeat = "myMoveSubmenu('"+elementID+"', "+targetX+", "+targetY+", "+interval+")"
	element.myV = setTimeout(repeat, interval)
	}
	
	
	
	
	
	
function mySlideGNB(){
	var gnb1 = document.getElementById("gnb1")
	var gnb2 = document.getElementById("gnb2")
	var gnb3 = document.getElementById("gnb3")
	var subMenu01 = document.getElementById("sub_menu01")
	var subMenu02 = document.getElementById("sub_menu02")
	var subMenu03 = document.getElementById("sub_menu03")
	var contentsSec = document.getElementById("contents_sec")
	
	//원래 위치 초기값
	subMenu01.style.position = "absolute"
	subMenu01.style.left = "0px"
	subMenu01.style.top = "0px"
	
	subMenu02.style.position = "absolute"
	subMenu02.style.left = "0px"
	subMenu02.style.top = "0px"
	
	subMenu03.style.position = "absolute"
	subMenu03.style.left = "0px"
	subMenu03.style.top = "0px"
	
	contentsSec.style.position = "absolute"
	contentsSec.style.left = "0px"
	contentsSec.style.top = "0px"
	
	
	//주메뉴 마우스 오버시 
	gnb1.onmouseover = function(){
		myMoveSubmenu("sub_menu02", 0, 55, 10)
		myMoveSubmenu("sub_menu03", 0, 55, 10)
		myMoveSubmenu("contents_sec", 0, 55, 10)
		}
	gnb2.onmouseover = function(){
		myMoveSubmenu("sub_menu03", 0, 55, 10)
		myMoveSubmenu("contents_sec", 0, 55, 10)
		}
	gnb3.onmouseover = function(){
		myMoveSubmenu("contents_sec", 0, 55, 10)
		}
	//서브메뉴 마우스 오버시 서브메뉴 유지
	subMenu01.onmouseover = function(){
		myMoveSubmenu("sub_menu02", 0, 55, 10)
		myMoveSubmenu("sub_menu03", 0, 55, 10)
		myMoveSubmenu("contents_sec", 0, 55, 10)
		}
	subMenu02.onmouseover = function(){
		myMoveSubmenu("sub_menu03", 0, 55, 10)
		myMoveSubmenu("contents_sec", 0, 55, 10)
		}
	subMenu03.onmouseover = function(){
		myMoveSubmenu("contents_sec", 0, 55, 10)
		}
	
	
	//주메뉴에서 마우스 아웃 시 원래대로 복귀
	gnb1.onmouseout = function(){
		myMoveSubmenu("sub_menu02", 0, -10, 10)
		myMoveSubmenu("sub_menu03", 0, -10, 10)
		myMoveSubmenu("contents_sec", 0, -10, 10)
		}
	gnb2.onmouseout = function(){
		myMoveSubmenu("sub_menu03", 0, -10, 10)
		myMoveSubmenu("contents_sec", 0, -10, 10)
		}
	gnb3.onmouseout = function(){
		myMoveSubmenu("contents_sec", 0, -10, 10)
		}
		
	//서브메뉴에서 마우스 아웃 시 원래대로 복귀
	subMenu01.onmouseout = function(){
		myMoveSubmenu("sub_menu02", 0, -10, 10)
		myMoveSubmenu("sub_menu03", 0, -10, 10)
		myMoveSubmenu("contents_sec", 0, -10, 10)
		}
	subMenu02.onmouseout = function(){
		myMoveSubmenu("sub_menu03", 0, -10, 10)
		myMoveSubmenu("contents_sec", 0, -10, 10)
		}
	subMenu03.onmouseout = function(){
		myMoveSubmenu("contents_sec", 0, -10, 10)
		}
	}
	
addLoadEvent(mySlideGNB)