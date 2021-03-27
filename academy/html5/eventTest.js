/**
 * @author hanguk
 */
window.onload= init


//모든기능이 포함된 함수
function init(){
	//버튼 id를 가져옴
	var button = document.getElementById("addButton")
	button.onclick = handleButtonClick
}


//버튼을 누를때 실행되는 내용
function handleButtonClick(e){
	//입력박스의 id를 가져옴
	var textInput = document.getElementById("songTextInput")
	//박스에 입력된 value 가져오기
	var songName = textInput.value
	
	//공란으로 입력시 조건문으로 제외시키고 문자가 입력되었을때는 li를 생성하고 생성된 li에 innerHTML을 이용해서 화면에 글포시
	if(songName==""){
		alert("내용을 입력하세요")
	}else{
		var li = document.createElement("li")
		li.innerHTML = songName
		var playList = document.getElementById("playList")
		playList.appendChild(li)
	}
}
