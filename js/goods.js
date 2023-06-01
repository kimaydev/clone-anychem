window.addEventListener("load", function () {
  let swGoods;
	const SLIDECOUNT = 4;
  // ① async로 JSON 불러오기
  let getData = async function () {
    try {
      let res = await fetch("data/gooddata.json");
      let result = await res.json();
      makeSlide(result);
      makeSlideShow();
      makeMenu(result);
    } catch (err) {
      console.log(err);
    }
  };
  // ② fetch로 JSON 불러오기
  // this.fetch("data/gooddata.json")
  // .then((res) => res.json())
  // .then((result) => console.log(result))
  // .catch((err) => console.log(err));
  function makeSlide(_data) {
    let html = ``;
    let copyArr = [..._data.goods];
    if (_data.goods.length <= SLIDECOUNT) {
      copyArr = [..._data.goods, ..._data.goods];
    }
    // swiper slide loop가 4개 미만이면 동작하지 않는 현상이 발생하여 배열을 2번 사용함
    copyArr.forEach((item, index) => {
      let tag = `
				<div class="swiper-slide">
          <a href="${item.link}" class="good-link">
          	<div class="good-item">
              <div class="good-item-img">
                <img src="images/${item.image}" alt="${item.alt}" />
              </div>
              <div class="good-item-txt">
                <div>
                  <p>${item.title}</p>
                  <span>${item.desc}</span>
                </div>
              </div>
            </div>
        	</a>
        </div>
			`;
      html += tag;
    });
    document.querySelector(".sw-goods .swiper-wrapper").innerHTML = html;
  }
  function makeSlideShow() {
    swGoods = new Swiper(".sw-goods", {
      speed: 1000,
      loop: true,
      slidesPerView: 3,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".sw-goods-prev",
        nextEl: ".sw-goods-next",
      },
    });
    swGoods.on("slideChange", function () {
      let count = this.realIndex % SLIDECOUNT;
      focusMenu(count);
    });
  }
	function focusMenu(_index) {
    let lis = document.querySelectorAll(".goods-list li a");
    lis.forEach((item, index, arr) => {
      if (index === _index) {
        // 순서번호랑 슬라이드 번호가 같다면 add
        item.classList.add("focus");
      } else {
        item.classList.remove("focus");
      }
    });
  }
  function makeMenu(_data) {
    let html = ``;
    _data.goods.forEach((item, index, arr) => {
      let tag = `
				<li>
					<a href="#">${item.title}</a>
				</li>
			`;
      html += tag;
    });
    document.querySelector(
      ".goods .goods-wrap .goods-menu .goods-list"
    ).innerHTML = html;
    // li의 태그를 클릭하는 경우 슬라이드 이동
    let lis = document.querySelectorAll(
      ".goods .goods-wrap .goods-menu .goods-list > li > a"
    );
    lis.forEach((item, index) => {
      item.onclick = function (event) {
        event.preventDefault();
        swGoods.slideToLoop(index);
      };
    });
  }  
  getData();
});
