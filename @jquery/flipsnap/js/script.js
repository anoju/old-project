// normal ===================================//
Flipsnap('.snap');

// distance ===================================//
Flipsnap('.snap2', {
	distance: 230
});

// maxPoint ===================================//
Flipsnap('.snap3', {
	distance: 160, // 80px * 2
	maxPoint: 3    // move able 3 times
});

// transitionDuration ===================================//
Flipsnap('.snap4', {
	distance: 230,
	transitionDuration: 1000
});

// pointmove ===================================//
/*var $pointer = $('.pointer span');
var flipsnap5 = Flipsnap('.snap5', {
	distance: 230
});
flipsnap.element.addEventListener('fspointmove', function() {
	$pointer.filter('.current').removeClass('current');
	$pointer.eq(flipsnap.currentPoint).addClass('current');
}, false);
*/
// add,remove ===================================//
var $flipsnap = $('.snap6');
var distance = 230;
var padding = 30;
var flipsnap = Flipsnap(".snap6", {
	distance: distance
});
var width = distance + padding;

	// append new item
$(".add").click(function() {
	var newNumber = $flipsnap.find(".item").size() + 1;
	var $item = $("<div>").addClass("item").text(newNumber);
	width += distance;
	$flipsnap.append($item).width(width);
	flipsnap.refresh();
});

	// remove last item
$(".remove").click(function() {
	var $items = $flipsnap.find(".item");
	if ($items.size() <= 1) return;
	width -= distance;
	$items.last().remove().width(width);
	flipsnap.refresh();
});

// link ===================================//
Flipsnap('.snap7', {
    distance: 230
});

var $a = $('.item a');
// click event
$a.eq(1).click(function(e) {
    e.preventDefault();
    alert("clicked");
});

// click event and link
$a.eq(2).click(function(e) {
    alert("clicked and link");
});

// next, prev ===================================//
var flipsnap = Flipsnap('.snap8', {
    distance: 230
});
var $next = $('.next').click(function() {
    flipsnap.toNext();
});
var $prev = $('.prev').click(function() {
    flipsnap.toPrev();
});
flipsnap.element.addEventListener('fspointmove', function() {
	$next.attr('disabled', !flipsnap.hasNext());
	$prev.attr('disabled', !flipsnap.hasPrev());
}, false);
