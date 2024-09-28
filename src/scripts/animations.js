import { animate, scroll, ScrollOffset } from "motion";

document.querySelectorAll(".parallax-me").forEach((item) => {
  let offset = JSON.parse(item.getAttribute("data-parallax-offset")) || ScrollOffset.Enter;
  let distance = JSON.parse(item.getAttribute("data-parallax-distance")) || 220;
  scroll(animate(item, { transform: `translateY(${distance}px)` }), {
    target: item,
    offset,
  });
});
