/**
 * 
 * @version 2015.10.21
 */
;(function ($, $B) {	
    // ----- 현재시간 출력 ----- //
	if($('.now_time').size() > 0){
		timer();		
		function timer() {
		    var _today = new Date();
		    var _h = _today.getHours();
		    var _m = _today.getMinutes();
		    var _s = _today.getSeconds();
		    _m = _reset(_m);
		    _s = _reset(_s);	    
		    $('.now_time').text(_h+" : "+_m+" : "+_s);	    
		    setTimeout(function(){timer()},1000);    /* 1초마다 갱신(refresh)  */
		}
		 /*분,초에서 숫자를 가져와서 만약 그 수가 10보다 작다면 앞에 "0"을 추가 함 */
		function _reset(i) {
		    if (i<10) {i = "0" + i};
		    return i;
		}		
	}
})(jQuery, ixBand);

