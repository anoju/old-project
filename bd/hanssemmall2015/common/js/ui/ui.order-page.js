/**
 * 주문관련 - UI 요소 적용
 * @version 2015.10.26
 */
;(function ($, $B) {
    // ----- 하단 "최종 결제금액" 스크롤에 따른 fixed처리 ----- //
	if($('.payment').size() > 0){
	    /*(function () {
	        var _$payment = $( '.payment' );
	
	        var _docH = $( document ).outerHeight(),
	            _paymentY = _$payment.offset().top;
	
	        var _paymentScroll = new $B.utils.ParallaxScroll( 'vertical', getPaymentPositions(), {
	            onActivate: paymentScrollHandler,
	            onDeactivate: paymentScrollHandler
	        });
	
	        function paymentScrollHandler (e) {
	            switch ( e.type ) {
	                case 'activate':
	                    _$payment.addClass( 'fixed' );
	                    break;
	                case 'deactivate':
	                    _$payment.removeClass( 'fixed' );
	                    break;
	            }
	        }
	
	        function getPaymentPositions () {
	            _docH = $( document ).outerHeight();
	
	            return [
	                {
	                    start: _paymentY,
	                    end: _docH
	                }
	            ];
	        }
	
	        function scrollPositionUpdate () {
	            _paymentScroll.update( getPaymentPositions() );
	        }
	
	        $( window ).load( scrollPositionUpdate );
	        $( document ).on( 'mousedown', scrollPositionUpdate );
	    }());*/
		
		//fixed 클래스만 붙였을때는 브라우저 세로 창이 작으면 푸터 영역을 침범해서 방식을 변경했습니다.
		var _$payment = $('.payment');
		var _wrap = $('.plusapply_area');
		$(window).load(function () {
			var _paymentY = _$payment.offset().top;
			$(window).scroll(function () {
				var _paymentH = _$payment.outerHeight();
				var _wrapH = _wrap.height();
				var _gap = _wrapH - _paymentH;
				var _scrollTop = $(this).scrollTop();
				console.log(_gap);
				_$payment.stop().animate({
					top: _scrollTop < _paymentY ? 0 : _scrollTop > _paymentY+_gap ? _gap : _scrollTop - _paymentY
				});
			});
		});
		
	}
	
    // ========== 세부 UI 콘트롤 ========== //
    //달력(팝업 아님)
    if($('.datepicker_inline').size() > 0){
    	/*
		var _minDate = '2015.10.15'//배송일선택 시작일
		var _maxDate = '2015.11.14'//배송일선택 마지막일
		*/
    	
    	var _today = new Date();//오늘기준
		var _minDate = new Date(_today.getFullYear(), _today.getMonth(), (_today.getDate()+5));//5일이후부터
		var _maxDate = new Date(_today.getFullYear(), _today.getMonth()+1, (_today.getDate()+4));//1달이내
		
		
		$( '.datepicker_inline' ).datepicker({
			closeText: '닫기',
			prevText: '이전달',
			nextText: '다음달',
			currentText: '오늘',
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			dateFormat: 'yy.mm.dd',
			showMonthAfterYear: true,
			showOtherMonths: true,
			yearSuffix: ".",
			minDate: _minDate,
			maxDate: _maxDate,
			beforeShowDay: function(date){
				var day = date.getDay();
				return [(day != 0)];//일요일 제외
			}
		});
	}

})(jQuery, ixBand);