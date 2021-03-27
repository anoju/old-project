// JavaScript Document
function myMoveBanner(elementID, interval){
	var element =document.getElementById(elementID)
	
	var Xpos = parseInt(element.style.left)

	
	//배너 종료되어도 연속 롤링을 위해 위치이동
	if(Xpos <= -840){
		Xpos += 840
		}
	Xpos--
	element.style.left = Xpos + "px"

	
	
	//객체에 원격으로 변수를 밀어 넣을수 있음
	var repeat = "myMoveBanner('"+elementID+"', "+interval+")"
	element.myV = setTimeout(repeat, interval)
	}





function mySlideBanner(){
	var slideBanner = document.getElementById("slide_banner")
	
	//원래 위치 초기값
	slideBanner.style.position = "absolute"
	slideBanner.style.left = "0px"
	slideBanner.style.top = "0px"
	
		myMoveBanner("slide_banner", 20)
		
	slideBanner.onmouseover = function(){
		clearTimeout(this.myV)
		}
	slideBanner.onmouseout = function(){
		myMoveBanner("slide_banner", 20)
		}
	
	}
	
addLoadEvent(mySlideBanner)