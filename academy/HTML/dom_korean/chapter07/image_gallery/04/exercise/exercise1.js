window.onload = function(){
 var newP = document.createElement("p");
 var pText = document.createTextNode("�ι�° ����տ� �߰��ȱ�");
 newP.appendChild(pText);
 var idMyInsert = document.getElementById("myInsert")
 idMyInsert.parentNode.insertBefore(newP, idMyInsert);
}