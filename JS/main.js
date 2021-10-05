// Input 검색바와 Icon 클릭 연동하기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
  /** input이 소속된 Search 요소 아무거나에 클릭이 감지되면 input 요소에 focus()를 강제 적용 */
});

// Input 검색바에 focus가 이루어졌을 때의 변화 설정
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  /** Attribute = html의 속성 */
  /** Input의 placeholder이란 속성에 '통합검색'이라는 콘텐츠를 추가 */
});

// Input 검색바에 blur(focus 해제)됐을 때의 변화 설정
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 특정 높이까지 스크롤되면 badges를 감추기
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {opacity: 0, display: 'none'});
    //gsap.to(애니메이션 처리할 요소, 지속시간(s), 애니메이션 옵션)
  } else { 
    gsap.to(badgeEl, .6, {opacity: 1, display: 'block'});
  }
}, 300));
//0.3초(300)마다 addEventListener 함수가 작동하도록 제한속도 설정, 과부하방지
// _.throttle(함수, ms단위의 시간추가)


// 이미지 순차적 보이기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //인덱스 순서에 따라 애니메이션 실행 시간이 지연(0.7, 1.4, 2.1 ..)
    opacity: 1
  });
});


// vertical 슬라이드(swiper 라이브러리)

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
