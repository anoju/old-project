//타겟요소가 부모의 마지막자식인지 판별한다
//참이면 새요소를appendChild를 이용하여 요소를 붙인다
//거짓이면 새요소를 타겟과 부모의 다음자식사이에 추가
//이것을위해서는 insertBefore를 사용해야 한다
window.onload = function(){
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
var newP = document.createElement("p");
 var pText = document.createTextNode("두번째 제목뒤에 추가된글");
  newP.appendChild(pText);
  var idMyInsert = document.getElementById("myInsert")
insertAfter(newP,idMyInsert)
}

