window.onload = function(){
 var newP = document.createElement("p");
 var pText = document.createTextNode("두번째 제목앞에 추가된글");
 newP.appendChild(pText);
 var idMyInsert = document.getElementById("myInsert")
 idMyInsert.parentNode.insertBefore(newP, idMyInsert);
}