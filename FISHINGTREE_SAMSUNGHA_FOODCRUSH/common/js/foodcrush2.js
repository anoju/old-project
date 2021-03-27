$(function(){
	// 현재 url을 '/'로 나눔. 배열로 저장.
	var locList = location.href.split('/');
	// '/'마지막 배열은 파일명이므로 '.'으로 구분해서 확장자 빼줌. 그중 [0]번째 배열이 페이지 명.
	var locName = locList[locList.length-1].split('.')[0];

	$("#nav li").hover(
		function(){
			$(this).each(function(){
				$("#nav li img").removeClass('active');
			});
			$(this).find('a img').addClass('active');
		},
		function(){
			$(this).each(function(){
				$("#nav li img").removeClass('active');
			});
			// 각 페이지 명에 따라 롤 아웃 후에 현재 페이지 활성화.
			// 0번 홈은 게임 홈이므로 없어도 됨.
			
			switch (locName)
			{
			case "scoreRank":
				currentPage(1);
				break;
			case "inviteRank":
				currentPage(1);
				break;
			case "event":
				currentPage(2);
				break;
			case "inviteFriends":
				currentPage(3);
				break;
			
			}
		}
	);

	$("#worldList").bind('change', function(){
		$(".countryName").empty();
		var optionValue = $("#worldList option:selected").val();
		var c_img = '<img src=image/rank/'+optionValue+'.png />';
		
		$(".countryName").append(c_img);

		var c_imgWidth = $(".countryName").find('img').width();
		
		$(".countryName").find('img').load(function() {  
			var width = $(this).width();
			$(".countryName").css({'width':width + 'px', 'margin':'0 auto'});
		});
	});

	$("#worldList").trigger("change");
	
	$(".showroom").bind("click", function(){
		// showroom
	});
});

function currentPage(currentNum){
	$("#nav li").eq(currentNum).find('a img').addClass('active');
}
