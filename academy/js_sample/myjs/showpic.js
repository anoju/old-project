	
	//특정요소가 가지고있는 자식요소로 골라서 접근하기
	//chilNodes[배열상 가지고 있는 주소번호]
	//연습함수
	function countBodyChildren (){
		//body태그의 객체를 얻고 첫번째 배열요소를 가져옴
		var bodyElement = document.getElementsByTagName("body")[0];
		alert(bodyElement.childNodes.length);
		alert(bodyElement.nodeType);
	}
	
	//위에 코드가 문서가 로드되자마자 처리되도록 onload 이벤트를 사용
	window.onload = countBodyChildren
	


	


	//본문에 a요소를 클릭할때 href의 속성을 가져와서 
	//교체그림의 src속성으로 대입
	function showPicture(selfClick){
		//속성가져오기 함수를 이용해서 배열에 담음
		var getHref = selfClick.getAttribute("href")
		//교체대상 원본 이미지의 아이디를 가져온다.
		var myPlaceholder = document.getElementById("placeholder")
		//소스변경
		myPlaceholder.setAttribute("src",getHref)

		//a요소가 가지고 있는 tutle 속성을 얻어와서 화면표시
		var myText = selfClick.getAttribute("title")
		var myDescription = document.getElementById("description")
		//텍스트노드는 해당요소의 첫번째 자식임으로 그것을 기술하는 명칭을 넣어줌 firstChild
		//alert(myDescription.firstChild.nodeValue)

		//p요소안의 텍스트를 가져온 title의 텍스트로 교체
		myDescription.firstChild.nodeValue = myText
	}