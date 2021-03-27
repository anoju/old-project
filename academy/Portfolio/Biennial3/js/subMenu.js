// JavaScript Document
function mySubMenu()
	{
	for(var i=1 ; i<4 ; i++)
		{
		var gnb = document.getElementById("gnb" + i)
		
		gnb.onmouseover = function()
			{
			document.getElementById("sub_menu0" + this.id.charAt(3)).style.display ="block"
			
			//내가 클릭한 부분만 빼고 나머지를 원상태로
			for(var k=1 ; k<4 ; k++)
				{
				if(document.getElementById("gnb" + k) != this)
					{
					document.getElementById("sub_menu0" + k).style.display ="none"
					}
				}
			}
			
		//gnb에서 마우스 아웃하고 서브에서 마우스 오버시 서브메뉴 유지
		
		
		var subMenu = document.getElementById("sub_menu0" + i)
		
		subMenu.onmouseover = function()
			{
			document.getElementById("sub_menu0" + this.id.charAt(9)).style.display ="block"
			}
			
		//gnb에서 마우스 아웃시 모든 서브 메뉴 가림
		gnb.onmouseout = function()
			{
			for(var k=1 ; k<4 ; k++)
				{
				document.getElementById("sub_menu0" + k).style.display ="none"
				}
			}
		subMenu.onmouseout = function()
			{
			for(var k=1 ; k<4 ; k++)
				{
				document.getElementById("sub_menu0" + k).style.display ="none"
				}
			}
		}
	}
	
addLoadEvent(mySubMenu)