import { animate, scroll, ScrollOffset } from "motion";

document.querySelectorAll(".parallax-me").forEach((item) => {
  let offset = JSON.parse(item.getAttribute("data-parallax-offset")) || ScrollOffset.Enter;
  scroll(animate(item, { transform: "translateY(220px)" }), {
    target: item,
    offset,
  });
});
