// JavaScript Document
function displayAccesskeys(){
	//안정성 검사
	if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)return false
	//a요소 긁어오기
	var links =document.getElementsByTagName("a")
	//a요소 없으면 기능끄기
	/*if(links.length<1)return false*/

	//배열을 만든다
	var akeys = new Array()
	
	//저장할 링크 반복
	for(var i=0;i < links.length;i++){
		var current_link = links[i]
		//accesskey값이 없으면 계속 반복
		if(current_link.getAttribute("accesskey")==null)continue
		//accesskey값을 가져옴
		var key = current_link.getAttribute("accesskey")
		//링크 텍스트 값을 가져옴
		var text =current_link.lastChild.nodeValue
		
		//두값을 배역에 저장
		akeys[key]=text		
		}
		
	//목록 만들기
	var list = document.createElement("ul")
	//저장한 접근키 반복
	for(key in akeys){		
		var text = akeys[key]
		//li 문자열 만들기
		var str = key + ":" + text
		//li생성
		var item = document.createElement("li")
		var item_text = document.createTextNode(str)
		item.appendChild(item_text)
		//ul에 li 저장
		list.appendChild(item)
		}
	
	//제목만들기
	var myTitle = document.createElement("h3")
	var myTitle_text = document.createTextNode("Accesskeys")
	myTitle.appendChild(myTitle_text)
	
	//만든 제목 추가하기
	document.body.appendChild(myTitle)
	//만든 목록을 추가하기
	document.body.appendChild(list)
	}
	
addLoadEvent(displayAccesskeys)