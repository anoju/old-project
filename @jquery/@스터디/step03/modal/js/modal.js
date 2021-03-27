// JavaScript Document
function init_modal(){
	if(!$('a.modal').length){
		return;
	}
	
	function sizeModal(){//������ ���
		var $modal = $('#modal_window'); //��������
		var $modal_width = $modal.outerWidth(); //$('#modal_window')�� ���� ������ ����
		var $modal_height = $modal.outerHeight(); //$('#modal_window')�� ���� ������ ����
		/* ���λ����� ������������ ����� ���� */
		var $modal_top = '-' + Math.floor($modal_height /2) + 'px'; 
		/* ���λ����� ������������ ����� ���� */
		var $modal_left = '-' + Math.floor($modal_width /2) + 'px';
		//$('#modal_window')�� ����
		$('#modal_window').css({'margin-top':$modal_top,'margin-left':$modal_left});
	}
	
	function showModal(){
		$('#modal_wrapper').show();
		sizeModal(); //sizeModal() ȣ�� - 7��°����
		$('#modal_window').css('visibility','visible').show();
		
		$('#modal_content img').each(function(){
			$(this).load(function(){
				$(this).removeClass('modal_placeholder').show();
				sizeModal();
			});
		});
	}
	
	$('body').append("<div id='modal_wrapper'><div id='modal_overlay'></div><div id='modal_window'><div id='modal_bar'><strong>Modal window</strong><a href='#' id='modal_close'>close</a></div><div id='modal_content'></div></div>"); //���â �Է�
	
	$('a.modal').click(function(){
		var $the_link = $(this).attr('href'); //��ũ�� �� ����
		
		if($the_link.match(/^#./)){ //�ؽ�Ʈ�� ã�� #���� �����ϰ� �ѱ��ڰ� ������ ��
			$('#modal_content').html($($the_link).html()); //���â '#modal_content'�ȿ� $the_link��ũ ���� ���� ������ ����
			showModal();
		}else if($the_link.match(/.jpg$/) || $the_link.match(/.png$/) || $the_link.match(/.gif$/)){ //jpg, png, gif�� Ȯ����� ���� �̹����� ã�´�
			$('#modal_content').html('<p id="modal_image_wrapper"><img src="' + $the_link + '" class="modal_placeholder" /></p>');//���â '#modal_content'�ȿ� �̹����� ���� �ִ´�
			showModal();
		}else {
			$('#modal_content').load($(this).attr('href').replace('#',' #'), '', showModal)//jquery.load(url, data(���彺Ʈ��), callback)
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