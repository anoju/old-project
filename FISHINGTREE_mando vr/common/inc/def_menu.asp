<%
	url = Request.ServerVariables("HTTP_URL")
	arrurl = Split(url,"/")
	arrPageName = Split(arrurl(ubound(arrurl)),"?")
	pageName = arrPageName(0)

	Select Case(pageName)
		Case "footloose.asp"	'// footloose is
			depth = "1-1"
		Case "brand.asp"		'// Brand Story
			depth = "1-2"
		Case "concept.asp"		'// Brand Concept
			depth = "1-3"


		Case "vr.asp"			'// 3D VR/Color
			depth = "2-1"
		Case "color.asp"			'// 3D VR/Color
			depth = "2-1"
		Case "design.asp"		'// Design
			depth = "2-2"
		Case "technology.asp"	'// Technology
			depth = "2-3"
		Case "spec.asp"			'// Specification
			depth = "2-4"
		Case "gallery.asp"		'// Gallery
			depth = "2-5"

		Case "Press_list.asp"	'// Press
			depth = "3-1"
		Case "Press_view.asp"	'// Press
			depth = "3-1"
		Case "multimedia.asp"	'// Multimedia
			depth = "3-2"
		Case "ride.asp"			'// 엠베서더 시승기
			depth = "3-3"
		Case "Activity.asp"		'// Activity
			depth = "3-4"
		Case "Event.asp"		'// Event
			depth = "3-5"


		Case "introduction.asp"	'// introduction
			depth = "4-1"
		Case "cafe_news.asp"		'// cafe소식
			depth = "4-2"
		Case "cafe_news_view.asp"		'// cafe소식
			depth = "4-2"
		Case "reserve.asp"		'// 시승예약
			depth = "4-3"
		Case "reserve_input.asp"		'// 시승예약
			depth = "4-3"
		Case "reserve_ok.asp"		'// 시승예약
			depth = "4-3"
		Case "map.asp"		'// 오시는길
			depth = "4-4"


		Case "productinfo.asp"	'// 제품안내
			depth = "5-1"
		Case "before_input.asp"	'// 사전예약
			depth = "5-1"
		Case "before_ok.asp"	'// 사전예약완료
			depth = "5-1"
			Case "accessory_list.asp"	'// 제품구매
			depth = "5-1"
		Case "honest_goods.asp"	'// 정품등록
			depth = "5-2"


		Case "notice.asp"		'// 공지사항
			depth = "6-1"
			Case "notice_view.asp"		'// 공지사항
			depth = "6-1"
		Case "consultation.asp"	'// 1 : 1  고객상담
			depth = "6-2"
		Case "faq.asp"			'// 자주묻는 질문
			depth = "6-3"
		Case "as.asp"			'// A/S 안내
			depth = "6-4"

		Case "login.asp"		'// 로그인
			depth = "7-1"
		Case "terms.asp"		'// 회원가입
			depth = "7-2"
		Case "order_list.asp"	'// 주문/배송
			depth = "7-3"

		Case "login.asp"		'// 로그아웃
			depth = "7-1"
		Case "mem_modify.asp"	'// 마이페이지
			depth = "7-2"
		Case "goodscart.asp"	'// 장바구니
			depth = "7-3"
		Case "order_list.asp"	'// 주문/배송
			depth = "7-4"


		Case Else:
			depth = "0-0"
	End Select
	arrDepth = Split(depth,"-")
	d1 = arrDepth(0)
	d2 = arrDepth(1)

%>