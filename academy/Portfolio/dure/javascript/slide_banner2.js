// JavaScript Document

//clearID
var myV 


function myMoveBanner(elementID, interval){
	var element =document.getElementById(elementID)
	
	var Xpos = parseInt(element.style.left)

	
	//배너 종료되어도 연속 롤링을 위해 위치이동
	if(Xpos <= -660){
		Xpos += 660
		}
	Xpos--
	element.style.left = Xpos + "px"

	
	
	//객체에 원격으로 변수를 밀어 넣을수 있음
	var repeat = "myMoveBanner('"+elementID+"', "+interval+")"
	myV = setTimeout(repeat, interval)
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
//----------------------------------------------------------//



// left 버튼 동작-----------------------------------------------//
function myMoveBanner2(elementID, interval){
	var element =document.getElementById(elementID)
	
	var Xpos = parseInt(element.style.left)

	
	//배너 종료되어도 연속 롤링을 위해 위치이동
	if(Xpos <= -660){
		Xpos += 660
		}
	Xpos--
	element.style.left = Xpos + "px"

	
	
	//객체에 원격으로 변수를 밀어 넣을수 있음
	var repeat = "myMoveBanner2('"+elementID+"', "+interval+")"
	myV = setTimeout(repeat, interval)
	}

/*
function mySlideBanner2(){
	var slideBanner = document.getElementById("slide_banner")
	
		myMoveBanner2("slide_banner", 20)
		
	slideBanner.onmouseover = function(){
		clearTimeout(this.myV)
		}
	slideBanner.onmouseout = function(){
		myMoveBanner2("slide_banner", 20)
		}
	
	}*/
//----------------------------------------------------------//
	
	
	
	



// right 버튼 동작----------------------------------------------------------//
function myMoveBanner3(elementID, interval){
	var element =document.getElementById(elementID)
	
	var Xpos = parseInt(element.style.left)

	
	//배너 종료되어도 연속 롤링을 위해 위치이동
	if(Xpos >= 0){
		Xpos -= 660
		}
	Xpos++
	element.style.left = Xpos + "px"

	
	
	//객체에 원격으로 변수를 밀어 넣을수 있음
	var repeat = "myMoveBanner3('"+elementID+"', "+interval+")"
	myV = setTimeout(repeat, interval)
	}

/*
function mySlideBanner3(){
	var slideBanner = document.getElementById("slide_banner")
	
		myMoveBanner3("slide_banner", 20)
		
	slideBanner.onmouseover = function(){
		clearTimeout(this.myV)
		}
	slideBanner.onmouseout = function(){
		myMoveBanner3("slide_banner", 20)
		}
	
	}*/
//----------------------------------------------------------//
	
	
	
	
	
function mySlideButton(){
	var left = document.getElementById("r_left")
	left.onmouseover = function() {
		//mySlideBanner2()
		var slideBanner = document.getElementById("slide_banner")
	
		myMoveBanner2("slide_banner", 20)
		
		slideBanner.onmouseover = function(){
			clearTimeout(this.myV)
			}
		slideBanner.onmouseout = function(){
			myMoveBanner2("slide_banner", 20)
			}
		}
	
	var right = document.getElementById("r_right")
	right.onmouseover = function() {
		
		 //mySlideBanner3()
		 var slideBanner = document.getElementById("slide_banner")
	
		myMoveBanner3("slide_banner", 20)
		
		slideBanner.onmouseover = function(){
			clearTimeout(this.myV)
			}
		slideBanner.onmouseout = function(){
			myMoveBanner3("slide_banner", 20)
			}
		}
	}
	
addLoadEvent(mySlideButton)