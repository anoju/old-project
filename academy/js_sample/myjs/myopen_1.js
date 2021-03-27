// JavaScript Document
//html 문서와 외부 css문서가 완전히 다 로드가 되면
//실행 window.onload 이벤트

//window.onload 이벤트 처리하는 두가지 패턴
//익명(이름이 없는)함수로 처리할때
//window.onload = function(){.......}

//일반 (이름이 있는)함수로 처리할때
//함수 이름만 넣고 소괄호를 받드시 제외함 
//window.onload = 일반함수 
//function 일반함수(){.......}

window.onload = function(){
	//getElementsByTagName 유효성검증처리
	if(!document.getElementsByTagName){
		return false
		}
	
	//문서내에서 a요소를 다 가져옴
	var link = document.getElementsByTagName("a")
	
	
	//배열에 포함된 배열에 포함된 a 요소중의 class 속성이름이 pop640일때와 pop800일때를 if문으로 구분해서 처리
	for(var i = 0; i<link.length; i++){
		//이벤트 핸들러안의 this는 대상.핸들러 앞의 대상이다.
		if(link[i].getAttribute("class") == "pop640"){
			link[i].onclick = function(){
				popUp(this.getAttribute("href"),"myPop1", 640, 480)
				//기본 a요소의 클릭이벤트 제거
				return false
				}
			}			
		else if(link[i].getAttribute("class") == "pop800"){
			link[i].onclick = function(){
				popUp(this.getAttribute("href"),"myPop2", 800, 600)
				//기본 a요소의 클릭이벤트 제거
				return false
				}
			}
		}
	}
	
//여러 함수를 줄여서 표현
//열릴페이지 주소, 열릴 원도우 이름, 너비, 높이를 인수로 가지는 함수로 변형)
function popUp(myURL, myWindowName,mW, mH){
	
	//"width=" + 640 + ",height=" + 480
	// --> "width=640,height=480"
	window.open(myURL, myWindowName,"width=" + mW +",height=" + mH)
	}
