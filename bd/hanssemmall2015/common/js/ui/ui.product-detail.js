/**
 * 상품상세 페이지 - UI 요소 적용
 * @version 2015.10.29
 */
;(function ($, $B) {
    // ----- 상단 gnb_area 스크롤에 따른 fixed처리 ----- //
    (function () {
        var _$gnb = $( '#gnb_area' ),
            _$tabAreas = $( '.ui-tab-position-area' ),
            _$tabs = _$tabAreas.find( '> .tab_wrap' );

        var _docH = $( document ).outerHeight(),
            _gnbY = _$gnb.offset().top,
            _gnbH = _$gnb.height();

        var _gnbScroll = new $B.utils.ParallaxScroll( 'vertical', getGnbPositions(), {
            onActivate: gnbScrollHandler,
            onDeactivate: gnbScrollHandler
        });

        var _tabScroll = new $B.utils.ParallaxScroll( 'vertical', getTabPositions(), {
            onActivate: tabScrollHandler,
            onDeactivate: tabScrollHandler
        });

        function gnbScrollHandler (e) {
            switch ( e.type ) {
                case 'activate':
                    _$gnb.addClass( 'fixed' );
                    break;
                case 'deactivate':
                    _$gnb.removeClass( 'fixed' );
                    break;
            }
        }

        function tabScrollHandler (e) {
            switch ( e.type ) {
                case 'activate':
                    _$tabs.removeClass( 'fixed' ).eq( e.index ).addClass( 'fixed' );
                    break;
                case 'deactivate':
                    _$tabs.removeClass( 'fixed' );
                    break;
            }
        }

        //스크롤에 반응할 좌표설정
        function getTabPositions () {
            var result = [],
                tabLength = _$tabAreas.length;

            for ( var i = 0; i < tabLength; ++i ) {
                var position = {
                    start: _$tabAreas.eq(i).offset().top - _gnbH,
                    end: _docH
                };

                if ( i > 0 ) {
                    var prevPosition = result[i - 1];
                    prevPosition.end = position.start;
                    //prevPosition.end = position.start - _gnbH;
                }

                result.push( position );
            }

            return result;
        }

        function getGnbPositions () {
            _docH = $( document ).outerHeight();

            return [
                {
                    start: _gnbY,
                    end: _docH
                }
            ];
        }

        function tabPositionUpdate () {
            _gnbScroll.update( getGnbPositions() );
            _tabScroll.update( getTabPositions() );
        }

        $( window ).load( tabPositionUpdate );
        $( document ).on( 'mousedown', tabPositionUpdate );

        // ----- 탭 클릭시 해당 영역으로 이동 ----- //
        _$tabs.find( '> .tab_tit > li > a' ).on( 'click', function (e) {
            e.preventDefault();

            var id = $( this ).attr( 'href' );
            $( 'html, body' ).scrollTop( $(id).offset().top - _gnbH );
        });
    }());



    // ----- "포토 상품후기", "동영상 상품후기" 적용 ----- //
    $( '.ui-slide-multi' ).slideList({
        eventBlock: false,
        motionType: 'slide',
        viewLength: 4
    });

    // ----- "상품비교", "여성이 함께 구매하신 상품" 적용 ----- //
    $( '.ui-overlay-list' ).overlayList();


    // ========== 세부 UI 콘트롤 ========== //

    //하단 구매 레이어 올리기
    $('.detail_fixed_ui').click(function(){
        $('.detail_fixed').toggleClass('active');
        $('.detail_fixed_cont').stop().slideToggle();
    })
    
     //상품후기 보기
    $('.review_list .info a').click(function(){
    	$(this).parents('.info').next('.view').stop().slideToggle().parent().siblings().children('.view').stop().slideUp();
        return false;
    });
    $('.qna_close').click(function(){
    	$(this).parents('.view').stop().slideUp();
    });
    //상품문의 보기
    $('.btn_qna_write').click(function(){
    	$('.detail_qna_form').stop().slideToggle();
    });
    $('.btn_qna_close').click(function(){
    	$('.detail_qna_form').stop().slideUp();
    	return false;
    });
    
})(jQuery, ixBand);