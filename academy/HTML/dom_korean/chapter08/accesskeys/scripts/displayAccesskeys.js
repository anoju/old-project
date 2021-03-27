function displayAccesskeys() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// 문서 내 모든 링크를 찾는다
  var links = document.getElementsByTagName("a");
// 접근키를 저장할 배열을 만든다
  var akeys = new Array();
// 저장한 링크를 반복한다
  for (var i=0; i<links.length; i++) {
    var current_link = links[i];
// accesskey속성 값이 없으면 반복을 계속한다
    if (current_link.getAttribute("accesskey") == null) continue;
// accesskey 값을 가져온다
    var key = current_link.getAttribute("accesskey");
// 링크 텍스트 값을 가져온다
    var text = current_link.lastChild.nodeValue;
// 두 값을 배열에 저장한다

    akeys[key] = text;
	alert(akeys[key])
  }
// 목록을 만든다
  var list = document.createElement("ul");
// 저장한 접근키들을 반복한다
  for (i in akeys) {
    var text = akeys[i];
//  목록 항목에 넣을 문자열을 만든다
    var str = i + " : "+text;
// 목록 항목을 생성한다
    var item = document.createElement("li");
    var item_text = document.createTextNode(str);
    item.appendChild(item_text);
// 목록에 목록항목을 추가한다
    list.appendChild(item);
  }
// 제목을 만든다
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Accesskeys");
  header.appendChild(header_text);
// 제목을 문서에 추가한다
  document.body.appendChild(header);
// 목록을 문서에 추가한다
  document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);