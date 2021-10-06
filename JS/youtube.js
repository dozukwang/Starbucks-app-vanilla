// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"> 을 찾아서 선택
  new YT.Player('player', {
    videoId: 'zz9eQkxG9JE', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'zz9eQkxG9JE'
    },
    events: {
      onReady: function (event) {  // 객체 데이터 안에 함수 -> 메소드
        event.target.mute() // 음소거
      }
    }
  });
}
