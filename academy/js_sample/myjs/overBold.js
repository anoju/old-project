// JavaScript Document
function overBold(){
	var rows = document.getElementsByTagName("tr")
	for(var i=0 ; i < rows.length ; i++ ){
		//하나이 tr당 두가지 이벤트
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold"
			}
		rows[i].onmouseout = function(){
			this.style.fontWeight = "normal"
			}
		}
	}


addLoadEvent(overBold)