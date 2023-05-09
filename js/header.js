/* 
    웹브라우저에 html, css, js, image를 모두 불러들여 렌더링 준비가 끝나고
    function의 블럭 안쪽 {}를 실행한다
*/
window.onload = function () {
  // nav 에 마우스오버 시 header 높이 변화(-> 260px)
  // nav 에 마우스아웃 시 header 높이 변화(-> 100px)
  // ① header를 js로 저장해보자(변수 정의하기)
  let header = document.querySelector(".header");
  // ② nav를 js로 저장해보자(변수 정의하기)
  let nav = document.querySelector(".nav");
  // console.log(header);
  // console.log(nav);
  // nav에 마우스오버 처리
  // -> html 요소에 마우스오버 처리 하는 법
  nav.addEventListener("mouseenter", function () {
    // header 높이를 260px로 변경
    // header.style.height = "260px";
    // 높이가 260px로 변경되는 클래스를 적용
    header.classList.add("header-active");
  });
  // nav에 마우스아웃 처리
  // -> html 요소에 마우스아웃 처리 하는 법
  nav.addEventListener("mouseleave", function () {
    // header 높이를 100px로 변경
    // header.style.height = "100px";
    header.classList.remove("header-active");
  });
  /* 
    이처럼 js로 style의 수치 변경이 가능하나 추천하는 방법은 아니므로
    class를 추가·제거 하는 방식으로 관리하는 것이 좋다
*/
};
