/**
 * 메인 페이지 - UI 요소 적용
 * @version 2015.10.29
 */
;(function ($, $B) {
    // =============== "Best Pick" 적용 =============== //
    (function () {
        var RANDOM_PLAY_DELAY = 100,
            ANI_DURATION = 400;

        var _$target = $( '.best_pick' ),
            _$items = _$target.find( '.ui-list-item' );

        var _oldIdx = -1,
            _interval = null;

        _$target.overlayList({
            duration: 400,
            autoPlay: true,
            delayTime: 5000,
            disableItemHide: false
        }).on( 'overlaylist:change', function ( e, index ) {
            randomPlay( index );
            _oldIdx = index;
        });

        function randomPlay ( idx ) {
            var $item = _$items.eq( idx ),
                $children = $item.find( '.ui-list-item-child' );

            var idxAry = [],
                count = 0;

            $children.each( function ( idx ) {
                idxAry[idx] = idx;
            });

            idxAry = $B.array.shuffle( idxAry );
            $children.css( 'opacity', 0 );

            if ( _interval ) {
                clearInterval( _interval );
                _interval = null;
            }

            setInterval( function () {
                var idx = idxAry[count],
                    $child = $children.eq( idx );

                motionStart( $child );
                count++;
            }, RANDOM_PLAY_DELAY);
        }

        function motionStart ( $child ) {
            $child.animate( {opacity: 1}, {
                duration: ANI_DURATION
            });
        }
    }());

    // =============== "한샘 Pick" =============== //
    (function () {
        var AUTO_PLAY = true,
            DELAY_TIME = 4000,
            ANI_DURATION = 400;

        var _$target = $( '.hanss_pick' ),
            _$listItems = _$target.find( '.ui-list-items .ui-list-item' ),
            _$contentsArea = _$target.find( '.ui-list-contents' ),
            _$contents = _$contentsArea.find( '.ui-list-item' );

        var _timer,
            _itemLength = _$listItems.length,
            _selectedIdx = -1;

        /* ----- Initialize ----- */
        _$target.on( 'mouseover mouseout', mouseHandler );
        _$listItems.find( 'a' ).on( 'click', function (e) {
            e.preventDefault();
            itemSelect( $(this).closest('.ui-list-item').index() );
        });

        if ( AUTO_PLAY ) {
            _timer = new $B.utils.Timer( DELAY_TIME, 0, {
                onTimer: timerHandler
            }).start();
        }

        itemSelect( 0 , 'none' );

        /* ----- Protected Methods ----- */

        function itemSelect ( idx, type ) {
            var $content = _$contents.eq( idx );

            _$listItems.removeClass( 'active' ).eq( idx ).addClass( 'active' );

            if ( type === 'none' ) {
                _$contents.css( 'display', 'none' ).eq( idx ).css( 'display', 'block' );
                _$contentsArea.append( $content );
            } else {
                $content.css({
                    display: 'block',
                    opacity: 0
                });
                _$contentsArea.append( $content );
                $content.animate( {opacity: 1}, {
                    duration: ANI_DURATION
                });
            }

            _selectedIdx = idx;
        }

        function timerHandler (e) {
            var idx = _selectedIdx + 1;
            if ( idx >= _itemLength ) idx = 0;
            itemSelect( idx );
        }

        function mouseHandler (e) {
            if ( e.type === 'mouseover' ) {
                if ( _timer ) _timer.stop();
            } else {
                if ( _timer ) _timer.start();
            }
        }
    }());

    // ===============  "브랜드 shop" =============== //
    (function () {
        var _$target = $( '.bland_shop' ),
            _$viewport = _$target.find( '.ui-list-viewport' ),
            _$items = _$target.find( '.ui-list-items .ui-list-item' ),
            _$pops = _$target.find( '.ui-list-pops .ui-list-pop' );

        var _timer = new $B.utils.Timer( 700, 1, {
            onTimer: function (e) {
                closePop();
                _$target.trigger( 'slidelist:timer_start' );
            }
        });

        _$target.slideList({
            eventBlock: false,
            loop: true,
            motionType: 'slide',
            duration: 400,
            autoPlay: true,
            delayTime: 5000,
            viewLength: 8,
            moveLength: 1
        });

        _$items.on( 'mouseover mouseout', mouseHandler );
        _$pops.on( 'mouseover mouseout', function (e) {
            if ( e.type === 'mouseover' ) {
                _timer.stop();
                _$target.trigger( 'slidelist:timer_stop' );
            } else {
                _timer.reset().start();
            }
        });

        function mouseHandler (e) {
            var $item = $( this ),
                idx = $item.data( 'origin-idx' );

            if ( e.type === 'mouseover' ) {
                _timer.stop();
                _$target.trigger( 'slidelist:timer_stop' );
                closePop();
                openPop( $item, idx );
            } else {
                _timer.reset().start();
            }
        }

        function openPop ( $item, idx ) {
            var $pop = _$pops.eq( idx );
            $pop.css( 'display', 'block' );

            var veiwportX = _$viewport.offset().left,
                posX = $item.offset().left;

            console.log( '-posX:', posX, '  veiwportX:', veiwportX );
            $pop.css( 'left', (posX - veiwportX) + 'px' );
        }

        function closePop () {
            _$pops.css( 'display', 'none' );
        }
    }());

    // ===============  "매트리스 홈케어 서비스 Tab영역 YouTube제어" =============== //
    (function () {
        var $tabArea = $( '.ui-tab-area' ),
            $contents = $tabArea.find( '.ui-tab-contents > .ui-tab-contents-item' );

        var srcs = [];

        $contents.each( function ( idx, el ) {
            var src = $contents.eq( idx ).find( '.video-area > iframe' ).attr( 'src' );
            srcs[idx] = src;
        });

        $tabArea.on( 'tabs:change', function ( e, idx ) {
            var src = srcs[idx];
            $contents.find( '.video-area > iframe' ).attr( 'src', '' );

            if ( src ) {
                $contents.eq( idx ).find( '.video-area > iframe' ).attr( 'src', src );
            }
        });
    }());


    // =============== 상단 대표베너 적용 =============== //
    $( '.visual_banner' ).overlayList({
        motionType: 'overlay',
        duration: 400,
        autoPlay: true,
        delayTime: 5000
    });

    // ===============  상단 배너 적용 =============== //
    $( '.top_banner' ).slideList({
        eventBlock: false,
        loop: true,
        motionType: 'slide',
        duration: 500,
        viewLength: 5
    });

    // ===============  "기획전" 적용 =============== //
    $( '.exhib' ).slideList({
        eventBlock: false,
        loop: true,
        motionType: 'slide',
        viewLength: 1
    });

    // ===============  "브랜드 체험기" 적용 =============== //
    $( '.bland_exper' ).slideList({
        eventBlock: false,
        loop: true,
        motionType: 'slide',
        viewLength: 4,
        moveLength: 1
    });

    // ===============  하단 띠베너 적용 =============== //
    $( '.girdle_banner' ).overlayList({
        motionType: 'overlay',
        duration: 400,
        autoPlay: true,
        delayTime: 5000,
        loop: true
    });

})(jQuery, ixBand);