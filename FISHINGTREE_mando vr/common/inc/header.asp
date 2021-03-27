<!--#include virtual="/common/inc/def_menu.asp"-->

			<div id="headWrap">
				<h1><a href="/main.asp"><img src="/images/common/logo_mando.png" alt="mando footloose" /></a></h1>
				<div id="gnbWrap">
					<ul id="gnb">
						<li class="gnb_01 selected"><a href="/story/footloose.asp">FOOTLOOSE STORY</a></li>
						<li class="gnb_02"><a href="/product/vr.asp">PRODUCT</a></li>
						<li class="gnb_03"><a href="/funandlife/Press_list.asp">FUN &amp; LIFE</a></li>
						<li class="gnb_04"><a href="/cafe/introduction.asp">CAFE FOOTLOOSE</a></li>
						<li class="gnb_05"><a href="/buy/productinfo.asp">BUY</a></li>
						<li class="gnb_06"><a href="/support/notice.asp">SUPPORT</a></li>
					</ul><!-- //gnb -->
				</div>
				<div id="utilWrap">
					<ul id="utilIn">
						<li class="util_01"><a href="/member/login.asp">로그인</a></li>
						<li class="util_02"><a href="/member/terms.asp">회원가입</a></li>
						<li class="util_03"><a href="/buy/order_list.asp">주문/배송</a></li>
					</ul><!-- //util -->

					<ul id="utilOut">
						<li class="util_01"><a href="/member/login.asp">로그아웃</a></li>
						<li class="util_02"><a href="/myPage/mem_modify.asp">마이페이지</a></li>
						<li class="util_03"><a href="/buy/goodscart.asp">장바구니</a></li>
						<li class="util_04"><a href="/buy/order_list.asp">주문/배송</a></li>
					</ul><!-- //util -->
				</div>

				<div class="sGnbArea">
					<div class="sGnb">
						<ul class="sGnb_01">
							<li class="sGnb_01a selected"><a href="/story/footloose.asp">Footloose is</a></li>
							<li class="sGnb_01b"><a href="/story/brand.asp">Making Story</a></li>
							<li class="sGnb_01c"><a href="/story/concept.asp">Brand Identity</a></li>
						</ul>
						<ul class="sGnb_02">
							<li class="sGnb_02a selected"><a href="/product/vr.asp">3D VR/Color</a></li>
							<li class="sGnb_02b"><a href="/product/design.asp">Design</a></li>
							<li class="sGnb_02c"><a href="/product/technology.asp">Technology</a></li>
							<li class="sGnb_02d"><a href="/product/spec.asp">Specification</a></li>
							<li class="sGnb_02e"><a href="/product/gallery.asp">Gallery</a></li>
							<!-- <li class="sGnb_02f"><a href="/product/accessries.asp">Accessories</a></li> -->
						</ul>
						<ul class="sGnb_03">
							<li class="sGnb_03a selected"><a href="/funandlife/Press_list.asp">Press</a></li>
							<li class="sGnb_03b"><a href="/funandlife/multimedia.asp">Multimedia</a></li>
							<!--
                            <li class="sGnb_03c"><a href="/funandlife/Activity.asp">Activity</a></li>
							<li class="sGnb_03d"><a href="/funandlife/Event.asp">Event</a></li> -->
						</ul>
						<ul class="sGnb_04">
							<li class="sGnb_04a selected"><a href="/cafe/introduction.asp">Introduction</a></li>
							<li class="sGnb_04b"><a href="/cafe/cafe_news.asp">cafe소식</a></li>
							<li class="sGnb_04c"><a href="/cafe/reserve.asp">시승예약</a></li>
							<li class="sGnb_04d"><a href="/cafe/map.asp">오시는길</a></li>
						</ul>

						<ul class="sGnb_05">
							<!-- <li class="sGnb_05a selected"><a href="/buy/productinfo.asp">제품안내</a></li>-->
							<li class="sGnb_05a selected"><a href="/buy/productinfo.asp">제품구매</a></li>
							<li class="sGnb_05b"><a href="/buy/honest.asp">정품등록</a></li>
						</ul>
						<ul class="sGnb_06">
							<li class="sGnb_06a selected"><a href="/support/notice.asp">공지사항</a></li>
							<li class="sGnb_06b"><a href="/support/consultation.asp">1 : 1  고객상담</a></li>
							<li class="sGnb_06c"><a href="/support/faq.asp">자주묻는 질문</a></li>
							<!--li class="sGnb_06d"><a href="/support/as.asp">A/S 안내</a></li-->
						</ul>
					</div>
				</div><!-- //sGnbArea -->

			</div><!-- //headWrap -->


<script type="text/javascript">
<!--
	$(function(){
		var $gnb = $("#gnb li");
		var d1 = "<%=d1%>";
		var d2 = "<%=d2%>";

		$gnb.bind("click mouseover",function(e){

			var thisNo = $(this).index();

			$(".sGnbArea").slideDown(300)
			$gnb.removeClass("selected").eq(thisNo).addClass("selected")
			$(".sGnb ul").hide().eq(thisNo).show()
			/*
			if(thisNo != 3){
				$(".sGnbArea").slideDown(300)
				$gnb.removeClass("selected").eq(thisNo).addClass("selected")
				$(".sGnb ul").hide().eq(thisNo).show()
			}else{
				//$(".sGnbArea").slideUp()
				if(e.type=="click"){
					addnDimLayer()
					$("#dimLayer").css({'opacity': '0.8','display': 'block','height':'3000px','position':'fixed'});
					$("#comingsoonLayer").show();
					return false;
				}
			}
			*/
		}).eq(d1-1).trigger("click")

		/* 메뉴:mouse out 원래메뉴로 복귀 */
		$("#headWrap").not("#utilWrap").hover(function(){
		},function(){
			if(d1>0 || d1<6){
				$gnb.removeClass("selected").eq(d1-1).addClass("selected");
				$(".sGnb ul").hide().eq(d1-1).show().find("li").eq(d2-1).addClass("selected").siblings().removeClass("selected");
			}
		})

		/* 메뉴:mouse out 원래메뉴로 복귀 */
		$(".sGnb ul").mouseover(function(){
			var $this = $(this);
			var $thisNo = $this.index();

			$this.find("li").hover(function(){
				$(this).addClass("selected").siblings().removeClass("selected")
			},function(){
				if(d1!=0 && d1<=6){
					$(".sGnb ul").eq($thisNo).find("li").eq(d2-1).addClass("selected").siblings().removeClass("selected");
				}
			})
		})

		/* Util 메뉴 mouse over */
		$("#utilOut li").bind("click mouseover",function(e){
			var thisNo = $(this).index();
			$(this).addClass("selected").siblings().removeClass("selected");
//			if(e.type == "click"){
//				if(thisNo>=2){
//					addnDimLayer()
//					$("#dimLayer").css({'opacity': '0.8','display': 'block','height':'3000px','position':'fixed'});
//					$("#comingsoonLayer").show();
//					return false;
//				}
//			}
		});
		$("#utilIn li").bind("click mouseover",function(e){
			var thisNo = $(this).index();
			$(this).addClass("selected").siblings().removeClass("selected");
//			if(e.type == "click"){
//				if(thisNo>=2){
//					addnDimLayer()
//					$("#dimLayer").css({'opacity': '0.8','display': 'block','height':'3000px','position':'fixed'});
//					$("#comingsoonLayer").show();
//					return false;
//				}
//			}
		});

		$("#utilWrap ul").hover(function(){
			var $thisNo = $(this).index();
			$("#utilWrap ul").eq($thisNo).find("li").mouseover(function(){
			})
		},function(){
		})

		$(".sGnb_0"+d1).find("li").removeClass("selected").eq(d2-1).addClass("selected");

		if(d1==0 || d1>6){
			$("#gnb li").each(function(){
				$(this).removeClass("selected");
			})
			$(".sGnbArea").hide();
/**/
			if(d1==0 || d1 > 6){
				$("#headWrap").hover(function(){

				},function(){
					$(".sGnbArea").stop().slideUp(300);
					$gnb.removeClass("selected");
				});
			}

			/* Util */
			if(d1==7){
				var $utilWrapOut = $("#utilOut li");
				var $utilWrapIn = $("#utilIn li");
				$utilWrapOut.bind("click mouseover",function(){
					$(this).addClass("selected").siblings().removeClass("selected");
				}).eq(d2-1).trigger("click")
				$utilWrapIn.bind("click mouseover",function(){
					$(this).addClass("selected").siblings().removeClass("selected");
				}).eq(d2-1).trigger("click")
			}
		}

	})
//-->
</script>