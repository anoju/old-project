function displayAbbreviations() {
	//안정성테스트
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// 모든 축약어를 얻어 온다
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();
// 각 축약어를 반복해서 가져온다
  for (var i=0; i<abbreviations.length; i++) {
    var current_abbr = abbreviations[i];
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.lastChild.nodeValue;
	//defs[key] = definition;
	
  }
// 정의 목록을 만든다
  var dlist = document.createElement("dl");
// 각 정의를 반복해서 가져온다
  for (key in defs) {
    var definition = defs[key];
// 정의 제목을 만든다
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
// 정의 설명을 만든다
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
// 이들은 정의 목록에 추가한다
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if (dlist.childNodes.length < 1) return false;
// 정의 목록의 제목을 만든다
  var header = document.createElement("h2");
  var header_text = document.createTextNode("정의 모음");
  header.appendChild(header_text);
// 제목을 문서에 추가한다
  document.getElementsByTagName("body")[0].appendChild(header);
// 정의 목록을 문서에 추가한다
  document.getElementsByTagName("body")[0].appendChild(dlist);
}
addLoadEvent(displayAbbreviations);