/*외부로분리된코드
//페이지가 로드될때
window.onload = prepareLinks
function prepareLinks(){
	//문서 내 모든 링크의 배열을 만든다
	var links = document.getElementsByTagName("a");
	//배열을 반복해 각 링크들을 검사한다
	for (var i=0; i<links.length; i++) {
	//링크가 popup아리는 클래스를 가지고 있으면 링크의 클릭여부를 검사한다
    if (links[i].getAttribute("class") == "popup") {
	//클릭되면 링크의 href속성값을 popup함수로 처리한다
      links[i].onclick = function() {
      popUp(this.getAttribute("href"));
	//링크가 원래 창에서 작동하지 않도록 기본동작은 처리하지 않는다
      return false;
      }
    }
  }
}
function popUp(winURL) {
  window.open(winURL,"popup","width=320,height=480");
}*/

//하위호환성체크
//콜백함수형태로 선언
window.onload = function() {
//getElementsByTagName을 지원하지 않는다면 이벤트동작정지
  if (!document.getElementsByTagName) return false;
  var links = document.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    if (links[i].getAttribute("id") == "popup") {
      links[i].onclick = function() {
        popUp(this.getAttribute("href"));
        return false;
      }
    }
  }
}

function popUp(winURL) {
  window.open(winURL,"popup","width=320,height=480, scrollbars=no'");
}