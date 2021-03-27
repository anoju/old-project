/**
 * 공통 UI 요소 적용
 * @version 2015.10.29
 */
;(function ($) {
    //IE8 대응 placeholder
    $( 'input, textarea' ).placeholder();

    //SelectBox 세팅
    $( '.ui-select-box' ).selectBox();

    //selectbox option의 다양한 디자인이 들어갔을때 아래와 같이 사용한다
    $( '.ui-design-select-box' ).selectBox({
        designOption: true
    });

    //NumberCounter 세팅
    $( '.ui-number-counter' ).numberCounter();

    //Tab Controller 세팅
    $( '.ui-tab-area' ).tabs();

    //Tab 안에 또 tab이 있는 Controller 세팅
    $( '.ui-sub-tab-area' ).tabs();

    //성별 radioSelect
    $( '.ui-radio-select' ).radioSelect();

    // ----- 상단 오른쪽 베너 적용 ----- //
    $( '.header_banner' ).overlayList({
        loop: true
    });
})(jQuery);