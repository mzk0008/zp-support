// hamburger
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});

// リサイズ時ハンバーガーちらつき防止
class Resize {
  constructor(target) {
    this.timeoutId;
    this.target = document.querySelector(target);

    window.addEventListener("resize", this._resize.bind(this));
  }

  _resize() {
    this.target.classList.add("is-resize");
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.target.classList.remove("is-resize");
    }, 300);
  }
}

new Resize("html");

// 1個目：トップKVスライダー
const topKvSwiper = new Swiper(".top_kv_swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1200,
});

// 2個目：ニューススライダー（SP1枚・PC3枚表示）
const newsSwiper = new Swiper(".news_article_slider", {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1080: {
      slidesPerView: 3, // PCで3件表示
      slidesPerGroup: 1, // でも1件ずつ動かす！
      spaceBetween: 32,
    },
  },
});

// section_heading ワイプイン
document.querySelectorAll(".m_section_heading").forEach((section) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  tl.fromTo(
    section.querySelector(".m_section_heading-en"),
    {
      x: 100,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.6,
    }
  ).fromTo(
    section.querySelector(".m_section_heading-jp"),
    {
      x: 100,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.6,
    },
    "-=0.3"
  );
});

// top_service ワイプイン
document.querySelectorAll(".top_service_item").forEach((item, index) => {
  const directionX = index % 2 === 0 ? -100 : 100; // 奇数なら左、偶数なら右から

  gsap.fromTo(
    item,
    {
      x: directionX,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: item,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    }
  );
});
