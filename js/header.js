window.addEventListener("load", function () {
  let header = document.querySelector(".header");
  let nav = document.querySelector(".header .header-right .nav");

  /* 원본코드
  nav.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });  
  // nav 마우스아웃 처리
  nav.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
  });
  */
  nav.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
    if(header.classList.contains("header-active")){
      header.addEventListener("mouseover", function(){
        header.classList.add("test");
      });
    }
    header.classList.remove("test");
  });  
  // nav 마우스아웃 처리
  header.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
    header.classList.remove("test");
  });

  let gnbA = document.querySelectorAll(".gnb > li");
  let navBlueBar = document.querySelector(".nav-blue-bar");

  // 최초 위치 및 너비 설정
  let posX = gnbA[0].getBoundingClientRect().left;
  let widthX = gnbA[0].getBoundingClientRect().width;
  // navBlueBar.style.left = posX + "px";
  // navBlueBar.style.width = widthX + "px";

  gnbA.forEach((item) => {
    item.addEventListener("mouseenter", function (event) {
      posX = this.getBoundingClientRect().left;

      widthX = this.getBoundingClientRect().width;

      anime({
        targets: navBlueBar,
        left: posX,
        width: widthX,
        easing: "easeInOutQuad",
        duration: 500,
      });
    });
    // console.log(posX);
  });
});
