$(document).ready(function(){
	// setup ul.tabs to work as tabs for each div directly under div.panes
	$(function() {
		$("ul.tabs").tabs("div.panes > div");
	});
});
