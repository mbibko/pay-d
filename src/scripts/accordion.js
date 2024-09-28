import Accordion from 'accordion-js';
let accordionWrapperElement = document.querySelector(".tailwind-accordion-container");
let accordionWrapperNestedElements = accordionWrapperElement.querySelectorAll(".tailwind-accordion-container-nested");


new Accordion([accordionWrapperElement, [...accordionWrapperNestedElements]], {
  elementClass: "tailwind-ac",
  triggerClass: "tailwind-trigger",
  panelClass: "tailwind-panel",
  activeClass: "tailwind-active"
});