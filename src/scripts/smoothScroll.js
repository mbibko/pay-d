export default function SmoothScroll(target, duration, offset) {
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.scrollY;
  let distance = targetPosition + offset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = easing(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 *t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}