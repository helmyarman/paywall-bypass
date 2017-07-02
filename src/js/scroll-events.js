/* Prevent event listeners from blocking scroll */
window.addEventListener('scroll', function(event) {
  event.stopPropagation();
}, true);

window.addEventListener('mousewheel', function() {
  event.stopPropagation();
}, true);