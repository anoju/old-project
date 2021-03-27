// JavaScript Document
window.onload = function(){
	var myH1 = document.createElement("h1")
	var myBody = document.getElementById("body")
	//순서상 마크업을 먼저 (p)
	myBody.appendChild(myH1)
	var myText = document.createTextNode("이것은 제목입니다.")
	myH1.appendChild(myText)
	}