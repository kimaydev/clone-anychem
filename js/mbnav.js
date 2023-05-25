window.addEventListener("load", function () {
  // 모바일 버튼 기능
  const mbNav = document.querySelector(".mb-nav");
  const mbGnb = document.querySelector(".mb-gnb");
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
    // Reset
    resetSubmenu();
    // 변수 초기화
    sideOpenNumber = undefined;
  });
  // 화면의 리사이즈를 체크해서 처리
  window.addEventListener("resize", function () {
    let winWidth = window.innerWidth;
    // console.log(winWidth);
    if (winWidth > mbWidth) {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
      // Reset
      resetSubmenu();
      // 변수 초기화
      sideOpenNumber = undefined;
    } // 화면 넓이가 1024보다 크면 active 클래스를 삭제한다
  });
  mbGnb.addEventListener("click", function (event) {
    // 이벤트 전달을 막음
    event.stopPropagation();
  });
  // nav 영역 밖 클릭 시 메뉴 닫힘
  mbWrap.addEventListener("click", function (event) {
    mbNav.classList.remove(mbNavActive);
    mbWrap.classList.remove(mbWrapActive);
    // Reset
    resetSubmenu();
    // 변수 초기화
    sideOpenNumber = undefined;
  });
  // 모바일 아코디언 메뉴
  const sideLis = document.querySelectorAll(".side-menu > li");
  const sideMenuA = document.querySelectorAll(".side-menu > li > a");
  const sideSubMenu = document.querySelectorAll(".side-menu > li > .submenu");
  const sideMenuOffset = 53;
  let sideOpenNumber;

  // 각 서브메뉴가 펼쳐졌을 때의 높이값을 저장
  const sideOpenHeightArray = [];

  // 각 서브메뉴 높이값 확인하기
  sideSubMenu.forEach((item, index) => {
    sideOpenHeightArray[index] = item.scrollHeight + sideMenuOffset;
    // console.log(sideOpenHeightArray);
  });
  // 모바일 아코디언 메뉴 클릭 이벤트
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      // a태그 웹페이지 갱신 막기
      event.preventDefault();
      showSubMenu(index);
    });
  });
  function resetSubmenu() {
    // 모든 li의 높이를 53으로 지정 (Reset)
    sideLis.forEach((item) => {
      // item.style.height = sideMenuOffset + "px";
      anime({
        targets: item,
        height: 53,
        easing: "easeInOutQuad",
        duration: 500,
      });
    });
  }
  function showSubMenu(_showNumber) {
    // Reset
    resetSubmenu();

    if (_showNumber === sideOpenNumber) {
      // _showNumber와 sideOpenNumber 의 인덱스 번호가 같을 때 실행
      // 변수 초기화
      sideOpenNumber = undefined;
      // return으로 함수 실행 중단시킴.
      // 문제: 똑같은 버튼 클릭 시 이벤트가 호출 안되는 현상이 발생하므로 return 하기 전에 sideOpenNumber를 초기화
      return;
    }
    // li의 높이를 변경
    sideLis.forEach((item, index) => {
      item.style.height = sideMenuOffset;
      if (_showNumber === index) {
        // item.style.height = sideOpenHeightArray[_showNumber] + "px";
        anime({
          targets: item,
          height: sideOpenHeightArray[_showNumber],
          easing: "easeInOutQuad",
          duration: 500,
        });
      }
    });

    // 열린 번호를 sideOpenNumber에 보관함
    sideOpenNumber = _showNumber;
  }
});
