// JavaScript Document

//라벨 요소를 다 가지고옴 해당 엘리먼트 focus()함수 호출

//라벨로 묶은 인풋요소의 안내 문구가 블록이 안잡히도록 처리
function focusLabels(){
	var labels = document.getElementsByTagName("label")
	for (var i=0 ;i <labels.length;i++){
		//label의 for속성 존재 여부에 따라 그 아래 코드를 실행함.안정성 코드
		if(!labels[i].getAttribute("for")) continue 
		
		labels[i].onclick = function(){
			var id = this.getAttribute("for")
			//for 속성값과 아이디 속성값이 같을때 진행
			if(!document.getElementById(id))return false
			var element = document.getElementById(id)
			element.focus()
			}
		}
	}
	
//안내가이드 글 가리기
//인풋 박스 클릭시 글자 제거
function resetFields(myForm){
	for(var i=0 ;i <myForm.elements.length;i++){
		var element = myForm.elements[i]
		
		//인풋 타입 속성이 submit이면 계속 실행
		if(element.type == "submit") continue
		if(!element.defaultValue == "submit") continue
		
		//안내문구있으면 공백으로
		element.onfocus =function(){
			if(this.value == this.defaultValue){
			this.value=""
				}
			}
			
		//공백이 있으면 안내문구
		element.onblur=function(){
			if(this.value == ""){
			this.value= this.defaultValue
				}
			}
		}
	}
	

function validateForm(myForms){
	//여러가지 폼태그내의 양식 검증을 위해서 매게 변수로 처리
	for(var i=0 ;i <myForms.elements.length;i++){
		//인수로 전달되는 폼내의 각각의 폼관련 태그(label, input등등)
		var elem = myForms.elements[i]
		
		//클래스 이름에 required 가 포함된 인풋박스만 검증
		if(elem.className.indexOf("required") !=-1){
			if(!isFill(elem)){
				alert(elem.title + "을 채워주세요")
				
				//동작을 완료했음으로 나머지는 구동시키지 않는다
				return false
				}
			}
			
		//클래스 이름에 email 가 포함된 인풋박스만 검증
		if(elem.className.indexOf("email") !=-1){
			if(!isEmail(elem)){
				alert(elem.title + " 양식이 잘못되었습니다.")
				
				//동작을 완료했음으로 나머지는 구동시키지 않는다
				return false
				}
			}
		}
		
	//양식이 완전하면 원래 구문 실행
	return true
	}

//이메일 양식 체크
function isEmail(myField){
	if(myField.value.indexOf("@") == -1 || myField.value.indexOf(".") == -1){
		return false
		}else{
			return true
			}
	}
	
//채워줄 양식이 공란으로 비었을떼
function isFill(myField){
	if(myField.value.length < 1 || myField.value == myField.defaultValue){
		return false
		}else{
			return true
			}
	}

function prepareForms(){
	//가이드 처리 함수를 모든 폼에 대응되게
	for(var i=0 ;i <document.forms.length;i++){
		var thisform =document.forms[i]
		resetFields(thisform)
		
		thisform.onsubmit = function(){
			return validateForm(this)
			}
		
		
		}
	}




addLoadEvent(focusLabels)
addLoadEvent(prepareForms)