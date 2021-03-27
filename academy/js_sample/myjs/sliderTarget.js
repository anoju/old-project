// JavaScript Document
function mySlideTarget(){
	var preview = document.getElementById("preview")
	
	//원래 위치 초기값
	preview.style.position = "absolute"
	preview.style.left = "0px"
	preview.style.top = "0px"
	
	//ol안에 a를 다 가져옴 이벤트 붙이기 위해서
	var linklist = document.getElementById("linklist")
	var myA = linklist.getElementsByTagName("a")
	
	//목적지가 다르므로 for문을 쓸 수 없음
	myA[0].onmouseover = function(){
		myMove("preview", -100, 0, 10)
		}
	myA[1].onmouseover = function(){
		myMove("preview", -200, 0, 10)
		}
	myA[2].onmouseover = function(){
		myMove("preview", -300, 0, 10)
		}
	
	//마우스 아웃 시 원래대로 복귀
	for(var i=0 ; i<myA.length ; i++){
		myA[i].onmouseout = function(){
			myMove("preview", 0, 0, 10)
			}
		}
	}
	
addLoadEvent(mySlideTarget)