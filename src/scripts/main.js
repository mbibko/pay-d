import "virtual:svg-icons-register";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import { getSiblings } from "../helpers/helpers.js";
import Choices from "choices.js";

const choices = new Choices(".js-choice", {
  searchEnabled: false,
  placeholder: true,
  classNames: {
    containerInner: ["form-select", "form-element-with-icon"],
  },
});

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
    640: {
      slidesPerView: 3,
    },
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


document.querySelectorAll(".js-modal").forEach((modalWrapper) => {
  let buttonsTrigger = document.querySelectorAll(`[data-modal-toggle='${modalWrapper.id}']`);
  let modalBackdrop = modalWrapper.querySelector(".modal-backdrop");

  const openModal = () => {
    modalWrapper.classList.add("active");
    setTimeout(() => modalWrapper.classList.add("show"), 300);
  }
  const closeModal = () => {
    modalWrapper.classList.remove("show");
    setTimeout(() => {
      modalWrapper.classList.remove("active");
    }, 300);
  }

  console.log(buttonsTrigger);

  [...buttonsTrigger].forEach((button) => {
    button.addEventListener("click", () => {
      if (modalWrapper.classList.contains("active")) {
        closeModal()
      } else {
        openModal()
      }
    });
  });

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      closeModal()
    }
  })
});