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

// 특정 높이까지 스크롤되면 badges를 감추기 + 최상단으로 Scroll하기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {opacity: 0, display: 'none'});
    //gsap.to(애니메이션 처리할 요소, 지속시간(s), 애니메이션 옵션)
    
    // to-top 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
      display: 'flex'
    });

  } else { 
    // 배지 보이기
    gsap.to(badgeEl, .6, {opacity: 1, display: 'block'});
    
    // to-top 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    });

  }
}, 300));
//0.3초(300)마다 addEventListener 함수가 작동하도록 제한속도 설정, 과부하방지
// _.throttle(함수, ms단위의 시간추가)

// TO-TOP

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})


// 이미지 순차적 보이기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //인덱스 순서에 따라 애니메이션 실행 시간이 지연(0.7, 1.4, 2.1 ..)
    opacity: 1
  });
});


// 슬라이드(swiper 라이브러리)

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
   autoplay: {
     delay: 5000
   },
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next',
  }
})


//프로모션 섹션 토클 적용하기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // !는 뒤의 값을 반대로 만든다 = boolean값 반전
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})

// 요소 반복애니메이션

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 애니메이션 반복 후 원래상태로 되감기 적용
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// 화면에 보이는지 확인하여 요소 불러오기(scrollmagic)
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소
      triggerHook: .8  // 뷰포트의 맨위와 맨아래(0~1) 사이 어느 지점에 감시요소를 감시하는 트리거를 작성할 것인가를 작성하는 요소
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

// 올해 년도 연동하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021
