/**
 * 
 * @version 2015.10.21
 */
;(function ($, $B) {	
    // ----- datepicker 캘린더 팝업 ----- //
	if($('.datepicker').size() > 0){
		var maxDate = new Date();//오늘
		var minDate = new Date(maxDate.getFullYear(), maxDate.getMonth()-24, 0);//2년전까지
		
		$( '.datepicker' ).datepicker({
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
			showOn: 'button',
			buttonText: '기간조회',
			showAnim:'slideDown',
			minDate: minDate,
			maxDate: maxDate
		});
		
		//1주일,1개월,3개월,6개월 버튼
		var today = maxDate.getFullYear() +'.'+ (maxDate.getMonth() + 1) +'.'+ maxDate.getDate();
		var _from		
		$('.ui-datepicker-btn button').click(function(){
			var idx = $(this).index();
			
			if(idx==0){
				_from = maxDate.getFullYear() +'.'+ (maxDate.getMonth() + 1) +'.'+ (maxDate.getDate()-6);
			}else if(idx==1){
				_from = maxDate.getFullYear() +'.'+ maxDate.getMonth() +'.'+ (maxDate.getDate()+1);
			}else if(idx==2){
				_from = maxDate.getFullYear() +'.'+ (maxDate.getMonth() -2) +'.'+ (maxDate.getDate()+1);
			}else if(idx==3){
				_from = maxDate.getFullYear() +'.'+ (maxDate.getMonth() -5) +'.'+ (maxDate.getDate()+1);
			}
			console.log(_from)
			$('#fromDate').val(_from);
			$('#toDate').val(today);
			return false;
		})
		
	}
})(jQuery, ixBand);