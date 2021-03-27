// JavaScript Document
//html 문서상에서 제거된 인라인 이벤트 처리

//그림 바꾸기 글자 바꾸기
function showPic(myHref){
	//그림바꾸기	
	//원래있던 a클릭 기능을 살려줌
	if(!document.getElementById("placeholder")) return true
	
	var source = myHref.getAttribute("href")
	var placeholder = document.getElementById("placeholder")
	placeholder.setAttribute("src", source)
	
	
	//글자 바꾸기
	//원래있던 a클릭 기능을 꺼버림
	if(!document.getElementById("description")) return false
	//만약 a요소에 title이 있으면
	if(myHref.getAttribute("title")){
		var text = myHref.getAttribute("title")
		}
		//없으면 빈문자열 표시
		else{
			var text = ""
			}
			
	var description = document.getElementById("description")
	if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text
		}
	
	}


	

//클릭기능만 포함시킴
function aLinkTotal(){
	//구식 브라우저 자바스크립트 실행여부 판단 조건문		
	if(!document.getElementById) return false	
	if(!document.getElementsByTagName) return false
	
	//ul안에 링크 가져오기
	var gallery = document.getElementById("imagegallery")
	var links = gallery.getElementsByTagName("a")
	for(var i=0 ; i<links.length ; i++){
		links[i].onclick = function(){
			showPic(this)
			//원래 a의 기본클릭 끄기
			return false
			}
		}
	}
	


//window.onload는 한번만 사용 가능하기 때문에 첫 함수가 로드된 후 다른 함수들을 실행하도록 코드 변경
function addLoadEvent(nextFunc){
	//이전에 로드된 이벤트를 변수에 저장
	var oldonload = window.onload
	
	//전달되는 인수가 함수인지 타입을 확인
	//이미 window.onload 함수가 로드되어 있지 않으면 바로실행
	if(typeof window.onload != 'function'){
		window.onload = nextFunc
		}
		//window.onload에 포함된 것이 함수로 판명나면 뒤로 순서대로 붙인다.
		else{
			window.onload = function(){
				oldonload()
				next()
				}
			}
	}
	
//순차적 함수 실행 호출
addLoadEvent(aLinkTotal)












