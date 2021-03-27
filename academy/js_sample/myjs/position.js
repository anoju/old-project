// JavaScript Document

//초기값과 미리 선언된 움직임 함수를 호출{아이디명, 가로상의목적지, 세로상의목적지, 주기}
function myPosition(){
	var elem = document.getElementById("messege1")
	elem.style.position = "absolute"
	elem.style.left = "50px"
	elem.style.top = "100px"
	moveElement("messege1", 250, 100, 20)
	
	var elem = document.getElementById("messege2")
	elem.style.position = "absolute"
	elem.style.left = "50px"
	elem.style.top = "200px"
	moveElement("messege2", 250, 0, 20)
	}
	
addLoadEvent(myPosition)