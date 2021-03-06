<!DOCTYPE html>
<html>
<head>
<title>Score Ranking</title>
<meta content="IE=Edge" http-equiv="X-UA-Compatible">
<meta name="viewport" content="width=640, maximum-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="text/css" rel="stylesheet" href="/common/css/reset.css" />
<link type="text/css" rel="stylesheet" href="/common/css/flexcrollstyles.css" />
<link type="text/css" rel="stylesheet" href="/common/css/foodCrush.css" />
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<script type="text/javascript" src="/common/js/libs/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="/common/js/libs/flexcroll.js"></script>
<script type="text/javascript" src="/common/js/foodcrush.js"></script>
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
</script>
<div id="rankWrap">
	<div>
		<h1>food crush</h1>
	</div>
	<div id="navContainer" class="clearfix ie_clearfix">
		<ul id="nav">
			<li class="n_0"><a href="#"><img src="/image/common/mn_00.gif" alt="Home" /></a></li>
			<li class="n_1"><a href="#"><img class="active" src="/image/common/mn_01.gif" alt="Ranking" /></a></li>
			<li class="n_2"><a href="event.asp"><img src="/image/common/mn_02.gif" alt="Event" /></a></li>
			<li class="n_3"><a href="inviteFriends.asp"><img src="/image/common/mn_03.gif" alt="Invite Friends" /></a></li>
		</ul>
		<!--
		<div>
			<ul class="tabRank clearfix ie_clearfix">
				<li class="btnPoint"><a href="#"><img src="/image/rank/btn_point_on.gif"></a></li>
				<li class="btnInvite"><a href="inviteRank.asp"><img src="/image/rank/btn_invite_off.gif"></a></li>
			</ul>
		</div>
		-->
	</div>
	<div id="content_rank">
		<p class="scoreRankTitle"><img src="/image/rank/s_rank_title.png"></p>
		<div class="worldSelect">
			<form method="post" action="">
				<select id="worldList">
					<option value="World" selected="selected">World</option>
					<option value="Algeria">Algeria</option>
					<option value="Argentina">Argentina</option>
					<option value="Australia">Australia</option>
					<option value="Bangladesh">Bangladesh</option>
					<option value="Brazil">Brazil</option>
					<option value="Chile">Chile</option>
					<option value="China">China</option>
					<option value="Colombia">Colombia</option>
					<option value="UAE">UAE</option>
					<option value="Egypt">Egypt</option>
					<option value="HongKong">Hong Kong</option>
					<option value="India">India</option>
					<option value="Indonesia">Indonesia</option>
					<option value="Iran">Iran</option>
					<option value="Israel">Israel</option>
					<option value="Japan">Japan</option>
					<option value="Jordan">Jordan</option>
					<option value="Kazakhstan">Kazakhstan</option>
					<option value="Kenya">Kenya</option>
					<option value="Malaysia">Malaysia</option>
					<option value="Mexico">Mexico</option>
					<option value="Moroco">Moroco</option>
					<option value="NewZealand">New Zealand</option>
					<option value="Nigeria">Nigeria</option>
					<option value="Pakistan">Pakistan</option>
					<option value="Panama">Panama</option>
					<option value="Peru">Peru</option>
					<option value="Philippines">Philippines</option>
					<option value="Russia">Russia</option>
					<option value="SaudiArabia">Saudi Arabia</option>
					<option value="Singapore">Singapore</option>
					<option value="SouthAfrica">South Africa</option>
					<option value="SouthKorea">South Korea</option>
					<option value="Syria">Syria</option>
					<option value="Taiwan">Taiwan</option>
					<option value="Thailand">Thailand</option>
					<option value="Tunisia">Tunisia</option>
					<option value="Turkey">Turkey</option>
					<option value="Ukraine">Ukraine</option>
					<option value="Vietnam">Vietnam</option>
				</select>
			</form>
		</div>
		<div class="rankNameBar">
			<div class="countryName"></div>
		</div>
		<p class="newGame"><a href="#"><img src="/image/rank/btn_game.png"></a></p>
		<p class="rankDate"><img src="/image/rank/date.png"></p>
		<table>
			<tr>
				<td class="rankNum">1</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck<span class="flag"><img src="/image/rank/flag/03_Australia_AUS.jpg">aus</span></td>
				<td class="gameScore">1234567</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">2</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">56</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">3</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">123</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">4</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">56</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">5</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">123</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">6</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">56</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">7</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">123</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">8</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">56</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">9</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">123</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
			<tr>
				<td class="rankNum">10</td>
				<td class="thumbnail"><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/186388_1457521393_588885461_q.jpg"></td>
				<td class="userName">Oh Yong-teck</td>
				<td class="gameScore">56</td>
			</tr>
			<tr>
				<td colspan="4" class="line"></td>
			</tr>
		</table>
		<div class="pageContainer">
			<ul class="page">
				<li class="prev"><a href="#"><img src="/image/rank/btn_prev.gif"></a></li>
				<li><a href="#" class="activate">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#">4</a></li>
				<li><a href="#">5</a></li>
				<li class="next"><a href="#"><img src="/image/rank/btn_next.gif"></a></li>
			</ul>
		</div>
		<div class="clearfix ie_clearfix">
			<ul class="userSearch clearfix ie_clearfix">
				<li class="s_name"><img src="/image/rank/s_name.gif"></li>
				<li class="s_txt"><input type="text" name="userName" value=""></li>
				<li class="btnSearch"><a href="#"><img src="/image/rank/btn_search.gif"></a></li>
			</ul>
		</div>
	</div>
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
