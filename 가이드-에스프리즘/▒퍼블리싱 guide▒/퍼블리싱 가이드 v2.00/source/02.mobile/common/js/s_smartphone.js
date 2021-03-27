var wap=function(){     
    var readyFunc = [];     
    function ready() {
        for(var i=0, l=readyFunc.length; i<l; i++) {
            readyFunc[i]();
        }
        readyFunc = null;
        document.removeEventListener('DOMContentLoaded', ready, false);
    };
    return{     
    DomReady:function (fn) {
        if (readyFunc.length == 0) {
            document.addEventListener('DOMContentLoaded', ready, false);
        }
        readyFunc.push(fn);
    },          
    getObj : function (id){     
        return document.getElementById(id);
    },          
    hideElement:function(id){
        var obj = wap.getObj(id);
        if(obj){
            obj.style.display="none";
        }       
    },
    showElement:function(id){           
        var obj = wap.getObj(id);
        if(obj){
            obj.style.display="block";
        }   
    },              
    updatePageInd:function(id,index){           
        document.querySelector(id+'> li.active').className = '';            
        document.querySelector(id+'> li:nth-child('+index+')').className = 'active';
    },
    redirect:function(url){
        window.location.href=url;
    },
    scrollNext:function(moduleId){
        if(moduleId == 'dl'){
            dlScroll.scrollToPage('next', 0);
        }           
    },
    scrollPrev:function(moduleId){
        if(moduleId == 'dl'){
            dlScroll.scrollToPage('prev', 0);
        }           
    },
    sendReport:function(url) {
        try{ var req = new XMLHttpRequest();
            req.open("POST", url+"&ajax=true", true);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  
            req.onreadystatechange = function(){
                if(req.readyState == 4 && req.status == 200) {
                //  alert(req.responseText);
                }
            }
            req.send(null);
        } catch(e){}
    }
    };
}();