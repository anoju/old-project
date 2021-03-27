// JavaScript Document
// 목록중에 짝수번째 항목에 스타일 지정
// 문서내의 테이블 요소 가져오기
// 반복문 실행
// 참과 거짓을 순환시키는 코드 실행

function rowColorTable(){
	var table = document.getElementsByTagName("table")
	for(var i=0 ; i < table.length ; i++ ){
		var odd = false
		var rows = table[i].getElementsByTagName("tr")
		
		//번갈아서 행변경
		for(var j=0 ; j < rows.length ; j++ ){
			if(odd == true){
				rows[j].style.backgroundColor = "orange"
				
				//odd 값을 번갈아서 실행하도록 하기위해서
				odd= false
				}else{
					odd= true
					}
			}
		}	
	}
	

addLoadEvent(rowColorTable)