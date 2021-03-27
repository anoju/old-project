function displayCitations() {
	//안정성검사
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// 모든 blockquotes 요소를 가져온다
  var quotes = document.getElementsByTagName("blockquote");
// 반복문을 통해 데이터를 추출한다
  for (var i=0; i<quotes.length; i++) {
// cite 속성이 없으면 반복문을 다시 한다
    if (!quotes[i].hasAttribute("cite")) continue;
// cite 속성을 저장한다
    var url = quotes[i].getAttribute("cite");
// blockquote 내 모든 요소 노드를 가져온다
    var quoteChildren = quotes[i].getElementsByTagName('*');
// 만약 요소 노드가 없으면 반복문을 다시 한다
    if (quoteChildren.length < 1) continue;
// blockquote 내 제일 마지막 요소 노드를 가져온다 
    var elem = quoteChildren[quoteChildren.length - 1];
// 마크업을 만든다
    var link = document.createElement("a");
    var link_text = document.createTextNode("출처보기");
    link.appendChild(link_text);
    link.setAttribute("href",url);
    var superscript = document.createElement("sup");
    superscript.appendChild(link);
// 마크업을 blockquote의 마지막 요소 노드 뒤에 추가한다.
    elem.appendChild(superscript);
  }
}
addLoadEvent(displayCitations);