// import "./index.css";
import "./index.sass";
import "virtual:svg-icons-register";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import { getSiblings } from "./helpers/helpers";

// init Swiper:
const swiper = new Swiper(".js-hero-bottom-slider", {
  // configure Swiper to use modules
  modules: [Navigation, Autoplay],
  // autoplay: {
  //   delay: 7500
  // },
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  breakpoints: {
    // 640: {
    //   slidesPerView: 4,
    //   spaceBetween: 20,
    // },
    // 1024: {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    // },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".js-accordion").forEach((accordionWrapper) => {
  [...accordionWrapper.children].forEach((accordionEl) => {
    let buttonEl = accordionEl.querySelector("button");
    let collapseEl = buttonEl.nextElementSibling;

    let closestEls = getSiblings(accordionEl);

    buttonEl.addEventListener("click", () => {
      if (buttonEl.getAttribute("aria-expanded") === "true") {
        buttonEl.setAttribute("aria-expanded", "false");
      } else {
        closestEls.forEach((closestEl) => {
          let closestButtonEl = closestEl.querySelector("button");
          let closestCollapseEl = closestButtonEl.nextElementSibling;
          closestButtonEl.setAttribute("aria-expanded", "false");
          closestCollapseEl.classList.remove("active");
        });

        buttonEl.setAttribute("aria-expanded", "true");
      }
      collapseEl.classList.toggle("active");
    });
  });
});
