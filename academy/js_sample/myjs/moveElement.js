// JavaScript Document

//주기적으로 조금씩 반복 움직임
//조건은 인수로 던져준 목적지
//조건이 되면 함수를 return 시켜서 정지
//재귀용법호출을 이용해서 setTimeout을 반복시킨다(확장된 인수는 모두 다 문자임) 

function moveElement(elementID, finalX, finalY, interval){
	
	var elem = document.getElementById(elementID)
	//좌표 계산을 위해서 left와 top값의"px" 문자제거
	var Xpos = parseInt(elem.style.left)
	var Ypos = parseInt(elem.style.top)
	
	//목적지에 도달하면 함수종료
	if(Xpos == finalX && Ypos == finalY){
		return true}
	
	//만약에 가로상의 목적이 이전이면 현재 숫자에 더함
	if(Xpos < finalX){
		Xpos++}
	if(Xpos > finalX){
		Xpos--}
	if(Ypos < finalY){
		Ypos++}
	if(Ypos > finalY){
		Ypos--}
	
	elem.style.left = Xpos +"px"
	elem.style.top = Ypos +"px"
	
	//setTimeout을 이용해서 주기를 생성함
	//setTimeout(문자형대로 된 함수를 그대로 전달,주기)
	var repeat= "moveElement('"+elementID+"', "+finalX+", "+finalY+", "+interval+")"
	setTimeout(repeat, interval)
	}