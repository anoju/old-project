// JavaScript Document
window.onclick =function(){
	//문단이 myclick
	var clickId = document.getElementById("myclick")
	
	//클릭될때마다 생성
	clickId.onclick = function(){
		var mybody = document.getElementById("myBody")
		//생성순서 ul>li>텍스트 노드 생성
		var myUl = document.createElement("ul")
		var myLi1 = document.createElement("li")
		var myText1 = document.createTextNode("첫번째목록")
		
		var myLi2 = document.createElement("li")
		var myText2 = document.createTextNode("두번째목록")
		//li 자식으로 em 추가
		var myEm = document.createElement("em")
		var myEmText1 = document.createTextNode("강조추가")		
		var myEmText2 = document.createTextNode("강조뒤 문구")
		
		
		var myLi3 = document.createElement("li")
		var myText3 = document.createTextNode("세번째목록")
		
		var myLi4 = document.createElement("li")
		var myText4 = document.createTextNode("네번째목록")
		
		
		//노드 붙이기
		mybody.appendChild(myUl)
		myUl.appendChild(myLi1)
		myLi1.appendChild(myText1)
		
		myUl.appendChild(myLi2)
		myLi2.appendChild(myText2)
		//두번째목록 추가 부분
		myLi2.appendChild(myEm)
		myEm.appendChild(myEmText1)
		myLi2.appendChild(myEmText2)
		
		myUl.appendChild(myLi3)
		myLi3.appendChild(myText3)
		
		myUl.appendChild(myLi4)
		myLi4.appendChild(myText4)
		
		}
		
		
	}