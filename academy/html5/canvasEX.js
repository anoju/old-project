/* canvasEX */

window.onload = function(){
	var button = document.getElementById("previewButton")
	button.onclick=previewHandler
	
	//이스터에그 호출
	makeImage()
}

function previewHandler(){
	var canvas = document.getElementById("tshirtCanvas")
	var context = canvas.getContext("2d")
	
	fillBackgroundColor(canvas,context)
	
	var selectObj = document.getElementById("shape")
	var index = selectObj.selectedIndex
	var shape = selectObj[index].value
	
	if(shape == "squares"){
		for (var squares = 0 ; squares<20 ; squares++){
			drawSquare(canvas,context)
		}
	}
	else if(shape == "circles"){
		for (var circles = 0 ; circles<20 ; circles++){
			drawCircle(canvas,context)
		}
	}
	drawText(canvas, context)
	drawBird(canvas, context)
}

//배경색을 칠하는 함수
function fillBackground(){
	var canvas = document.getElementById("backgroundColor")
	var index = selectObj.selectedIndex
	var shape = selectObj[index].value
	
	if(shape == "squares"){
		for (var squares = 0 ; squares<20 ; squares++){
			drawSquare(canvas,context)
		}
	}
	else if(shape == "circles"){
		for (var circles = 0 ; circles<20 ; circles++){
			drawCircle(canvas,context)
		}
	}
	drawText(canvas, context)
	drawBird(canvas, context)
}