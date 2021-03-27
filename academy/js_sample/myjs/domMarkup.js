// JavaScript Document
//돔메소드를 이용한 마크업 생성
//createElement("태그명")
window.onload = function(){
	var myP = document.createElement("p")
	var myInfo = "요소의 이름은? : "
	myInfo += myP.nodeName
	myInfo += " 노드타입은? : "
	myInfo += myP.nodeType
	alert(myInfo)	
	}