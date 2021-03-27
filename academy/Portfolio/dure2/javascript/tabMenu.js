// JavaScript Document
function tapMenu(){
		var boardBox = document.getElementById("gongtab")
		var boardBoxList = boardBox.getElementsByTagName("h3")
		
		for(var i=1; i<(boardBoxList.length)+1; i++){
			var tab = document.getElementById("g_tit0"+i)
			
			tab.onmousedown = function(){
				var menuImg = this.getElementsByTagName("img")[0]
				menuImg.src='images/g_tabboard0'+ this.id.charAt(6)+'_ov.gif'
				document.getElementById("g_tap0"+this.id.charAt(6)).style.display = "block";
				for(var k=1; k<(boardBoxList.length)+1; k++){
					if(document.getElementById("g_tit0"+k)!=this){
						var noneTitle = document.getElementById("g_tit0"+k)
						var noneImg = noneTitle.getElementsByTagName("img")[0]
						noneImg.src='images/g_tabboard0'+ document.getElementById("g_tit0"+k).id.charAt(6)+'.gif'
						document.getElementById("g_tap0"+k).style.display = "none";
					}
				}	
			}	
		}
	}
	
addLoadEvent(tapMenu)





function tapMenu2(){
		var boardBox = document.getElementById("srctab")
		var boardBoxList = boardBox.getElementsByTagName("h3")
		
		for(var i=1; i<(boardBoxList.length)+1; i++){
			var tab = document.getElementById("s_tit0"+i)
			
			tab.onmousedown = function(){
				var menuImg = this.getElementsByTagName("img")[0]
				menuImg.src='images/s_tabboard0'+ this.id.charAt(6)+'_ov.gif'
				document.getElementById("s_tap0"+this.id.charAt(6)).style.display = "block";
				for(var k=1; k<(boardBoxList.length)+1; k++){
					if(document.getElementById("s_tit0"+k)!=this){
						var noneTitle = document.getElementById("s_tit0"+k)
						var noneImg = noneTitle.getElementsByTagName("img")[0]
						noneImg.src='images/s_tabboard0'+ document.getElementById("s_tit0"+k).id.charAt(6)+'.gif'
						document.getElementById("s_tap0"+k).style.display = "none";
					}
				}	
			}	
		}
	}
	
addLoadEvent(tapMenu2)






function tapMenu3(){
		var boardBox = document.getElementById("shoppingtab")
		var boardBoxList = boardBox.getElementsByTagName("h3")
		
		for(var i=1; i<(boardBoxList.length)+1; i++){
			var tab = document.getElementById("sh_tit0"+i)
			
			tab.onmouseover = function(){
				var menuImg = this.getElementsByTagName("img")[0]
				menuImg.src='images/shoptit_0'+ this.id.charAt(7)+'_ov.gif'
				document.getElementById("sh_tap0"+this.id.charAt(7)).style.display = "block";
				for(var k=1; k<(boardBoxList.length)+1; k++){
					if(document.getElementById("sh_tit0"+k)!=this){
						var noneTitle = document.getElementById("sh_tit0"+k)
						var noneImg = noneTitle.getElementsByTagName("img")[0]
						noneImg.src='images/shoptit_0'+ document.getElementById("sh_tit0"+k).id.charAt(7)+'.gif'
						document.getElementById("sh_tap0"+k).style.display = "none";
					}
				}	
			}	
		}
	}
	
addLoadEvent(tapMenu3)