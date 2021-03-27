window.onload = function() {
	var clickId = document.getElementById("myclick")
	clickId.onclick = function(){
   var myBody = document.getElementById("myBody");
   var myUl = document.createElement("ul");
   var myli1 = document.createElement("li");
   var myliTextNode1 = document.createTextNode("첫번재 목록");
   var myli2 = document.createElement("li");
   var myliTextNode2 = document.createTextNode("두번재 목록");
   var myEm = document.createElement("em");
   var myEmTextNode1 = document.createTextNode("강조추가");
   var myliTextNode21 = document.createTextNode("강조뒤의 텍스트");
   var myli3 = document.createElement("li");
   var myliTextNode3 = document.createTextNode("세번재 목록");
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