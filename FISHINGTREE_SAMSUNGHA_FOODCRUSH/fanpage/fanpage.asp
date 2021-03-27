<!DOCTYPE html>
<html>
<head>
<title>Fanpage</title>
<meta content="IE=Edge" http-equiv="X-UA-Compatible">
<meta name="viewport" content="width=640, maximum-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="text/css" rel="stylesheet" href="/common/css/reset.css" />
<link type="text/css" rel="stylesheet" href="/common/css/fanpage.css" />
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<script type="text/javascript" src="/common/js/libs/jquery.easing.1.3.js"></script>
</head>

<body>
<div id="fb-root"></div>
<script>
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-39315117-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

	$(function(){
		$(".startGAme").bind("click", function(){
	        gameStart();
		});

		$(".showroom").bind("click", function(){
	        showRoom();
		});
		
		$(".gameNot").bind("click", function(){
	        nowWorking();
		});
	});

	function gameStart(){
		_gaq.push(['_trackEvent', 'btn_gameStart', 'fanpage', document.title]);
	}

	function showRoom(){
		_gaq.push(['_trackEvent', 'btn_showRoom', 'fanpage', document.title]);
	}

	function nowWorking(){
		_gaq.push(['_trackEvent', 'notWorkingGame', 'fanpage', document.title]);
	}

</script>
<div id="wrap">
<!--<p class="txt"><img src="/fanpage/image/txt_evtPeriod.png"></p>-->
	<p class="startGame"><a href="http://apps.facebook.com/food-crush/FridgePop/?start=1"><img src="/fanpage/image/btnStart.png"></a></p>
	<p class="prize"><img src="/fanpage/image/prize.png"></p>
	<p class="showroom"><a href="#"><img src="/fanpage/image/btnShowroom.png"></a></p>
	<p class="gameNot"></p>
</div>

<!-- footer -->
<div class="footContainer clearfix ie_clearfix">
	<ul id="footer">
		<li class="copy"><img src="/image/common/footer.gif"></li>
		<li class="tc"><a href="#"><img src="/image/common/btn_terms.gif"></a></li>
		<li class="pp"><a href="#"><img src="/image/common/btn_pp.gif"></a></li>
		<li class="fb">
			<div class="fb-like" data-href="https://www.facebook.com/SamsungHomeAppliances" data-send="true" data-layout="button_count" data-width="150" data-show-faces="true"></div>
		</li>
	</ul>
</div>
</body>
</html>
