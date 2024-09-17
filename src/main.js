// import "./index.css";
import "./index.sass";
import "virtual:svg-icons-register";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Pagination, Autoplay],
  // autoplay: {
  //   delay: 7500
  // },
  speed: 500,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
