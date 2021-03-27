var Modal	=	function ( ) {

    var ModalDiv_	=	null;   //  모달    div
    var MirrorDiv_  =   null;   //  유리판  div
    var ContentDiv_	=	null;   //  내용    div

    //  IE6 check
    var is_ie6  =   false;
    if ( navigator.userAgent.indexOf('MSIE 6.0') > -1 ){
        is_ie6  =   true;
    }

    var set_IE6	=	function ( mode ) { //  if IE6, hide all selectboxes in the parent page.

        var value	=	(mode === 'show')? 'visible' : 'hidden';

        var select_s	=	document.body.getElementsByTagName('select');
        var s_inModal   =   ContentDiv_.getElementsByTagName('select');
        var doHidden    =   true;

        for ( var i = 0 ; i < select_s.length ; i++ ) {
            doHidden    =   true;

            if (s_inModal.length)
            {
                for (var j=0; j < s_inModal.length; j++)
                {
                    if (s_inModal[j] === select_s[i])
                    {
                        doHidden    =   false;
                        continue;
                    }
                }
            }

            if(doHidden) select_s[i].style.visibility	=	value;
        }
    };

    //  윈도우 사이즈 변경시, 스크롤 이동시 유리판의 사이즈를 변경한다.
    var set_modalSize   =   function( type ){
        if(MirrorDiv_){
            if ( document.documentElement.scrollHeight > document.body.scrollHeight ) { //console.log(document.body.scrollHeight + ', ' + document.documentElement.scrollHeight);
                MirrorDiv_.style.height = document.documentElement.scrollHeight + 'px';
            } else {
                MirrorDiv_.style.height = document.body.scrollHeight + 'px';
            }

            if ( document.documentElement.scrollWidth > document.body.scrollWidth ) {
                MirrorDiv_.style.width	= (type=='onresize')? "100%": (document.documentElement.scrollWidth-21) + 'px';
            } else {
                MirrorDiv_.style.width	= (type=='onresize')? "100%": document.body.scrollWidth + 'px';
            }
        }
    };

    //  function for closing modal.
    var closeModal  =   function(){

        //document.getElementById('contentBody').style.overflow  =   ""; //  스크롤바 보이기.
		var ieH	=	document.getElementById('ieH');
		if(ieH) ieH.parentNode.removeChild(ieH);

        if(is_ie6) set_IE6('show');

        ContentDiv_.style.display	=	"none";
        document.body.appendChild( ContentDiv_ );
        document.body.removeChild( ModalDiv_ );
    };

    //  onresize 이벤트 등록
    if (window.addEventListener) {
        window.addEventListener('resize', function(){ set_modalSize('onresize'); }, false);
		window.addEventListener('scroll', function(){ set_modalSize('onscroll'); }, false);
    } else if (window.attachEvent) {
        window.attachEvent('onresize', function(){ set_modalSize('onresize'); } );
		window.attachEvent('onscroll', function(){ set_modalSize('onscroll'); });
    }

    //	스크롤된 현재 영역에 모달이 보이도록 marginTop 조절
    var setContentDiv_top	=	function(dv){
        var	pixel	=	0;

        if(document.documentElement.scrollTop){	//	IE strict mode
            pixel	=	document.documentElement.scrollTop;
        }else if(document.body.scrollTop){		//	IE quirks mode
            pixel	=	document.body.scrollTop;
        }else if(window.scrollY){	//	Netscape
            pixel	=	window.scrollY;
        }

        var _innerHeight    =   0;

        if ( window.innerHeight ){
            _innerHeight    =   window.innerHeight;
        }else{
            //  IE는 innerHeigt 를 지원하지 않기에, 다른 방법을 쓴다.
            var dx  =   document.createElement('div');
            dx.id   =   "ieH";
            dx.style.cssText    =   "position:absolute;top:100%;left:100px;z-index:1;visibility:hidden;";
            document.body.appendChild( dx );

            document.getElementById('ieH').style.top = (document.getElementById('ieH').offsetTop)+'px';
            _innerHeight    =   document.getElementById('ieH').offsetTop;
        }

        var realTop = pixel + parseInt( (_innerHeight / 2) - (dv.scrollHeight/2) ) + 'px';
        dv.style.marginTop	=	realTop;
    }

    var funzList = [];
    var addFunz = function(f){
        funzList.push(f);
    };

    return {
        show	:	function( id, modal_click, boolFixed ){	//	args : (컨텐츠 아이디, 유리판 클릭시 닫기여부, fixed 여부)

            //document.getElementById('wrap').style.overflow  =   "hidden";   //  스크롤바 없애기.

            if(funzList.length > 0){
                for ( var i = 0; i < funzList.length ; i++ )
                {
                    funzList[i]();
                }
            }

            ContentDiv_		=	document.getElementById(id);

            if( !ContentDiv_ ){
                alert(id + '는 존재하지 않는 태그 아이디입니다.');
                return;
            }

            if(is_ie6) set_IE6('hide');

            //  ModalDIV_ setup
            ModalDiv_	=	document.createElement('div');

            ModalDiv_.style.cssText =   "position:absolute;z-index: 1000;top:0;left:0;width:100%;";


            //  MirrorDiv_ setup
            MirrorDiv_  =   document.createElement('div');

            if( modal_click ) MirrorDiv_.onclick	=	closeModal;

            var csText  =   "position:absolute; z-index : 1; top:0;left:0;width:100%;";
            csText     +=   "height:100%;background-color:#000000;";
            csText     +=   "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=55)';filter:Alpha(opacity=55); opacity:0.55";

            MirrorDiv_.style.cssText =  csText;
            MirrorDiv_.style.height  =  ModalDiv_.style.height; //  for IE6

            set_modalSize();

            //  ContentDiv_ setup
            csText  =   "z-index:2;display:block;margin:0 auto;";
            csText  +=  "position:relative;";


            ContentDiv_.style.cssText    =   csText;

            ModalDiv_.appendChild( ContentDiv_ );
            ModalDiv_.appendChild( MirrorDiv_ );
            document.body.appendChild( ModalDiv_ );

			if(!boolFixed) setContentDiv_top(ContentDiv_); //  이곳에 놔야 IE6 가 올바른 값을 인식한다.
        },

        close	:	function ( ) {
            closeModal();
        },

        addFunc :   function (f){
            addFunz(f);
        }
    }
}( );