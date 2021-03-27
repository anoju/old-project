// JavaScript Document
// 온로드 이벤트 발생시 이미 함수가 로드가 되어 있으면 순서대로 함수 실행
// 아니면 바로 실행
function addLoadEvent(func){
	var oldonload = window.onload
	if(typeof window.onload != "function"){
		window.onload = func
		}
		else{
			window.onload = function(){
				oldonload()
				func()
				}
			}
	}