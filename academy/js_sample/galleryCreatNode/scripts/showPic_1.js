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
		
	
	//--------------showPic.js 와 다른 부분------------------------------
	//특정요소 뒤에 요소붙이기 함수는 없음으로 insertBefore함수를 이용해서 제작
	myInsertAfter(placeholder,gallery)
	myInsertAfter(description,placeholder)
	
	}
//function myInsertAfter(새로붙일노드,누구뒤에 붙일지정하는대상){
function myInsertAfter(newElement,targetElement){
	//특정 대상들의 부모노드를 읽어옴
	var myParent = targetElement.parentNode
	
	//만약에 부모 노드의 맨 마지막 자식이면 그대로 appendChild
	if(myParent.lastChild){
		myParent.appendChild(newElement)
		}
		else{
			//타겟의 다음 형제앞에 붙인다
			newElement.insertBefore(newElement,targetElement.nextSibling)
			}
		
	}
		
	//--------------------------------------------------------------------
	
function myAlert(){
	alert(document.getElementById("imagegallery").nextSibling.nextSibling.nodeName)}
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

addLoadEvent(myAlert);







/*
body
	ul(firstChild)
	
	div
	
	p(lastChild)

특정용소 뒤에 노드 붙일땐 만냑 그요소가 부모의 맨자식이면 그냥 appendChild()

그게 아니면 특정 대상 바로 다음 형제 노드 (nextSibling)앞에 불잍다

*/