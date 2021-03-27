function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
	}
    /*links[i].onkeypress = links[i].onclick;*/
  }
}




//--------------------추가 수정 내용-----------------------------


//img요소와 p요소 생성 후 속성까지 부여하는 함수
function preparePlaceholder(){
	
	//자바스크립트 안전코드
	if(!document.createElement) return false 
	if(!document.createTextNode) return false 
	
	//이미지를 바꿔줄 원본 태그
	var placeholder = document.createElement("img")
	placeholder.setAttribute("id","placeholder")
	placeholder.setAttribute("src","images/placeholder.gif")
	placeholder.setAttribute("alt","나의 사진 갤러리")
	
	//문단 삽입후 속성추가
	var description = document.createElement("p")
	description.setAttribute("id","description")
	var desctext = document.createTextNode("사진을 선택하세요")
	description.appendChild(desctext)
	
	//appendChild 메소드 대신 사용
	//두개의 노드를 포함한 부모노드.insertBefore(새로 붙혀줄노드,타켓(누구앞에 붙여줄것인가)노드)
	//붙일 타켓대상 아이디를 가져옴
	var gallery = document.getElementById("imagegallery")
	//ul.ul의 부모노드.insertBefore(붙일대상img요소,ul 앞에 붙임)
	gallery.parentNode.insertBefore(placeholder,gallery)
	gallery.parentNode.insertBefore(description,gallery)
	
	}
	
	
//---------------------------------------------------------------
	
	

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(prepareGallery);
//추가수정 이벤트 로드
addLoadEvent(preparePlaceholder);