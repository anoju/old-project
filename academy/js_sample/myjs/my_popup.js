//열릴주소를 매게변수로 가지는 함수 
function myPopUp(myURL){
	window.open(myURL,"newPopUp","width = 320,height = 480")
	}

//페이지가 로드될때 class이름 classPopUp를 문서 내에서 뽑아낸다
//window.onload --> html 파일이 안전히 로드가 다되었을때
window.onload = function(){
	//만약에 getElementByTagName을 지원하지 않는 브라우져면 함수 기능 정지
	if(!document.getElementsByClassName)	return false;
	
	//마그업내의 a요소를 다 가져와서 배열에 넣음
	var myLink = document.getElementsByTagName("a")

	//myLink = [a,a,a,a class = classPopUp]
	//반복문을 통해서 타겟을 선정
	for(var i = 0 ; i < myLink.length ;i++){

		if(myLink[i].getAttribute("class") == "classPopUp"){
				//이벤트가 일어나는 대상. 이벤트 종류 = function(){}
			myLink[i].onclick = function(){
				alert("클릭")
				myPopUp(this.getAttribute('href'))
				return false
			}
		}
	}

}


