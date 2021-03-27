// JavaScript Document
function bannerMouseOver(){
		var boardBox = document.getElementById("auto_banner")
		var boardBoxList = boardBox.getElementsByTagName("h3")
		
		for(var i=1; i<(boardBoxList.length)+1; i++){
			var tab = document.getElementById("dot_0"+i)
			
			tab.onmouseover = function(){
				var menuImg = this.getElementsByTagName("img")[0]
				menuImg.src='images/imgtab_dot_ov.gif'
				document.getElementById("auto_banner0"+this.id.charAt(5)).style.display = "block";
				for(var k=1; k<(boardBoxList.length)+1; k++){
					if(document.getElementById("dot_0"+k)!=this){
						var noneTitle = document.getElementById("dot_0"+k)
						var noneImg = noneTitle.getElementsByTagName("img")[0]
						noneImg.src='images/imgtab_dot.gif'
						document.getElementById("auto_banner0"+k).style.display = "none";
					}
				}	
			}	
		}
	}
	
addLoadEvent(bannerMouseOver)