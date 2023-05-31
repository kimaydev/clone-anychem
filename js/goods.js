window.addEventListener("load", function () {
  const swGoods = new Swiper(".sw-goods", {    
    speed: 1000,
    loop: true,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
