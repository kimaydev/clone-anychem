window.addEventListener("load", function () {
  // 모바일 버튼 기능
  const mbNav = document.querySelector(".mb-nav");
  // .mb-nav를 mbNav라는 변수에 저장(할당/대입)
  const mbNavActive = "mb-nav-active";
  const mbWrap = document.querySelector(".mb-wrap");
  const mbWrapActive = "mb-wrap-active";
  const mbWidth = 1024;

  mbNav.addEventListener("click", function () {
    //   mbNav.classList.toggle(mbNavActive);
    /*
        현재 mbNav에 mb-nav-active를 가지고 있는지 검토
        -> mb-nav-active 클래스 적용 여부 (true, false)
      */
    let checkActive = mbNav.classList.contains(mbNavActive);

    // -> 클릭을 했을 때 mb-nav-active가 있느냐 없느냐에 따라 결과가 달라짐
    // -> mbNav의 클래스 목록에 mb-nav-active가 포함되어 있는지 확인
    if (checkActive === false) {
      mbNav.classList.add(mbNavActive);
      mbWrap.classList.add(mbWrapActive);
    } else {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
    }
  });
  // 화면의 리사이즈를 체크해서 처리
  window.addEventListener("resize", function () {
    let winWidth = window.innerWidth;
    // console.log(winWidth);
    if (winWidth > mbWidth) {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
    } // 화면 넓이가 1024보다 크면 active 클래스를 삭제한다
  });
  // 모바일 아코디언 메뉴
  const sideMenuA = document.querySelectorAll(".side-menu > li > a");
  const sideSubMenu = document.querySelectorAll(".side-menu > li > .submenu");

  // sideMenuA 의 각각을 클릭하면, 클릭되어진 순간
  // index 값을 console.log 에 출력해 주세요.
  // for 를 사용해도 좋구요,
  // forEach 를 사용해도 좋아요.
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      // a 태그의 href 를 막는다.
      event.preventDefault();
      changeSubmenu(index);
    });
  });

  function changeSubmenu(_index) {
    sideSubMenu.forEach((item, index) => {
      if (_index === index) {
        if (item.style.display === "block") {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      } else {
        item.style.display = "none";
      }
    });
  }
});
