(function($) {

    $.fn.magefister4jPaging = function(options) {
        var opts = $.extend({},$.fn.magefister4jPaging.defaults,options);

        var original = this;

        var action = {

            init : function() {
                var pageNo = Number(opts.pageNo);
                var totalPage = Math.ceil(opts.totalSize/opts.pageSize);
                var totalPageList = Math.ceil(totalPage/opts.pageListSize);
                var pageList = Math.ceil(pageNo/opts.pageListSize);

                if (pageList < 1) pageList = 1;
                if (pageList > totalPageList) pageList = totalPageList;
                var startPageList = (pageList - 1) * opts.pageListSize + 1;
                var endPageList = startPageList + opts.pageListSize - 1;
                if (startPageList < 1) startPageList = 1;
                if (endPageList > totalPage) endPageList = totalPage;
                if (endPageList < 1) endPageList = 1;

                var innerHTML = action.getPageItemLink(1, '<img src="../resources/images/common/btnPageFirst.png" alt="처음 페이지" />', (pageNo > 1), 'btnNavi');

                innerHTML += action.getPageItemLink((pageNo - 1), '<img src="../resources/images/common/btnPagePrev.png" alt="이전 페이지" />', (pageNo > 1), 'btnNavi');

                for (var i = startPageList; i <= endPageList; i++) {
                    innerHTML += action.getNumberLink(i, null, (pageNo != i), ((pageNo == i)? 'current': ''));
                    if (i < endPageList) {
                        //innerHTML += ' | ';       // separate action
                    }
                }
                innerHTML += action.getPageItemLink((pageNo + 1),'<img src="../resources/images/common/btnPageNext.png" alt="다음 페이지" />',(pageNo < totalPage), 'btnNavi');
                innerHTML += action.getPageItemLink(totalPage, '<img src="../resources/images/common/btnPageLast.png" alt="마지막 페이지" />', (pageNo < totalPage), 'btnNavi');
                $(original).html(innerHTML);
            },

            getNumberLink : function(pageNo, text, useLink, className) {

                if (useLink) {
                    return '<a href="'+ opts.url + '?page=' + pageNo + '">' + ((text != null && text != '')? text: pageNo) + '</a>\n';
                }
                else {
                    return '<span ' + ((className != null && className != '')? ' class="' + className + '"': '') +'>' +
                            ((text != null && text != '')? text: pageNo) +
                            '</span>\n';
                }
            },

            getPageItemLink : function(pageNo, text, useLink, className) {
                if(useLink) {
                    return  '<span '  + ((className != null && className != '')? 'class="' + className + '"': '') + '>' +
                            '<a href="'+ opts.url + '?page=' + pageNo + '">' +
                            ((text != null && text != '')? text: pageNo) +
                            '</span>' +
                            '</a>\n';
                }
                else {
                    if(opts.showUnlinkedSymbols) {
                        return '<span>' +
                                    ((text != null && text != '')? text: pageNo) +
                                '</span>\n';
                    } else {
                        return '\n';
                    }
                }
            }

        };
        action.init();
    };

    $.fn.magefister4jPaging.defaults = {
        totalSize : 0,      // total size
        pageNo : 1,         // current page No
        pageSize : 10,     // list per page count
        pageListSize : 5,  // page bar count 1 2 3 4 5
        pageClickFunctionName : 'page_click',
        showUnlinkedSymbols : true
    };

})(jQuery);