window.onload = function(){
/*var myArray = new Array()
myArray[0] = "홍길동"
myArray[1] = "김철수"
myArray[2] = "김영희"
myArray[3] = "개똥이"


for(i in myArray){
	alert(myArray[i])
}*/


var myUl = document.getElementsByTagName("ul")
var myImage = myUl[0].getElementsByTagName("img")

for(k in myImage){
	if(k < myImage.length){alert(myImage[k].nodeName)
		}
	}
}