
window.onload = function() {
  if (!document.getElementsByTagName) return false;
  var links = document.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    if (links[i].getAttribute("class") == "popup1") {
      links[i].onclick = function() {
       popUp1(this.getAttribute("href"));
        return false;
      } 
    }else if(links[i].getAttribute("class") == "popup2") {
      links[i].onclick = function() {
       popUp2(this.getAttribute("href"));
        return false;
      } 
    }
  }
}

function popUp1(winURL1) {
  window.open(winURL1,"popup","width=640,height=480");
}
function popUp2(winURL2) {
  window.open(winURL2,"popup","width=800,height=600");
}