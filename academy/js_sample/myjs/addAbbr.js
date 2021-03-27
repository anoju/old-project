// JavaScript Document
// JavaScript Document
function addAbbr(){
	//구종 불가능시 자바 스크립트 끄기
	if(!document.getElementsByTagName||!document.getElementById||!document.createTextNode)return false
		
	//문서내의 abbr 다 가져오기
	 var myAbbr = document.getElementsByTagName("abbr")
	 
	 //만약 문서내에 abbr이 하나도 없으면 기능 끄기
		 if(myAbbr.length<1)return false
		 
	//명시적으로 배열을 선언해서 오류를 피함
	var myAbbrArray = new Array()
	
	//각각의 축약어를 빈배역에 집어넣기
	for(var i=0 ; i<myAbbr.length ; i++){
		var current_abbr = myAbbr[i]
		
		//안정성 코드
		if(current_abbr.childNodes.length<1)continue
		
		//타이틀 속성값 가져오기
		var definition = current_abbr.getAttribute("title")
		
		//가져온 마지막 자식 텍스트 노드가 태그에 중복되어져 쌓여 있을때 못읽을 경우 맨 마지막 자식요소로 텍스트를 지정해서 가져옴
		var key = current_abbr.lastChild.nodeValue
		
		//배역의 주소를 숫자가 아닌 문자주소형태로 지정
		myAbbrArray[key] = definition
		}
		
	//dl 생성
	var dllist= document.createElement("dl")
		
	for(i in myAbbrArray){		
		//<dt>글자</dt>
		//정의 제목을 for in문으로 생성. 생성된 정의 제목을 순서대로 부모노드인 dt에 붙임
		var definition = myAbbrArray[i]
		var dtitle = document.createElement("dt")
		var dtitle_text = document.createTextNode(i)
		dtitle.appendChild(dtitle_text)
		
		//정의 설명 붙이기. dd텍스트와 요소 붙이기
		var ddesc = document.createElement("dd")
		var ddesc_text = document.createTextNode(definition)
		ddesc.appendChild(ddesc_text)
		
		//dl의 자식으로 붙이기
		dllist.appendChild(dtitle)
		dllist.appendChild(ddesc)
		}
		
	////////// h2 제목 생성
	//안정성 코드
	if(dllist.childNodes.length<1) return false
	
	var header = document.createElement("h2")
	var header_text = document.createTextNode("abbr에서 가져온 정의 모음입니다.")
	header.appendChild(header_text)
	document.getElementsByTagName("body")[0].appendChild(header)
	
	//위에서 만든dl 세트를 h2뒤에 붙임
	document.getElementsByTagName("body")[0].appendChild(dllist)
		
	}
	
addLoadEvent(addAbbr)
