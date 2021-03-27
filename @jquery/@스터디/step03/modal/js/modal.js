// JavaScript Document
function init_modal(){
	if(!$('a.modal').length){
		return;
	}
	
	function sizeModal(){//사이즈 계산
		var $modal = $('#modal_window'); //변수선언
		var $modal_width = $modal.outerWidth(); //$('#modal_window')의 가로 사이즈 저장
		var $modal_height = $modal.outerHeight(); //$('#modal_window')의 세로 사이즈 저장
		/* 세로사이즈 내림차순으로 계산후 저장 */
		var $modal_top = '-' + Math.floor($modal_height /2) + 'px'; 
		/* 가로사이즈 내림차순으로 계산후 저장 */
		var $modal_left = '-' + Math.floor($modal_width /2) + 'px';
		//$('#modal_window')에 저장
		$('#modal_window').css({'margin-top':$modal_top,'margin-left':$modal_left});
	}
	
	function showModal(){
		$('#modal_wrapper').show();
		sizeModal(); //sizeModal() 호출 - 7번째라인
		$('#modal_window').css('visibility','visible').show();
		
		$('#modal_content img').each(function(){
			$(this).load(function(){
				$(this).removeClass('modal_placeholder').show();
				sizeModal();
			});
		});
	}
	
	$('body').append("<div id='modal_wrapper'><div id='modal_overlay'></div><div id='modal_window'><div id='modal_bar'><strong>Modal window</strong><a href='#' id='modal_close'>close</a></div><div id='modal_content'></div></div>"); //모달창 입력
	
	$('a.modal').click(function(){
		var $the_link = $(this).attr('href'); //링크의 값 저장
		
		if($the_link.match(/^#./)){ //텍스트를 찾아 #으로 시작하고 한글자가 있으면 참
			$('#modal_content').html($($the_link).html()); //모달창 '#modal_content'안에 $the_link링크 안의 값의 내용을 저장
			showModal();
		}else if($the_link.match(/.jpg$/) || $the_link.match(/.png$/) || $the_link.match(/.gif$/)){ //jpg, png, gif의 확장명을 가진 이미지를 찾는다
			$('#modal_content').html('<p id="modal_image_wrapper"><img src="' + $the_link + '" class="modal_placeholder" /></p>');//모달창 '#modal_content'안에 이미지의 값을 넣는다
			showModal();
		}else {
			$('#modal_content').load($(this).attr('href').replace('#',' #'), '', showModal)//jquery.load(url, data(쿼드스트링), callback)
		}
		
		if($(this).attr('title')){
			$('#modal_bar strong').html($(this).attr('title'));
		}else if($(this).html() !== ''){
			$('#modal_bar strong').html($(this).html());
		}
		
		return false;
	});
	
	$('#modal_overlay, #modal_close').click(function(){
		$('#modal_wrapper').hide();
		$('#modal_window').css('visibility','hidden');
		$('#modal_content').html('');
	});
}

$(function(){
	init_modal();
});