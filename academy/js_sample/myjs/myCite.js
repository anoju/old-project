// JavaScript Document

function myCite(){
	var quotes = document.getElementsByTagName("blockquote")
	for(var i=0; i<quotes.length; i++){
		var url = quotes[i].getAttribute("cite")
		
		//인요문안에 요소를 다가져오기. 가져온 여러가지 요소의 맨끝에서 링크 생성
		var quotesChildren = quotes[i].getElementsByTagName("*")
		
		//마지막요소를 지정함
		var elem = quotesChildren[quotesChildren.length-1]
		
		/////////a요소 생성
		var myLink = document.createElement("a")
		var myLink_text = document.createTextNode("출처보기")
		myLink.appendChild(myLink_text)
		
		//href 값 생성
		myLink.setAttribute("href",url)
		
		//sup요소를 생성해서 붙임
		var mySup = document.createElement("sup")
		mySup.appendChild(myLink)
		
		//생성된 sup를 인용문의 맨마지막에 붙임
		elem.appendChild(mySup)
		
		}	
	}




addLoadEvent(myCite)