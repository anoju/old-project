// JavaScript Document
function initMain2()
	{
	
	//탭제목 전환과 텝내용(보이고 가리기)
	
	var boardBox = document.getElementById("borderBox")
	var boardBoxList = boardBox.getElementsByTagName("h3") 
	
	for (var i=0 ; i<boardBoxList.length ; i++)
		{
		//클릭 이벤트 핸들러
		boardBoxList[i].onclick =function()
			{
			changeImage(this) 
			//자신의 다음 형제(ul)를 보이고 가리는 함수
			showContent(getElementNextSibling(this)) 
			}
		}
		
		//텝은 브라우저 로딩이 되자마자 하나이상이 이미 보여져 있어야하기 때문에
		showContent(getElementNextSibling(boardBoxList[0])) 
		
	}



addLoadEvent(initMain2)