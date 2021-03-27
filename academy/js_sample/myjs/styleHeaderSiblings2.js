// JavaScript Document// JavaScript Document
function styleHeaderSiblings(){
	if(!document.getElementsByTagName) return false
	var headers = document.getElementsByTagName("h1")
	for(var i = 0; i<headers.length; i++){
	
	//h1의 다음형제 첫번재 p요소만 가져오는 함수(내장함수아님)
	var elem = getNextElement(headers[i].nextSibling)
	
	
	//내장 메소드가 아님 요소를 찾아서 clss속성을 찾아주는 함수
	addClass(elem, "intro")
	}
	
	}
//setAttribute를 이용하지 않고 className을 할당 className = intro
function addClass(element, value){
	//만약에 Class속성이 존재하지 않으면 바로 class붙이고
	if(!element.className){
		element.className = value
		}else{
			//만약에 있으면 빈문자열로 뺀다음 속성부여
			element.className += " "
			element.className += value
			
			}
	
	
	}

//다음형제 노드가 텍스트 노드(3)일수 있다 일반요소노드면 (1)이면 바로 실행하고 아니면 자신의 함수를 재귀함수 호출해서 사용
function getNextElement(node){
	if(node.nodeType == 1){
	return node	
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling)
		}
		return null
		}


addLoadEvent(styleHeaderSiblings)