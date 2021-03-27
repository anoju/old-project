/**
 * 공통 UI 요소, jQuery Plug-in
 * @version 2015.10.29
 */
;(function ($, $B) {
    var _selectBoxId = 0,
        _selectBoxs = [];

    //jQuery Plugin 으로 선언
    $.fn.extend({

        some: function ( callback ) {
            if ( !callback ) return this;

            var length = this.length;

            for ( var i = 0; i < length; ++i ) {
                if ( callback.call(this, i, this.get(i)) ) break;
            }
        },

        /**
         * SelectBox
         * 동적으로 selectbox의 option을 추가했을시 화면에 적용을 위하여 $(target).trigger('selectbox:updated') 해줘야 한다.
         * @param   {Object}    options {designOption:true를 설정시 리스트를 동적으로 생성하지 않는다.}
         */
        selectBox: function( options ) {
            this.each( function ( idx, el ) {
                if ( !$(el).hasClass('ui-select-box-apply') ) {
                    _selectBoxs.push( new SelectBox($(this), _selectBoxId, options) );
                    _selectBoxId++;
                }
            });

            return this;
        },

        //NumberCounter
        numberCounter: function () {
            this.each( function ( idx, el ) {
                if ( !$(el).hasClass('ui-number-counter-apply') ) {
                    new NumberCounter( $(this) );
                }
            });

            return this;
        },

        /**
         * Tab관리
         * $(target).on('tabs:change', function (e, index) { index }) 으로 현재 열린 탭의 index를 전달 받을수 있다.
         * $(target).trigger('tabs:change_index', index) 로 활성화 시킬 탭을 변경할 수 있다.
         * @param {Object}      options
         *      - {Boolean}     eventBlock    클릭이벤트 전달을 막는다. (a href=의 동작을 막는다), 기본설정=true
         */
        tabs: (function () {
            function changeTab ( $target, idx, oldIdx, silent ) {
                var $tabs = $target.find( '>.ui-tabs > .ui-tab-item' ),
                    $contents = $target.find( '>.ui-tab-contents > .ui-tab-contents-item' );

                if ( idx >= $tabs.length ) return;

                $tabs.removeClass( 'active' );
                $tabs.eq( idx ).addClass( 'active' );
                $contents.css( 'display', 'none' );
                $contents.eq( idx ).css( 'display', 'block' );
                if ( !silent && idx !== oldIdx ) $target.trigger( 'tabs:change', idx );
            }

            return function ( options ) {
                var _options = options || {};
                _options.eventBlock = ( typeof _options.eventBlock === 'boolean' ) ? _options.eventBlock : true;

                this.each( function ( idx, el ) {
                    var $target = $( el );
                    var _selectIdx = 0;

                    if ( !$target.hasClass('ui-tab-apply') ) {
                        $target.addClass( 'ui-tab-apply' );

                        changeTab( $target, _selectIdx, _selectIdx, true );

                        $target.find( '>.ui-tabs > .ui-tab-item > a' ).on( 'click', function (e) {
                            if ( _options.eventBlock ) e.preventDefault();
                            var idx = $( e.currentTarget ).parent().index();
                            changeTab( $target, idx, _selectIdx );
                            _selectIdx = idx;
                        });

                        $target.on( 'tabs:change_index', function (e, index) {
                            changeTab( $target, index, _selectIdx );
                            _selectIdx = index;
                        });
                    }
                });

                return this;
            }
        }()),

        /**
         * 레이어 팝업 열기 (X버튼의 닫기 이벤트는 자동으로 등록된다)
         * $(target).on('layer:open layer:close', function ) 으로 열고 닫히는 시점의 이벤트를 받을수 있다.
         */
        openLayer: function () {
            if ( this.hasClass('ui-layer-open-apply') ) return this;

            var self = this;
            this.find( '.ui-layer-close' ).off( 'click' ).on( 'click', function (e) {
                e.preventDefault();
                self.closeLayer();
            });

            this.css( 'display', 'block' ).addClass( 'ui-layer-open-apply' );
            this.trigger( 'layer:open' );
            return this;
        },

        /**
         * 레이어 팝업 강제로 닫기
         */
        closeLayer: function () {
            if ( !this.hasClass('ui-layer-open-apply') ) return this;

            this.find( '.ui-layer-close' ).off( 'click' );
            this.css( 'display', 'none' );
            this.removeClass( 'ui-layer-open-apply' );
            this.trigger( 'layer:close' );
            return this;
        },

        /**
         * radioBox 형태의 selectBox
         */
        radioSelect: (function () {
            function updated ( $target ) {
                var $select = $target.find( '>.ui-radio-select-input' ),
                    $options = $select.find( '>option' );

                var buttonHtml = '',
                    isAllDisabled = $select.attr( 'disabled' );

                $target.find( '>.ui-radio-select-btn' ).remove();
                $options.each( function ( idx, el ) {
                    var $option = $( el ),
                        disabled = '', selected = '', attrDisabled = '', attrSelected = '';

                    if ( $option.attr('disabled') || isAllDisabled ) {
                        disabled = 'disabled';
                        attrDisabled = 'disabled="disabled"';
                    }

                    if ( $option.attr('selected') ) {
                        selected = 'selected';
                        attrSelected = 'selected="selected"';
                    }

                    buttonHtml += '<button class="index' + idx + ' design_radio ui-radio-select-btn ' + disabled + ' ' + selected + '" ' + attrDisabled + ' ' + attrSelected + 'data-index="' + idx + '">' + $option.text() + '</button>';
                });

                $target.append( buttonHtml );
            }

            function changeValue ( $target, selectIdx ) {
                if ( selectIdx !== $target._selectIdx ) {
                    var $select = $target.find( '>.ui-radio-select-input' ),
                        $options = $select.find( '>option' );

                    $options.attr( 'selected', false ).eq( selectIdx ).attr( 'selected', true );
                    $target.find( '>.ui-radio-select-btn' ).removeClass( 'selected' ).eq( selectIdx ).addClass( 'selected' );

                    $select.trigger( 'change' );
                    $target._selectIdx = selectIdx;
                }
            }

            return function () {
                this.each( function ( idx, el ) {
                    var $target = $( el );
                    $target._selectIdx = -1;

                    if ( !$target.hasClass('ui-radio-select-apply') ) {
                        $target.addClass( 'ui-radio-select-apply' );

                        updated( $target );

                        $target.on( 'click', '>.ui-radio-select-btn', function (e) {
                            e.preventDefault();
                            var idx = $( e.target ).data( 'index' );

                            changeValue( $target, idx );
                        });

                        $target.on( 'radioselect:updated', function (e) {
                            updated( $target );
                            changeValue( $target, $target.find('>.ui-radio-select-input > option[selected=selected]').index() );
                        });
                    }
                });

                return this;
            }
        }()),

        /**
         * 오버랩되는 리스트 베너 관리
         * $(target).on('overlaylist:change overlaylist:init', function (e, index, total) {}) 으로 변경된 아이템의 index 반환
         * $(target).trigger('overlaylist:change_index', index) 로 강제 설정가능
         * @param {Object}      options
         *      - {Boolean}     autoPlay    자동 플레이 설정, 기본설정=false
         *      - {Number}      delayTime   autoPlay 지연시간 (1000/1초), 기본설정=4000
         *      - {String}      motionType  "overlay", "none" 기본설정="none"
         *      - {Number}      duration    모션이 animate되는 속도, 기본설정=400
         *      - {Boolean}     loop        아이템이 끝이 없이 무한으로 보여져야 할때 true, 기본설정=false
         *      - {Boolean}     disableItemHide     motionType='none'시 비활성화 아이템 감추지 않기, 기본설정=true
         */
        overlayList: function( options ) {
            this.each( function ( idx, el ) {
                var $target = $( el );

                if ( !$target.hasClass('ui-overlay-list-apply') ) {
                    $target.addClass( 'ui-overlay-list-apply' );
                    new OverlayList( $target, options );
                }
            });

            return this;
        },

        /**
         * 슬라이드 리스트 관리 (좌우 슬라이딩)
         * $(target).on('slidelist:change slidelist:init', function (e, index, total) {}) 으로 변경된 아이템의 index 반환
         * $(target).trigger( 'slidelist:timer_start slidelist:timer_stop' ) 으로 autoPlay 일시정지 재시작
         * @param {Object}      options
         *      - {Boolean}     autoPlay    자동 플레이 설정, 기본설정=false
         *      - {Number}      delayTime   autoPlay 지연시간 (1000/1초), 기본설정=4000
         *      - {String}      motionType  "slide", "none" 기본설정="none"
         *      - {String}      axis        motionType이 "slide"였을때 슬라이드 방향축, "vertical", "horizontal" 기본설정="horizontal"
         *      - {Number}      duration    모션이 animate되는 속도, 기본설정=400
         *      - {Int}         viewLength   화면의 보여질 갯수, 기본설정=1
         *      - {Int}         moveLength  버튼 클릭시 한번에 움직여야 하는 갯수, 기본설정=viewLength
         *      - {Boolean}     loop        아이템이 끝이 없이 무한으로 보여져야 할때 true, 기본설정=false
         *      - {Boolean}     eventBlock    클릭이벤트 전달을 막는다. (a href=의 동작을 막는다), 기본설정=true
         */
        slideList: function( options ) {
            this.each( function ( idx, el ) {
                var $target = $( el );

                if ( !$target.hasClass('ui-slide-list-apply') ) {
                    $target.addClass( 'ui-slide-list-apply' );
                    new SlideList( $target, options );
                }
            });

            return this;
        }
    });


    /**
     * 오버랩 베너 리스트 관리
     * @constructor
     */
    var OverlayList = function ( $target, options ) {
        var _options = options || {};

        var DELAY_TIME = _options.delayTime || 4000,
            ANI_DURATION = ( typeof _options.duration === 'number' ) ? _options.duration : 400,
            MOTION_TYPE = _options.motionType || 'none',
            DISABLE_ITEM_HIDE = ( typeof _options.disableItemHide === 'boolean' ) ? _options.disableItemHide : true;

        var _$target = $target,
            _$ul = _$target.find( '.ui-list-items' ),
            _$items = _$ul.find( '.ui-list-item' ),
            _$controller = _$target.find( '.ui-controller' ),
            _$prevBtn = _$controller.find( '.ui-controller-prev' ),
            _$nextBtn = _$controller.find( '.ui-controller-next' ),
            _$thumbsArea = _$target.find( '.ui-thumbs' ),
            _$thumbs = _$thumbsArea.find( '.ui-thumb' );

        var _timer;

        var _itemLength = _$items.length,
            _selectedIdx = -1,
            _isDisabled = false;

        // =============== Initialize =============== //

        initialize();

        // =============== Private Methods =============== //

        function initialize () {
            setArrowState();

            if ( _itemLength > 1 ) {
                setAutoPlay();
                setButton();
                itemChange( _selectedIdx + 1, 'none', true );

                _$target.on( 'overlaylist:change_index', function ( e, idx ) {
                    if ( _timer ) _timer.reset().start();
                    itemChange( idx, MOTION_TYPE );
                    setArrowState();
                });

                _$thumbs.find( 'a' ).on( 'click', function (e) {
                    e.preventDefault();
                    var $thumb = $( this ).closest( '.ui-thumb' ),
                        idx = $thumb.index();

                    itemChange( idx, MOTION_TYPE );
                    setArrowState();
                });
            } else {
                _$thumbsArea.addClass( 'disabled' );
            }

            _$target.trigger( 'overlaylist:init', _selectedIdx, _itemLength );
        }

        function setButton () {
            _$prevBtn.on( 'click', function (e) {
                e.preventDefault();
                if ( $(this).hasClass( 'disabled' ) ) return;

                itemChange( _selectedIdx - 1, MOTION_TYPE );
                setArrowState();
            });

            _$nextBtn.on( 'click', function (e) {
                e.preventDefault();
                if ( $(this).hasClass( 'disabled' ) ) return;

                itemChange( _selectedIdx + 1, MOTION_TYPE );
                setArrowState();
            });

            if ( _options.autoPlay ) {
                _$prevBtn.on( 'mouseover mouseout', mouseHandler );
                _$nextBtn.on( 'mouseover mouseout', mouseHandler );
                _$ul.on( 'mouseover mouseout', '.ui-list-item', mouseHandler );
                _$thumbs.on( 'mouseover mouseout', mouseHandler );
            }
        }

        function setAutoPlay () {
            if ( !_options.autoPlay ) return;

            _timer = new $B.utils.Timer( DELAY_TIME, _itemLength, {
                onTimer: function (e) {
                    itemChange( _selectedIdx + 1, MOTION_TYPE );
                    setArrowState();
                },
                onComplete: function (e) {
                    _timer.reset().start();
                }
            }).start();
        }

        function mouseHandler (e) {
            if ( e.type === 'mouseover' ) {
                if ( _timer ) _timer.stop();
            } else {
                if ( _timer ) _timer.reset().start();
            }
        }

        function itemChange ( idx, motionType, silent ) {
            if ( _selectedIdx == idx || _isDisabled ) return;
            if ( idx >= _itemLength ) {
                idx = 0;
            } else if ( idx < 0 ) {
                idx = _itemLength - 1;
            }

            var $item = _$items.eq( idx ),
                $oldItem = _$items.eq( _selectedIdx );

            if ( motionType === 'overlay' ) {
                _isDisabled = true;
                $oldItem.css({
                    display: 'block',
                    opacity: 1
                });
                $item.css({
                    display: 'block',
                    opacity: 0
                });

                _$ul.append( $item );
                $item.animate( {opacity: 1}, {
                    duration: ANI_DURATION,
                    complete: function () {
                        _isDisabled = false;
                    }
                });
            } else {
                if ( DISABLE_ITEM_HIDE || silent ) $oldItem.css( 'display', 'none' );
                $item.css( 'display', 'block' );
                _$ul.append( $item );
            }

            //thumbs
            _$thumbs.removeClass( 'active' ).eq( idx ).addClass( 'active' );

            _selectedIdx = idx;

            if ( !silent ) _$target.trigger( 'overlaylist:change', _selectedIdx, _itemLength );
        }

        //좌우화살표 상태 처리
        function setArrowState () {
            if ( _itemLength < 2) {
                _$prevBtn.attr( 'disabled', true ).addClass( 'disabled' );
                _$nextBtn.attr( 'disabled', true ).addClass( 'disabled' );
                _$controller.addClass( 'disabled' );
            } else {
                if ( !_options.loop || (!_options.loop && _options.autoPlay) ) {
                    //prev
                    if ( _selectedIdx > 0 ) {
                        _$prevBtn.attr( 'disabled', false ).removeClass( 'disabled' );
                    } else {
                        _$prevBtn.attr( 'disabled', true ).addClass( 'disabled' );
                    }

                    //next
                    if ( _selectedIdx < _itemLength - 1  ) {
                        _$nextBtn.attr( 'disabled', false ).removeClass( 'disabled' );
                    } else {
                        _$nextBtn.attr( 'disabled', true ).addClass( 'disabled' );
                    }
                }
            }
        }
    };


    /**
     * 슬라이드 리스트 관리
     * @constructor
     */
    var SlideList = function ( $target, options ) {
        var _options = options || {};

        var VIEW_LENGTH = _options.viewLength || 1,
            DELAY_TIME = _options.delayTime || 4000,
            ANI_DURATION = ( typeof _options.duration === 'number' ) ? _options.duration : 400,
            MOTION_TYPE = _options.motionType || 'none',
            AXIS = _options.axis || 'horizontal',
            EVENT_BLOCK = ( typeof _options.eventBlock === 'boolean' ) ? _options.eventBlock : true;

        var _$target = $target,
            _$viewport = _$target.find( '.ui-list-viewport' ),
            _$ul = _$target.find( '.ui-list-items' ),
            _$controller = _$target.find( '.ui-controller' ),
            _$prevBtn = _$controller.find( '.ui-controller-prev' ),
            _$nextBtn = _$controller.find( '.ui-controller-next' ),
            _$items;

        var _timer,
            _listIndexManager;

        var _originItemLength, _itemLength, _itemSize, _maxIdx,
            _originSelectedIdx = -1,
            _isDisabled = false;

        // =============== Initialize =============== //

        initialize();

        // =============== Private Methods =============== //

        function initialize () {
            getItems();
            _originItemLength = _itemLength;
            setItems();

            if ( _itemLength > VIEW_LENGTH ) {
                getSize();
                setSize();
            }

            setButton();
            setAutoPlay();
            selectItem( 0, true );
            setArrowState( 0 );

            _listIndexManager = new ListIndexManager( _originItemLength, _options, {
                onChangeOriginIndex: listIndexEventHandler,
                onChangeIndex: listIndexEventHandler,
                onCorrectIndex: listIndexEventHandler
            });

            _$target.on( 'slidelist:timer_start slidelist:timer_stop', function (e) {
                if ( e.type === 'slidelist:timer_start' ) {
                    if ( _timer ) _timer.start();
                } else {
                    if ( _timer ) _timer.stop();
                }
            });

            _$target.trigger( 'slidelist:init', _originSelectedIdx, _originItemLength );
        }

        function listIndexEventHandler (e) {
            //console.log( '>>>>>>>>', e.type, '  index:', e.index, e.originIndex );
            switch ( e.type ) {
                case 'change-origin-index':
                    selectItem( e.originIndex );
                    break;
                case 'change-index':
                    itemMove( e.index, MOTION_TYPE );
                    break;
                case 'correct-index':
                    itemMove( e.index, 'none' );
                    break
            }
        }

        function getItems () {
            _$items = _$ul.find( '.ui-list-item' );
            _itemLength = _$items.length;
            _maxIdx = _itemLength - VIEW_LENGTH;
        }

        //아이템 origin 갯수 대비 실제 갯수 설정
        function setItems () {
            _$items.each( function ( idx, el ) {
                //origin-index 속성 추가
                $( el ).attr( 'data-origin-idx', idx );
            });

            if ( _options.loop && _itemLength > VIEW_LENGTH ) {
                cloneItem();
                getItems();
            }

            _$items.each( function ( idx, el ) {
                //index 속성 추가
                $( el ).attr( 'data-idx', idx );
            });
        }

        //아이템 복사
        function cloneItem () {
            var $firstItems = _$items.slice( _itemLength - VIEW_LENGTH, _itemLength ).clone(),
                $lastItems = _$items.slice( 0, VIEW_LENGTH ).clone();

            if ( $firstItems.length ) $firstItems.insertBefore( _$items.eq(0) );
            if ( $lastItems.length ) _$ul.append( $lastItems );
        }

        function setButton () {
            _$prevBtn.on( 'click', function (e) {
                e.preventDefault();
                if ( $(this).hasClass('disabled') || _isDisabled ) return;
                _listIndexManager.prev();
            });

            _$nextBtn.on( 'click', function (e) {
                e.preventDefault();
                if ( $(this).hasClass('disabled') || _isDisabled ) return;
                _listIndexManager.next();
            });

            _$ul.on( 'click', '.ui-list-item > a', function (e) {
                if ( EVENT_BLOCK ) e.preventDefault();
                var $target = $( e.currentTarget ).closest( '.ui-list-item' ),
                    originIdx = $target.data( 'origin-idx' ),
                    idx = $target.data( 'idx' );

                selectItem( originIdx );
            });

            if ( _options.autoPlay ) {
                _$prevBtn.on( 'mouseover mouseout', mouseHandler );
                _$nextBtn.on( 'mouseover mouseout', mouseHandler );
                _$ul.on( 'mouseover mouseout', '.ui-list-item', mouseHandler );
            }
        }

        function mouseHandler (e) {
            if ( e.type === 'mouseover' ) {
                if ( _timer ) _timer.stop();
            } else {
                if ( _timer ) _timer.reset().start();
            }
        }

        //아이템 이동
        function itemMove ( idx, motionType ) {
            if ( _isDisabled ) return;

            var posStyle = {};

            _isDisabled = true;
            setArrowState( idx );

            if ( AXIS === 'horizontal' ) {
                posStyle = {
                    marginLeft: indexToPosition( idx ) + 'px'
                }
            } else {
                posStyle = {
                    marginTop: indexToPosition( idx ) + 'px'
                }
            }

            if ( motionType === 'slide' ) {
                _$ul.animate( posStyle, {
                    duration: ANI_DURATION,
                    complete: function () {
                        _isDisabled = false;
                    }
                });
            } else {
                _$ul.css( posStyle );
                _isDisabled = false;
            }
        }

        //선택된 item 활성화
        function selectItem ( originIdx, silent ) {
            if ( _originSelectedIdx == originIdx || _isDisabled ) return;

            _$items.removeClass( 'active' ).filter( '[data-origin-idx=' + originIdx + ']' ).addClass( 'active' );
            _originSelectedIdx = originIdx;

            //이벤트 전달
            if ( !silent ) _$target.trigger( 'slidelist:change', originIdx, _originItemLength );
        }

        function setAutoPlay () {
            if ( !_options.autoPlay ) return;

            _timer = new $B.utils.Timer( DELAY_TIME, _itemLength, {
                onTimer: function (e) {
                    _listIndexManager.next();
                },
                onComplete: function (e) {
                    _timer.reset().start();
                }
            }).start();
        }

        //좌표 반환
        function indexToPosition ( idx ) {
            return -( idx * _itemSize );
        }

        //ul 사이즈 설정
        function setSize () {
            if ( _itemLength > VIEW_LENGTH ) {
                _$ul.css( (AXIS === 'horizontal') ? 'width' : 'height', _itemLength * _itemSize + 'px' );
            }
        }

        function getSize () {
            if ( _itemLength > 1 ) {
                _itemSize = Math.max( getItemSize(0), getItemSize(1) );
            } else {
                _itemSize = getItemSize( 0 );
            }
        }

        function getItemSize ( idx ) {
            var marginFirstName, marginLastName, methodName;

            if ( AXIS === 'horizontal' ) {
                marginFirstName = 'marginLeft';
                marginLastName = 'marginRight';
                methodName = 'outerWidth';
            } else {
                marginFirstName = 'marginTop';
                marginLastName = 'marginBottom';
                methodName = 'outerHeight';
            }

            var marginFirst = _$items.eq( idx ).css( marginFirstName ),
                marginLast = _$items.eq( idx ).css( marginLastName );

            marginFirst = Number( $B.style.parseValue(marginFirst).value );
            marginLast = Number( $B.style.parseValue(marginLast).value );

            return _$items.eq( idx )[methodName]() + marginFirst + marginLast;
        }

        //좌우화살표 상태 처리
        function setArrowState ( idx ) {
            if ( _itemLength <= VIEW_LENGTH ) {
                _$prevBtn.attr( 'disabled', true ).addClass( 'disabled' );
                _$nextBtn.attr( 'disabled', true ).addClass( 'disabled' );
                _$controller.addClass( 'disabled' );
            } else {
                if ( !_options.loop ) {
                    //prev
                    if ( idx > 0 ) {
                        _$prevBtn.attr( 'disabled', false ).removeClass( 'disabled' );
                    } else {
                        _$prevBtn.attr( 'disabled', true ).addClass( 'disabled' );
                    }

                    //next
                    if ( idx < _maxIdx  ) {
                        _$nextBtn.attr( 'disabled', false ).removeClass( 'disabled' );
                    } else {
                        _$nextBtn.attr( 'disabled', true ).addClass( 'disabled' );
                    }
                }
            }
        }
    };

    /**
     * 리스트형 Index Data 관리
     * @param {Int}         totalLength
     * @param {Object}      options
     *      - {Int}         viewLength  화면의 보여질 갯수, 기본설정=1
     *      - {Int}         moveLength 이동시 한 구간의 갯수, 기본설정=viewLength
     *      - {Boolean}     loop        아이템이 끝이 없이 무한으로 보여져야 할때 true, 기본설정=false
     * @param {Object}      dispatchs   전달 받을 이벤트들
     *      - {Function}    onChangeOriginIndex   index가 변경되었으시 callback {type:'change', originIndex, index}
     *      - {Function}    onChangeIndex   index가 변경되었으시 callback {type:'change', originIndex, index}
     *      - {Function}    onCorrectIndex  rangeIndex 보정이 발생시 callback {type:'correct', originIndex, index}
     */
    var ListIndexManager = function ( totalLength, options, dispatchs ) {
        var _options = ( typeof options === 'object' ) ? options : {},
            _dispatchs = ( typeof dispatchs === 'object' ) ? dispatchs : {};

        var VIEW_LENGTH = _options.viewLength || 1,
            MOVE_LENGTH = ( _options.moveLength ) ? Math.min( VIEW_LENGTH, _options.moveLength ) : VIEW_LENGTH;

        var _selectIdx = -1,
            _moveIdx = -1,
            _originIdx = -1,
            _originStartIdx = 0, _originEndIdx = 0,
            _originLength = totalLength,
            _totalLength = _originLength;

        // ========== Initialize ========== //
        initialize();

        // ========== Public Methods ========== //

        //구간이동
        this.prev = function () {
            var originIdx = correctOriginIdx( _originIdx - MOVE_LENGTH );
            setOriginIdxToSelectIdx( originIdx, -MOVE_LENGTH, 'prev' );
            return this;
        };

        this.next = function () {
            var originIdx = correctOriginIdx( _originIdx + MOVE_LENGTH );
            setOriginIdxToSelectIdx( originIdx, MOVE_LENGTH, 'next' );
            return this;
        };

        this.setIndex = function ( originIdx, rangeLength, direction ) {
            var originIdx = correctOriginIdx(originIdx);
            eventDispatch( 'change-origin-index', originIdx );
            setOriginIdxToSelectIdx( originIdx, rangeLength, direction );
            return this;
        };

        // ========== Protected Methods ========== //
        function initialize () {
            if ( _options.loop ) {
                if ( _totalLength > VIEW_LENGTH ) {
                    _totalLength = _originLength + ( VIEW_LENGTH * 2 );
                    _originStartIdx = VIEW_LENGTH;
                    _originEndIdx = _originStartIdx + _originLength - 1;
                }
            }

            _selectIdx = _originStartIdx;
            _moveIdx = _selectIdx;
            _originIdx = 0;

            eventDispatch( 'correct-index', _originStartIdx );
            eventDispatch( 'change-origin-index', 0 );
        }

        function setOriginIdxToSelectIdx ( originIdx, rangeLength, direction ) {
            //이동할 index를 미리 확인하여, 보정할것인지 바꿀것인지 결정
            var nextSelectIdx = _selectIdx + rangeLength,
                isCorrect = isCorrectSelecteIdx( nextSelectIdx, direction ),
                correctSelectIdx;

            //console.log( 'originIdx:', originIdx, '  _selectIdx:', _selectIdx, '  direction:', direction );
            //console.log( 'nextSelectIdx:', nextSelectIdx, '  _moveIdx:', _moveIdx, ' 보정?:', isCorrect );

            if ( _options.loop ) {
                if ( isCorrect ) {
                    correctSelectIdx = getCorrectSelectIdx( _moveIdx, direction );
                    eventDispatch( 'correct-index', correctSelectIdx );
                    //보정이후 selectIdx도 보정
                    nextSelectIdx = getCorrectSelectIdx( nextSelectIdx, direction );
                    eventDispatch( 'change-index', nextSelectIdx );
                } else {
                    eventDispatch( 'change-index', nextSelectIdx );
                }
            } else {
                nextSelectIdx = getCorrectSelectIdx( nextSelectIdx, direction );
                eventDispatch( 'change-index', nextSelectIdx );
            }
        }

        function getCorrectSelectIdx ( selectIdx, direction ) {
            var result = 0;

            if ( _options.loop ) {
                var endIdx = ( _originStartIdx + _originLength );

                if ( direction === 'next' ) {
                    result = ( selectIdx + VIEW_LENGTH ) - endIdx;
                } else {
                    result = endIdx - ( VIEW_LENGTH - selectIdx );
                }
            } else {
                var rest = _originLength % VIEW_LENGTH;

                if ( selectIdx >= _originLength - rest ) {
                    result = selectIdx - ( MOVE_LENGTH - rest );
                } else if ( selectIdx < 0 ) {
                    result = 0;
                } else {
                    result = selectIdx;
                }
            }

            return result;
        }

        function isCorrectSelecteIdx ( selectIdx, direction ) {
            var result = false;

            if ( direction === 'next' ) {
                if ( selectIdx + VIEW_LENGTH > _totalLength - 1 ) result = true;
            } else {
                if ( selectIdx < 0 ) result = true;
            }

            return result;
        }

        //한번 움직일양 계산
        function getRangeLength ( originIdx ) {
            var currentOriginIdx = selectIdxToOriginIdx( _selectIdx ),
                result = 0;

            if ( originIdx > _originLength ) {
                result = originIdx - _originLength;
            } else if ( originIdx < 0 ) {
                result = originIdx;
            } else {
                result = originIdx - currentOriginIdx;
            }
            return result;
        }

        //selectIdx 대비 originIdx 반환
        function selectIdxToOriginIdx ( selectIdx ) {
            var result = -1;

            if ( selectIdx < _originStartIdx ) {
                result = ( _originLength - _originStartIdx ) + selectIdx;
            } else if ( _options.loop && selectIdx > _originEndIdx ) {
                result = selectIdx - ( _originLength + _originStartIdx );
            } else {
                result = selectIdx - _originStartIdx;
            }

            return result;
        }

        //origin index 최대, 최소값 보정
        function correctOriginIdx ( originIdx ) {
            if ( originIdx < 0 ) {
                originIdx = _originLength + originIdx;
            } else if ( originIdx > _originLength - 1 ) {
                originIdx = originIdx - _originLength;
            }

            return originIdx;
        }

        //다음 화면의 보여지는 영역에 있는지 체크
        function isViewNextIndex ( nextSelectIdx, auto ) {
            var range = ( auto ) ? MOVE_LENGTH : VIEW_LENGTH;
            return _moveIdx <= nextSelectIdx && ( _moveIdx + range ) > nextSelectIdx;
        }

        function eventDispatch ( type, idx ) {
            var callIdx = _moveIdx;

            if ( type === 'change-origin-index' ) {
                _originIdx = idx;
            } else {
                _selectIdx = idx;

                if ( type === 'change-index' ) {
                    //var isView = isViewNextIndex(idx);
                    //console.log( '---isView:', isView, ' idx:', idx );
                    //
                    //if ( isView ) {
                    //    return;
                    //} else {
                    //    _moveIdx = idx;
                    //}

                    _moveIdx = idx;

                    callIdx = _moveIdx;
                } else {
                    callIdx = idx;
                    _moveIdx = idx;
                }

                _originIdx = selectIdxToOriginIdx( _selectIdx );
            }

            var eventName = 'on' + $B.string.capitalize( $B.string.camelCase(type) );
            if ( _dispatchs[eventName] ) _dispatchs[eventName].call( this, {type: type, originIndex: _originIdx, index: callIdx} );
        }
    };


    /**
     * NumberCounter
     * @constructor
     */
    var NumberCounter = function ( $target ) {
        var _$target = $target,
            _$increase = _$target.find( '.ui-increase' ),
            _$decrease = _$target.find( '.ui-decrease' ),
            _$input = _$target.find( '.ui-number-input' );

        var _min = 0,
            _max = 1,
            _isDisabled = false;


        // ========== Initialize ========== //
        initialize();

        // ========== Protected Methods ========== //

        function initialize () {
            setOption();
            setBtnStatus( _$input.val() );

            _$increase.on( 'click', buttonHandler );
            _$decrease.on( 'click', buttonHandler );
            _$input.on( 'numbercounter:change_value', function (e, value) {
                value = Number( value );
                rangeCorrection( value );
                setBtnStatus( value );
            });
            _$target.addClass( 'ui-number-counter-apply' );
        }

        function setOption () {
            _min = _$input.attr( 'min' );
            _max = _$input.attr( 'max' );
            _isDisabled = _$input.attr( 'disabled' );

            if ( _isDisabled ) {
                _$input.addClass( 'disabled' );
            } else {
                _$input.removeClass( 'disabled' );
            }

            if ( !_min ) _min = 0;
            if ( !_max ) _max = 1;
            if ( !_min > _max ) _min = _max;
        }

        function buttonHandler (e) {
            var count = _$input.val();

            if ( $(e.currentTarget).hasClass('ui-increase') ) {
                count++;
            } else {
                count--;
            }

            rangeCorrection( count );
            setBtnStatus( count );
        }

        //최소, 최대 값을 벗어나면 조절하여 input에 출력
        function rangeCorrection ( val, silent ) {
            var oldValue = _$input.val();

            if ( _max < val ) {
                val = _max;
            } else if ( _min > val ) {
                val = _min;
            }

            _$input.val( val );

            if ( !silent && oldValue !== val ) {
                _$input.trigger( 'change' );
            }
        }

        //버튼 상태 설정
        function setBtnStatus ( val ) {
            if ( _isDisabled ) {
                _$increase.attr( 'disabled', true ).addClass( 'disabled' );
                _$decrease.attr( 'disabled', true ).addClass( 'disabled' );

                return;
            }

            if ( _max <= val ) {
                _$increase.attr( 'disabled', true ).addClass( 'disabled' );
            } else {
                _$increase.attr( 'disabled', false ).removeClass( 'disabled' );
            }
            if ( _min >= val ) {
                _$decrease.attr( 'disabled', true ).addClass( 'disabled' );
            } else {
                _$decrease.attr( 'disabled', false ).removeClass( 'disabled' );
            }
        }
    };


    /**
     * SelectBox
     * @constructor
     */
    var SelectBox = function ( $target, id, options ) {
        var _options = options || {},
            _id = id;

        var _this = this,
            _$target = $target,
            _$originSelect = $target.find( 'select.ui-input-select' ),
            _$face = $target.find( '.ui-select-box-face' ),
            _$container = _$target.find( '.ui-select-options' );

        var _isOpen = false,
            _selectIdx = -1;

        // ========== Initialize ========== //
        initialize();

        // ========== Public Methods ========== //
        this.closeOption = function () {
            if ( _isOpen ) {
                _$container.removeClass( 'active' );
                _$container.removeClass( 'select_bottom' );
                _isOpen = false;
            }
        };

        // ========== Protected Methods ========== //

        function initialize () {
            update( true );
            addEvent();

            _$originSelect.css( 'display', 'none' );
            _$target.addClass( 'ui-select-box-apply' );
        }

        function update ( silent ) {
            drawFace();
            drawOptions();
            setSelectOption( _$originSelect.find('option[selected=selected]' ).index(), silent );
            setSelectDisabled();
            setSelectBoxWidth();
        }

        function addEvent () {
            _$target.on( 'selectbox:updated', update );
            _$target.on( 'click', '.ui-select-box-face', toggleList );
            _$container.on( 'click', '.ui-select-option > a', optionClick );
        }

        function setSelectBoxWidth () {
            if ( _options.designOption ) return;
            _$target.css( 'width', _$originSelect.outerWidth() );
        }

        function drawFace () {
            if ( _$face.length < 1 ) {
                _$face = $( '<a href="javascript:;" class="select ui-select-box-face"></a>' );
                _$face.insertBefore( _$originSelect );
            }

            if ( _$originSelect.attr('disabled') ) {
                _$face.addClass( 'disabled' );
            } else {
                _$face.removeClass( 'disabled' );
            }
        }

        function drawOptions () {
            if ( _$container.length < 1 ) {
                _$container = $( '<ul class="option_box ui-select-options"></ul>' );
            }

            if ( _options.designOption ) {
                return;
            } else {
                _$container.find( '>.ui-select-option' ).remove();
            }

            var options = '';

            _$originSelect.find( 'option' ).each( function ( idx, el ) {
                options += '<li class="ui-select-option"><a href="javascript:;">' + $(el).text() + '</a></li>';
            });

            _$container.append( options );
            _$target.append( _$container );
        }

        function setOptionHeight () {
            _$container.css( 'height',  'auto' );

            var minH = 150,
                winH = $( window ).height(),
                scrollY = $( window ).scrollTop(),
                posY = _$container.offset().top - scrollY,
                optionH = _$container.outerHeight(),
                faceH = _$face.outerHeight(),
                bottomH = winH - posY,//아랫공간
                topH = winH - bottomH - faceH,//윗공간
                posH = bottomH;

            //list 위아래 보여지기 설정
            //아랫공간이 작을때
            if ( topH > bottomH && bottomH < minH && bottomH < optionH ) {
                _$container.addClass( 'select_bottom' );
                posH = topH;
            } else {
                _$container.removeClass( 'select_bottom' );
            }

            if ( posH < optionH ) {
                _$container.css( 'height',  posH + 'px' );
            }

            _$container.scrollTop( 0 );
        }

        function changeSelectTitle ( text ) {
            _$face.text( text );
        }

        function setSelectOption ( selectIdx, silent ) {
            selectIdx = ( selectIdx < 0 ) ? 0 : selectIdx;

            var $options = _$originSelect.find( '>option' );

            $options.attr( 'selected', false );
            $options.eq( selectIdx ).attr( 'selected', true );

            _$container.find( '.ui-select-option > a' ).each( function ( idx, el ) {
                var $option = $( el );

                if ( selectIdx === idx ) {
                    $option.addClass( 'selected' );
                } else if ( $option.hasClass('selected') ) {
                    $option.removeClass( 'selected' );
                }
            });

            changeSelectTitle( $options.eq(selectIdx).text() );

            if ( silent !== true && _selectIdx !== selectIdx ) {
                _$originSelect.trigger( 'change' );
            }

            _selectIdx = selectIdx;
        }

        function setSelectDisabled () {
            var $options = _$originSelect.find( 'option' );

            _$container.find( '.ui-select-option > a' ).each( function ( idx, el ) {
                if ( $options.eq(idx).attr('disabled') ) {
                    $( el ).addClass( 'disabled' );
                }
            });
        }

        function toggleList (e) {
            if ( _$face.hasClass('disabled') ) return;

            _closeSelectOptions( _id );

            if ( _isOpen ) {
                _this.closeOption();
            } else {
                openOption();
            }

            return false;
        }

        function openOption () {
            _$container.addClass( 'active' );
            setOptionHeight();
            _isOpen = true;
        }

        function optionClick () {
            var $option = $( this ).parent();

            var idx = $option.index(),
                disabled = $option.find( '>a' ).hasClass( 'disabled' );

            if ( !disabled ) {
                toggleList();
                setSelectOption( idx );
            }

            return false;
        }
    };


    //select options 열린것들 닫기
    function _closeSelectOptions ( excludeId ) {
        var length = _selectBoxs.length;

        for ( var i = 0; i < length; ++i ) {
            if ( excludeId !== i ) {
                _selectBoxs[i].closeOption();
            }
        }
    }

    $( document ).on( 'click', _closeSelectOptions );
})(jQuery, ixBand);