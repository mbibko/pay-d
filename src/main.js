// import "./index.css";
import "./index.sass";
import "virtual:svg-icons-register";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import { getSiblings } from "./helpers/helpers";

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
