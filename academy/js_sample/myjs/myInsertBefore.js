// JavaScript Document

function myInsert(){
	
	//자바스크립트 안전코드
	if(!document.createElement) return false 
	if(!document.createTextNode) return false 
	
	var myP = document.createElement("P")
	myP.setAttribute("title","p요소의 title속성")
	var myText = document.createTextNode("삽입된 문단")
	myP.appendChild(myText)
	
	var table = document.getElementsByTagName("table")
	table[0].parentNode.insertBefore(myP,table[0])	
	}	
	
window.onload = myInsert
	