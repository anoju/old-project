var dfVals = {
	"pep-main": {"mOver": null, "bOrder": null, "snsTiitle": null, "snsDesc": null},
	"what-is-pep": {"mOver": 0, 
		"bOrder": ['mov', 'e1-v', 'c1', 'g1', 'g2', 'g3', 'g4', 'm-v', 'd2', 'e2-v', 'd4', 'c3', 'c2', 'd1', 'd3'], 
		"snsTiitle": "PEP이란 무엇일까요?", "snsDesc": "PEP이란 생기, 활력을 의미합니다. PEPSI와 함께 이제부터 PEP하게 살아보세요! PEP하게!"},
	"pep-movie": {"mOver": 1, 
		"bOrder": ['c1', 'c2', 'c3', 'm-v', 'g1', 'g2', 'g3', 'e1-v', 'w', 'e2-v', 'd4', 'd2', 'd1', 'd3'], 
		"snsTiitle": "류승룡! 새로운 단어 발견!", "snsDesc": "그와 함께 PEP하게 사는 방법을 확인해보세요."},
	"pep-music": {"mOver": 2, 
		"bOrder": ['mov-v', 'w', 'c1', 'g2', 'g1', 'g3', 'd4', 'd2', 'c2', 'c3', 'd1', 'd3', 'e1', 'e2'], 
		"snsTiitle": "PEP MUSIC 감상하기!", "snsDesc": "글로벌 모델 비욘세의 M/V및 TV CF영상을 확인해보세요."},
	"pep-event-1": {"mOver": 3, 
		"bOrder": ['mov-v', 'c1', 'g1', 'g2', 'g3', 'm-v', 'd4', 'e2-v', 'd2', 'c2', 'c3', 'd1', 'd3'], 
		"snsTiitle": "PEP EVENT 참여하기!", "snsDesc": "PEP MOVIE를 공유거나 펩시 캔 뚜껑 안쪽에 있는 응모번호를 입력해주세요. PEP한 선물이 팍팍! 지금 바로 참여해보세요."},
	"pep-event-2": {"mOver": 4, 
		"bOrder": ['mov-v', 'e1-v', 'w', 'c1', 'g2', 'g1', 'g3', 'd4', 'c2', 'c3', 'd1', 'm', 'd3', 'd2'], 
		"snsTiitle": "PEP EVENT 참여하기!", "snsDesc": "PEP MOVIE를 공유거나 펩시 캔 뚜껑 안쪽에 있는 응모번호를 입력해주세요. PEP한 선물이 팍팍! 지금 바로 참여해보세요."},
	"pep-event-2-tour": {"mOver": 4, 
		"bOrder": ['e1-v', 'mov-v', 'w', 'c1', 'g2', 'g1', 'g3', 'd2', 'e3-v', 'c2', 'c3', 'd1', 'm', 'd3'], 
		"snsTiitle": "PEP EVENT 참여하기!", "snsDesc": "PEP MOVIE를 공유거나 펩시 캔 뚜껑 안쪽에 있는 응모번호를 입력해주세요. PEP한 선물이 팍팍! 지금 바로 참여해보세요."},
	"pep-event-3": {"mOver": 4, 
		"bOrder": ['e1-v', 'mov-v', 'w', 'c1', 'g2', 'g1', 'g3', 'd2', 'e3-v', 'c2', 'c3', 'd1', 'm', 'd3'], 
		"snsTiitle": "PEP EVENT 참여하기!", "snsDesc": "PEP MOVIE를 공유거나 펩시 캔 뚜껑 안쪽에 있는 응모번호를 입력해주세요. PEP한 선물이 팍팍! 지금 바로 참여해보세요."},
	"pep-game": {"mOver": 5, 
		"bOrder": ['mov-v', 'e1-v', 'w', 'm-v', 'c1', 'd4', 'd2', 'e3', 'e2', 'c2', 'c3', 'd1', 'd3'], 
		"snsTiitle": "류승룡과 함께하는 PEP PEP PEP!", "snsDesc": "지금 PEP 게임에 참여하시고 PEP한 선물의 주인공이 되세요."},
	"pep-enjoy": {"mOver": 6, 
		"bOrder": ['mov-v', 'e2-v', 'w', 'c1', 'g2', 'g3', 'g1', 'd4', 'e1', 'e3', 'c2', 'c3', 'd2', 'd1', 'd3', 'm'], 
		"snsTiitle": "PEP ENJOY!", "snsDesc": "PEPSI의 활력 넘치는 바탕화면을 다운로드 하세요!"},
	"pep-news": {"mOver": 7, 
		"bOrder": ['mov-v', 'e2-v', 'w', 'c1', 'g2', 'g3', 'g1', 'd2', 'e1', 'e3', 'd4', 'c3', 'c4', 'd1', 'd3', 'm'], 
		"snsTiitle": "PEP NEWS 확인하기!", "snsDesc": "오늘은 어떤 PEP한 뉴스가 있을까요? 지금 바로 확인해보세요."}
}

/*
	"pep-event-2": {"mOver": 4, "bOrder": null, 
		"snsTiitle": "PEP EVENT 참여하기!", "snsDesc": "PEP CAR를 찾거나 PEP MOVIE를 공유하면 PEP한 선물이 팍팍! 지금 바로 참여해보세요."},
*/

var items = {
	'g1': 	'<div class="item b2 op80"><a href="/pep-game/"><img src="/img/bricks/sub_brick_game_01-ifn.jpg" alt="pep game" title="PEP GAME" /></a></div>',
	'g2': '<div class="item b2 op80"><a href="/pep-game/"><img src="/img/bricks/sub_brick_game_02-ifn.jpg" alt="pep game" title="PEP GAME"  /></a></div>',
	'g3': '<div class="item b2 op80"><a href="/pep-game/"><img src="/img/bricks/sub_brick_game_03-ifn.jpg" alt="pep game" title="PEP GAME"  /></a></div>',
	'w': '<div class="item b2 op80"><a href="/what-is-pep/"><img src="/img/bricks/sub_brick_what.jpg" alt="WHAT\'S PEP" title="WHAT\'S PEP" /></a></div>',
	'e1': '<div class="item b6 op80"><a href="/pep-event-1/"><img src="/img/bricks/sub_brick_evt_03.jpg" alt="PEP 이벤트 1 - PEP MOVIE를 공유하라!" title="PEP 이벤트 1 - PEP MOVIE를 공유하라!" /></a></div>',
	'e1-v': '<div class="item b3 op80"><a href="/pep-event-1/"><img src="/img/bricks/sub_brick_evt_03_v.jpg" alt="PEP 이벤트 1 - PEP MOVIE를 공유하라!" title="PEP 이벤트 1 - PEP MOVIE를 공유하라!" /></a></div>',
	'e2': '<div class="item b6 op80"><a href="/pep-event-3/"><img src="/img/bricks/sub_brick_evt_01.jpg" alt="PEP 이벤트 2 - PEP BOX를 받아라!" title="PEP 이벤트 2 - PEP BOX를 받아라!" /></a></div>', 
	'e2-v': '<div class="item b3 op80"><a href="/pep-enjoy/"><img src="/img/bricks/sub_brick_evt_01_v-ifn.jpg" alt="PEP ENJOY" title="PEP ENJOY" /></a></div>', 
	'mov': '<div class="item b6 op80"><a href="/pep-movie/"><img src="/img/bricks/sub_brick_mov.jpg" alt="PEP MUSIC" title="PEP MOVIE" /></a></div>',
	'mov-v': '<div class="item b3 op80"><a href="/pep-movie/"><img src="/img/bricks/sub_brick_mov_v.jpg" alt="PEP MUSIC" title="PEP MOVIE" /></a></div>',
	'm': '<div class="item b6 op80"><a href="/pep-music/"><img src="/img/bricks/sub_brick_music-ifn.jpg" alt="PEP MUSIC" title="PEP MUSIC" /></a></div>',
	'm-v': '<div class="item b3 op80"><a href="/pep-music/"><img src="/img/bricks/sub_brick_music_v-ifn.jpg" alt="PEP MUSIC" title="PEP MUSIC" /></a></div>',
	'c1': '<div class="item b3 op80"><a href="/pep-event-3/"><img src="/img/bricks/sub_brick_cms_01.jpg" alt="PEP 이벤트 2 - PEP BOX를 받아라!" /></a></div>',
	'c2': '<div class="item b2 op80"><img src="/img/bricks/sub_brick_cms_02.jpg" alt="투엑스 커밍순" /></div>',
	'c3': '<div class="item b2 op80"><img src="/img/bricks/sub_brick_cms_03.jpg" alt="레이디스 코드 커밍순" /></div>',
	'd1': '<div class="item b2 op80"><img src="/img/bricks/sub_brick_dummy_01.jpg" alt="pepsi" /></div>',
	'd2': '<div class="item b2 op80"><img src="/img/bricks/sub_brick_dummy_02.jpg" alt="pepsi" /></div>',
	'd3': '<div class="item b2 op80"><img src="/img/bricks/sub_brick_dummy_03.jpg" alt="pepsi" /></div>',
	'd4': '<div class="item b2 op80"><img src="/img/bricks/sub_brick_dummy_04.jpg" alt="pepsi" /></div>'
};

/*	'c1': '<div class="item b3 op80"><img src="/img/bricks/sub_brick_cms_01.jpg" alt="인피티트 커밍순" /></div>',*/

/*
	'e3': '<div class="item b6 op80"><a href="/pep-event-1/"><img src="/img/bricks/sub_brick_evt_02.jpg" alt="PEP 이벤트 2 - PEP CAR를 만나라!" title="PEP 이벤트 2 - PEP CAR를 만나라!" /></a></div>', 
	'e3-v': '<div class="item b3 op80"><a href="/pep-event-1/"><img src="/img/bricks/sub_brick_evt_02_v.jpg" alt="PEP 이벤트 2 - PEP CAR를 만나라!" title="PEP 이벤트 2 - PEP CAR를 만나라!" /></a></div>', 
*/