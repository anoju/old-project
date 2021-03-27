// JavaScript Document
window.onload = function(){
	var myP = document.createElement("p")
	var myDiv = document.getElementById("myappendChild")
	//순서상 마크업을 먼저 (p)
	myDiv.appendChild(myP)
	var myText = document.createTextNode("이것은 createTextNode를 이용해서 글자를 생성한것임")
	myP.appendChild(myText)
	}