window.onload = function() {
	var clickId = document.getElementById("myclick")
	clickId.onclick = function(){
   var myBody = document.getElementById("myBody");
   var myUl = document.createElement("ul");
   var myli1 = document.createElement("li");
   var myliTextNode1 = document.createTextNode("ù���� ���");
   var myli2 = document.createElement("li");
   var myliTextNode2 = document.createTextNode("�ι��� ���");
   var myEm = document.createElement("em");
   var myEmTextNode1 = document.createTextNode("�����߰�");
   var myliTextNode21 = document.createTextNode("�������� �ؽ�Ʈ");
   var myli3 = document.createElement("li");
   var myliTextNode3 = document.createTextNode("������ ���");
   myBody.appendChild(myUl);
   myUl.appendChild(myli1);
   myli1.appendChild(myliTextNode1);
   myUl.appendChild(myli1);
   myli1.appendChild(myliTextNode1);
   myUl.appendChild(myli2);
   myli2.appendChild(myliTextNode2);
   myEm.appendChild(myEmTextNode1);
   myli2.appendChild(myEm);
   myli2.appendChild(myliTextNode21);
   myUl.appendChild(myli3);
   myli3.appendChild(myliTextNode3);
}
}