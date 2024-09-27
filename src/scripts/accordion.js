import { Accordion } from "flowbite";

document.querySelectorAll("[data-accordion-wrapper]").forEach((accordionElement) => {
  let accordionItem = accordionElement.children;
  let accordionHeadingElements = [];
  [...accordionItem].forEach((item) =>
    accordionHeadingElements.push(item.querySelector(".accordion-collapse-heading")),
  );
  let accordionBodyElements = accordionHeadingElements.map((el) =>
    accordionElement.querySelector(el.querySelector("[data-accordion-target]").getAttribute("data-accordion-target")),
  );
  accordionHeadingElements.forEach((el) => {
    setTimeout(() => {
      setParentBodyHeight(el, false);
    }, 1000);
    el.addEventListener("click", function () {
      setParentBodyHeight(el, true);
      setTimeout(() => {
        f(accordionBodyElements);
      }, 10);
      setTimeout(() => {
        setParentBodyHeight(el, false);
      }, 1000);
    });
  });
  setTimeout(() => {
    f(accordionBodyElements);
  }, 1000);
});

function f(accordionBodyElements) {
  accordionBodyElements.forEach((el) => {
    if (el.classList.contains("hidden")) {
      el.style.height = "0px";
    } else {
      el.style.height = el.children[0].offsetHeight + "px";
    }
  });
}

function setParentBodyHeight(el, remove) {
  let parentCollapseEl = el.closest("[data-accordion-wrapper]").parentElement.closest("[data-accordion-wrapper]");
  if (parentCollapseEl) {
    parentCollapseEl.querySelectorAll("[data-accordion-item]").forEach((parentAccordionItem) => {
      let parentAccordionHeading = parentAccordionItem.querySelector("[data-accordion-target]");
      if (parentAccordionHeading.getAttribute("aria-expanded") === "false") return;
      let parentAccordionBody = parentAccordionItem.querySelector(
        parentAccordionHeading.getAttribute("data-accordion-target"),
      );
      parentAccordionBody.style.height = remove ? null : parentAccordionBody.children[0].offsetHeight + "px";
    });
  }
}
