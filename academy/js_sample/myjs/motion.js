// JavaScript Document
function myMove(elementID, targetX, targetY, interval){
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
		/*Xpos++*/
		var dis = Math.ceil((targetX - Xpos)/10)
		Xpos += dis //Xpos = Xpos + dis
		}
	if(Xpos > targetX){
		/*Xpos--*/
		var dis = Math.ceil((targetX - Xpos)/10)
		Xpos += dis
		}
	if(Ypos < targetY){
		/*Ypos++*/
		var dis = Math.ceil((targetY - Ypos)/10)
		Ypos += dis
		}
	if(Ypos > targetY){
		/*Ypos--*/
		var dis = Math.ceil((targetY - Ypos)/10)
		Ypos += dis
		}
	
	element.style.left = Xpos + "px"
	element.style.top = Ypos + "px"
	
	
	//객체에 원격으로 변수를 밀어 넣을수 있음
	var repeat = "myMove('"+elementID+"', "+targetX+", "+targetY+", "+interval+")"
	element.myV = setTimeout(repeat, interval)
	}
