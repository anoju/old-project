//재생번호
var position = 0;
//비디오재생경로
var playlist;
//비디오아이디
var video;

window.onload = function() {
	//재생리스트경로배열에
	playlist = ["video/preroll", 
				"video/areyoupopular", 
				"video/destinationearth"];
	//아이디 가져옴
	video = document.getElementById('video');
	//이벤트 리스너작성 비디오 종료이밴트 발생시 배열번호 증가 함수 실행
	video.addEventListener("ended", nextVideo,false);
	//비디오 경로문자와 재생마임타입조립
	video.src = playlist[position] + getFormatExtension();
	//비디오를 로드
	video.load();
	//비디오를 재생
	video.play();
};

function nextVideo() {
	position++;
	if (position >= playlist.length) {
		position = 0;
	}
	//증가된 배열번호를 이용해서 + 확작자 붙이기 함수 이용 다음 영상재생
	video.src = playlist[position] + getFormatExtension();
	video.load();
	video.play();
}

function getFormatExtension() {
	//canPlayType메소드를 이용하여 영상신뢰도 검사 probably90%이상 maybe60%이상 no confidence0%
	//마임타임을 구체적으로 설정하면 조건이 까다로와 통과 되지 않을수 있음
    if (video.canPlayType("video/mp4") != "") {
        return ".mp4";
    } else if (video.canPlayType("video/ogg") != "") {
        return ".ogv";
    } else if (video.canPlayType("video/webm") != "") {
        return ".webm";
    }
}
