// JavaScript Document

//지정된 요소의 자식들을 다 갖고와서 배열안에 담는 함수
function getChildElementNodes(parentNode)
	{
	var ChildNodes = parentNode.childNodes 
	var childArray = new Array() 
	for(var i=0 ; i< ChildNodes.length ; i++)
		{
		//자식 노드 중에 텍스트 노드와 속성 노드를 걸러내고 태그 노드만 갖고옴
		if(ChildNodes[i].nodeType == 1)
			{
			childArray.push(ChildNodes[i]) 
			}
		}
		return childArray 
	}
	
	
//이벤트 발생 시 파일명끝을 '_ov.gif'로 전환 시키는 함수
//마우스 오버 시 이미지 교체

function toggleImg(imgNode,onOff)
	{
	var imgFileName = imgNode.src 
	if(onOff == "on")
		{
		//파일 명끝에 "_ov.gif"가 없다면
		if(imgFileName.lastIndexOf("_ov.gif") < 0)
			{
			imgNode.src = imgFileName.substring(0,imgFileName.lastIndexOf(".gif"))+"_ov.gif" 
			}
		}
	else
		{
		//파일 명끝에 "_ov.gif"가 있다면
		if(imgFileName.lastIndexOf("_ov.gif") > 0)
			{
			imgNode.src = imgFileName.substring(0,imgFileName.lastIndexOf(".gif") - 3)+".gif" 
			}
		}
	}

	
//부모의 포함된 자식들을 배열로 가지는 함수를 호출 해서 그밑에 있는 자식의 이미지를 동시에 바꿈
//getChildElementNodes(parentNode) + toggleImg(imgNode,onOff)

function changeImage(targetNode)
	{
	//여기까지는 이미지를 싸고있는 부모
	var allNodes = getChildElementNodes(targetNode.parentNode) 
	 
	//그부모의 포함된 자식이미지를 교체
	for (var i=0 ; i<allNodes.length ; i++)
		{
		var img = allNodes[i].getElementsByTagName("img")[0] 
		if(img != undefined)
			{
			if(allNodes[i] == targetNode)
				{
				toggleImg(img, "on")
				}
			else
				{
				toggleImg(img, "off")
				}
			}
		}
	}


//탭을 클릭할때 하위 div를 보이고 가리는 기능, 탭이 두개일때만 사용가능

function showContent(targetNode)
	{
	var allNodes = getChildElementNodes(targetNode.parentNode) 
	
	for (var i=0 ; i<allNodes.length ; i++)
		{
		 //지정된 부모에 포함된 자식 요소 노드중에서 첫번째 ul만 가져옴
		var content = allNodes[i].getElementsByTagName("ul")[0] 
		if(content != undefined)
			{
			if(allNodes[i] == targetNode)
				{
				content.style.display = "block" 
				}
			else
				{
				content.style.display = "none" 
				}
			}
		}
	}

	
//클릭한 다음 형제 요소노드 탐색

function getElementNextSibling(node)
	{
	var nextElement = node.nextSibling
	//다음형제가 비어있지 않을때 실행
	if(nextElement == null)
		{
		return null
		}
	else if(nextElement.nodeType != 1)
		{
		return getElementNextSibling(nextElement)
		}
	return nextElement
	}
	


// 전체 함수를 다 포함한 함수
function initMain()
	{
	//주메뉴 오버
	
	var navigation = document.getElementById("navigation") 
	var mainMenuList = getChildElementNodes(navigation) 
	for (var i=0 ; i<mainMenuList.length ; i++)
		{
		var a = mainMenuList[i].getElementsByTagName("a")[0] 
		a.onmouseover = function()
			{
			changeImage(this.parentNode) 
			showContent(this.parentNode) 
			}
		a.onfocus = function()
			{
			changeImage(this.parentNode) 
			showContent(this.parentNode) 
			}
		}
	
	//탭제목 전환과 텝내용(보이고 가리기)
	/*
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
		showContent(getElementNextSibling(boardBoxList[0]))*/
		
	}



addLoadEvent(initMain)