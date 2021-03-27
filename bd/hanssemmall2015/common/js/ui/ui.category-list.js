/**
 * 상품 리스트 - UI 요소 적용
 * @version 2015.10.21
 */
;(function ($, $B) {	
    // ----- 리스트 안 '쿠폰' 레이어 팝업 ----- //
	$('.prd_price_btn').hover(function(){
		$(this).parents('.prd_price_wrap').find('.pop_bubble').openLayer();				
	},function(){				
		$(this).parents('.prd_price_wrap').find('.pop_bubble').closeLayer();
	});
	
	// ----- (임시) 6단보기에서 제품 정보보기 ----- //
	//열기
	$('.product_expend .prd_img a').click(function(){
		var _top = $(this).position().top;
		$(this).parent().next('.prd_info').css({'top':_top+144}); //144:a태그 높이가 146이므로 -2
		$(this).parent().parent().addClass('active').siblings().removeClass('active');
		return false;
	});
	//닫기
	$('.product_expend .prd_close').click(function(){
		$(this).parent().parent().removeClass('active');
	})
	
	
	//--- 검색옵션:price slider ---//
	if($('#slider-range').size()>0){
		var _min = 10000,
			_max = 5000000; 
		$( "#slider-range" ).slider({
			range: true,
			min: _min,
			max: _max,
			step: 1000,//천단위로 이동
			values: [_min, _max ],
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.values[ 0 ] );
				$( "#amount2" ).val( ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
		$( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ) );
		
		$('#amount').blur(function(){
			var _val = $( "#amount" ).val();
			if(_val < _min){
				_val=_min;
				$( "#amount" ).val(_val);
			}
			$( "#slider-range" ).slider('values',0,_val);
		});
		$('#amount2').blur(function(){
			var _val = $( "#amount2" ).val();
			if(_val > _max){
				_val=_max;
				$( "#amount2" ).val(_val);
			}
			$( "#slider-range" ).slider('values',1,_val);
		});
	}
})(jQuery, ixBand);