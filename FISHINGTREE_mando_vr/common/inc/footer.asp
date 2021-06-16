
			<div id="footerWrap">
				<div class="footerTop">
					<div id="sns">
						<ul>
							<li class="links_01"><a href="#">facebook</a></li>
							<li class="links_02"><a href="#">twitter</a></li>
						</ul>
						<p id="copyright"><img src="/images/common/copyright.png" alt="copyright&copy; 2012 mando footloose .all right reserved" /></p><!-- //121107_이미지명 바꿈 -->
					</div><!-- //sns -->

					<div id="links">
						<ul>
							<li class="links_01"><a href="http://www.meister.co.kr/Default.asp" target="_blank">회사소개</a></li>
							<li class="links_02"><a href="/util/terms.asp">이용약관</a></li>
							<li class="links_03"><a href="/util/privacy.asp">개인정보취급방침</a></li>
							<li class="links_04"><a href="/util/sitemap.asp">사이트맵</a></li>
						</ul>
					</div><!-- //links -->

					<p id="familySite">
						<img src="/images/common/btn/btn_familysite.gif" alt="familysite" />
						<div id="familyNav">
							<ul>
								<li class="family_01"><a href="http://www.halla.com/ko/" target="_blank">한라그룹</a></li>
								<li class="family_02"><a href="http://www.halla.co.kr/" target="_blank">한라건설</a></li>
								<li class="family_03"><a href="http://www.mando.com/" target="_blank">만도</a></li>
								<li class="family_04"><a href="http://www.hallawelthtech.co.kr/contents/home/home.asp" target="_blank">한라웰스텍</a></li>
								<li class="family_05"><a href="http://www.mokpoport.com/new/index.asp" target="_blank">목포신항만운영</a></li>
								<li class="family_06"><a href="http://www.hallainc.co.kr/" target="_blank">한라 I&amp;C</a></li>
							</ul>
						</div>
					</p>

					<div  id="languageNav" >
						<img src="/images/common/btn/btn_language.gif" alt="language" />
						<div class="subNav">
							<ul>
								<li class="subNav_01"><a href="/eng/main.asp">ENGLISH</a></li>
								<li class="subNav_02"><a href="/main.asp">KOREAN</a></li>
							</ul>
						</div>
					</div>
				</div><!-- //footerTop -->
				<div class="footerBt">
					<img src="/images/common/footer_bt_copyright.png" alt="" class="btAddress" />
					<!-- <ul style="float: left; min-width: 50px; width: 900px; border:1px solid red; margin-top: 20px;">
						<li style="float: left; line-height: 1.7em;">서울특별시 송파구 신천동 루터회관 빌딩 12~14층   대표이사 : 박윤수    통신판매업신고 : 제 2012-서울 강남-03006호</li>
						<li style="float: left;">상호명 : (주)마이스터 SPM    사업자 등록번호 : 211-85-66948 </li>
						<li style="float: left;">개인정보관리책임자 :  한 철  Tel : 02)526-0561 Email : p14039@meister.co.kr  고객센터 : 02)548-1703</li>
					</ul> -->
					<a href="#"><img src="/images/common/space.gif" alt="" class="btnCheck" /></a>



					 <ul class="btSystem">
						<li><img src="/images/common/footer_bt_system_01.gif" border="0" alt="클릭하시면 이니시스 결제시스템의 유효성을 확인하실 수 있습니다." style="cursor:pointer" Onclick='window.open("https://mark.inicis.com/mark/escrow_popup.php?no=29543&st=1351751592","mark","scrollbars=no,resizable=no,width=530,height=690")'></li>
						<li><img src="/images/common/footer_bt_system_02.gif" alt="eTrust 인증" /></li>
						<li><img src="/images/common/footer_bt_system_03.gif" alt="공정거래 위원회 표준약관 사용" /></li>
						<li><img src="/images/common/footer_bt_system_04.gif" alt="현금영수증 발행가맹점" /></li>
					</ul>
				</div><!-- //footerBt -->
			</div><!-- //footerWrap -->




			<p class="btnTop"><a href="#"><img src="/images/common/btn/btn_top.gif" alt="TOP" /></a></p>
<style type="text/css">
	#dimLayer{ width:100%; height:1500px; background-color: #000; position:absolute; left:0; top:0px; margin:0; padding:0; -moz-transition-property: opacity; -webkit-transition-property: opacity; -o-transition-property: opacity; transition-property: opacity; display: none; opacity: 0; z-index:100; }
	#comingsoonLayer{width:398px;height:224px;background-color:#ffffcc;color:#660099;position:absolute;left:50%;top:50%;margin:-112px 0 0 -199px;display:none;z-index:99999}
</style>

	<div id="comingsoonLayer">
		<img src="/images/common/comingsoonPopup.gif" alt="coming soon" border="0" usemap="#Map"/>
		<map name="Map" id="Map">
		  <area shape="rect" coords="172,165,226,191" href="#" id="btnClosePopup"/>
		</map>
	</div>


<script type="text/javascript">
<!--
	$("#btnClosePopup").click(function(e){
		e.preventDefault();
		$("#comingsoonLayer").hide();
		removeDimLayer()
	})

	function addnDimLayer(){
		var createDiv = "<div id='dimLayer'></div>";
		$("body").append(createDiv);
	}
	function removeDimLayer(){
		$("#dimLayer").remove();
	}
//-->
</script>
<script>
	$(document).ready(function(){
		$('.footerBt').find('img.btnCheck').click(function(event){
				event.preventDefault();
				window.open('http://www.ftc.go.kr/info/bizinfo/communicationView.jsp?apv_perm_no=2012322016230203006&area1=&area2=&currpage=1&searchKey=01&searchVal=마이스터&stdate=&enddate=', '', '')
		})

	});

</script>

</body>
</html>