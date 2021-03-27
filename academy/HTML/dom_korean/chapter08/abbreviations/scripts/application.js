function displaymyAbbr() {
	//안정성테스트
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// 모든 축약어를 얻어 온다
  var myAbbr = document.getElementsByTagName("abbr");
   //myAbbr에담겨진 배열의 길이?
//alert(myAbbr.length)
  //myAbbr에 노드이름?
  for(var i=0; i < myAbbr.length; i++){
	  //alert(myAbbr[i].nodeName)
	  }
  if (myAbbr.length < 1) return false;
  var myArray = new Array();
  
// 각 축약어를 반복해서 가져온다
  for (var i=0; i<myAbbr.length; i++) {
	//빈abbr노드를 변수에.. 
    var current_abbr = myAbbr[i];
	//alert(current_abbr)
	//빈abbr노드에 내용이 비어 있다면 계속진행시킨다
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute("title");
	//firstChild를 사용할 수도 있지만 다른 태그에 한번더 감싸져 있을 수 있기 때문에
	//lastChild를 사용한다
	//<태그><태그>이렇게 말이다....</태그></태그c>
    var key = current_abbr.lastChild.nodeValue;
	//alert(key)
    myArray[key] = definition;
	//alert(myArray[key])
  }
// 정의 목록을 만든다
  var dl = document.createElement("dl");
// 각 정의를 반복해서 가져온다
  for (i in myArray) {
    var definition = myArray[i];
// 정의 제목을 만든다
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(i);
    dtitle.appendChild(dtitle_text);
// 정의 설명을 만든다
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
// 이들은 정의 목록에 추가한다
    dl.appendChild(dtitle);
    dl.appendChild(ddesc);
  }
  if (dl.childNodes.length < 1) return false;
// 정의 목록의 제목을 만든다
  var header = document.createElement("h2");
  var header_text = document.createTextNode("정의 모음");
  header.appendChild(header_text);
// 제목을 문서에 추가한다
  document.getElementsByTagName("body")[0].appendChild(header);
// 정의 목록을 문서에 추가한다
  document.getElementsByTagName("body")[0].appendChild(dl);
}
addLoadEvent(displaymyAbbr);