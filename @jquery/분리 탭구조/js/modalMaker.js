
if (typeof(UTIL) != "object" || UTIL == null) alert("[modalMaker.js] required [UTIL.js]");

var modalMaker = function () {

    var _modal_layer;  //  all background layer

    var _content_layer; // 화면 가운데 위치하는 content layer.

    var _is_ie6 = false; //  ie6 인지 체크하기

    var _is_open = false;

    /**
     *  if IE6, hide all selectboxes in the parent page.
     */
    var _set_ie6 = function (mode) {

        var _selects  =	document.getElementsByTagName('select');
        var _selects_inContentLayer = _content_layer.getElementsByTagName('select');
        var _do_hidden  = true;

        for (var i = 0 ; i < _selects.length ; i++) {
            _do_hidden = true;

            if (_selects_inContentLayer.length)
            {
                for (var j=0; j < _selects_inContentLayer.length; j++)
                {
                    if (_selects_inContentLayer[j] === _selects[i])
                    {
                        _do_hidden = false;
                        continue;
                    }
                }
            }

            if (_do_hidden) _selects[i].style.visibility = (mode === 'show')? 'visible' : 'hidden';
        }
    };

    /**
     *  resize, scroll 이동시 modal 레이어의 사이즈 항상 꽉 차도록 적용.
     */
    var _set_modalLayer_size = function (type) {
        if (_content_layer)
        {
            _set_contentLayer_pos(_content_layer, type);
            _modal_layer.style.width = '100%';
            _modal_layer.style.height = _get_totalHeight();
            if (type == 'onscroll')
            {
                // 작은 창에서 가로 스크롤 이동하면 배경이 제대로 안먹히는 경우가 있다.
                var docEle = parseInt(document.documentElement.scrollWidth);
                var docBody = parseInt(document.body.scrollWidth);
                var which;
                if (docEle > docBody)
                {
                    which = docEle;
                } else {
                    which = docBody;
                }

                _modal_layer.style.width = which + 'px';
            }
        }
    };

    /**
     *  document 가 얼마만큼 스크롤 되었는지를 반환.
     */
    var _get_scrollInfo = function () {

        var result = {};
        var	sc_top = 0;
        var sc_left = 0;

        if (document.documentElement.scrollTop) {	//	IE strict mode
            sc_top	=	document.documentElement.scrollTop;
            sc_left	=	document.documentElement.scrollLeft;
        } else if (document.body.scrollTop) {		//	IE quirks mode
            sc_top	=	document.body.scrollTop;
            sc_left	=	document.body.scrollLeft;
        } else if (window.scrollY) {	//	Netscape
            sc_top	=	window.scrollY;
            sc_left	=	window.scrollX;
        }

        result.scrollTop = sc_top;
        result.scrollLeft = sc_left;

        return result;
    };

    /**
     *  function for closing modal.
     */
    var _closeModal  =   function(){

        if(_is_ie6) _set_ie6('show');

        _content_layer.style.display	=	"none";
        _modal_layer.parentNode.removeChild(_modal_layer);

        document.body.appendChild(_content_layer);
        _is_open = false;
    };

    /**
     *  스크롤된 현재 영역에 content layer가 항상 정중앙에 보이도록 top, left 조절.
     */
    var _set_contentLayer_pos =	function (dv, type) {

        // onscroll 이벤트시 가운데 정렬일 경우, content layer 가 fixed 라면 조정할 필요가 없다.
        if (type == 'onscroll' && dv.style.position == 'fixed') return;

        var scrolled_info = _get_scrollInfo();   //  document 가 스크롤된 양 가져오기.

        var content_width = (dv.style.width)? dv.style.width : dv.scrollWidth;
        var content_height = (dv.style.height)? dv.style.height : dv.scrollHeight;

        var top_value = '';

        if (dv.style.position !== 'fixed') {
        	top_value = scrolled_info.scrollTop + parseInt ((UTIL.get_innerHeight() / 2) - (parseInt(content_height)/2));
        } else {
        	top_value = parseInt ((UTIL.get_innerHeight() / 2) - (parseInt(content_height)/2));
        }

        if (top_value <= 0) top_value = '20';

        var left_value = '';
        if (dv.style.position !== 'fixed') {
        	left_value = scrolled_info.scrollLeft + parseInt ((UTIL.get_innerWidth() / 2) - (parseInt(content_width)/2));
        } else {
        	left_value = parseInt ((UTIL.get_innerWidth() / 2) - (parseInt(content_width) / 2));
        }
        if (left_value <= 0) left_value = '20';

        dv.style.top  = top_value + 'px';
        dv.style.left = left_value + 'px';
    };

    /**
     *  어느 상황에서든, page 의 최대 높이값.
     */
    var _get_totalHeight = function(){
        var h = 0;
        if (document.documentElement.scrollHeight < document.documentElement.clientHeight)
        {
            h = document.documentElement.clientHeight;
        } else {
            h = document.documentElement.scrollHeight;
        }

        return h + 'px';
    };

    /**
     *  content layer 초기화
     */
    var _content_layer_setup = function (dv, user_option) {

        dv.style.cssText = dv.style.cssText + ';' + 'position: absolute; z-index: 91; top: 0; left: 0; display: block; margin: 0 auto;';
        document.body.appendChild(dv);

        if (!_is_ie6 && user_option.fixed == 'true') dv.style.position = 'fixed';

        _set_contentLayer_pos(dv); //  이곳에 놔야 IE6 가 올바른 값을 인식한다.
    };

    /**
     *  modal layer 초기화
     */
    var _modal_layer_setup = function (opt) {
        _modal_layer = document.body.appendChild (document.createElement('div'));
        _modal_layer.style.cssText = 'position: absolute; z-index: 90; top:0; left:0; width:100%; background:black;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity='+ opt.opacity +'); filter:Alpha(opacity=' + opt.opacity + '); opacity:' + (opt.opacity / 100 );
        _modal_layer.style.backgroundColor = opt.color;
        _modal_layer.style.height = _get_totalHeight ();

        if (opt.close_onClick) _modal_layer.onclick = _closeModal;
    };

    return {
        /**
         * @param id {string} - modal 로 뛰우고픈 element id
         * @param user_option {object} - 사용자 정의 object
         *      - user_option.color : 모달 배경색 color. default 'black'
         *      - user_option.opacity : 모달 배경의 투명도. default '30'
         *      - user_option.close_onClick : 모달 배경 클릭시 창 닫히는 여부. default false.
         */
		show : function (id, user_option) { 	//	args : (컨텐츠 아이디, 유리판 클릭시 닫기여부, fixed 여부)

            if (_is_open)  return;

            if (!user_option)
            {
                user_option = {};
            }

            if (!user_option.color) user_option.color = 'black';

            if (!user_option.opacity) user_option.opacity = 30;

            if (!user_option.fixed) user_option.fixed = 'true';

            switch (typeof id)
            {
                case 'string' : _content_layer = document.getElementById(id); break;
                case 'object' : _content_layer = id; break;
            }

            if (!_content_layer) {
                alert(id + '는 존재하지 않는 태그 아이디입니다.');
                return;
            }

            // _modal_layer setup
            _modal_layer_setup (user_option);

            // _content_layer setup
            _content_layer_setup(_content_layer, user_option);

            // resize event register
			UTIL.addEvent(window, 'resize', function () {
				_set_modalLayer_size('onresize');
			});

            // scroll event register
            if (user_option.fixed == 'true')
            {
                UTIL.addEvent(window, 'scroll', function () {
                    _set_modalLayer_size('onscroll');
                });
            }

            _is_open = true;

            // ie6 여부 체크하기.
            if (/MSIE 8/.test(navigator.appVersion))
            {
                _is_ie6 = false;
            } else if (/MSIE 7/.test(navigator.appVersion))
            {
                _is_ie6 = false;
            } else if (/MSIE 6/.test(navigator.appVersion))
            {
                _is_ie6 = true;
            }

			if (_is_ie6) _set_ie6('hide');
        },

        close	:	function ( ) {
            _closeModal();
        },

        change_content: function (dv) {
            _content_layer.style.display = 'none';

            if (typeof dv === 'string') dv = document.getElementById(dv);

            _content_layer = dv;
            _content_layer_setup(_content_layer);
        }
    }
};