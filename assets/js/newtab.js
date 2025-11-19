document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href]:not([href^="#"])').forEach(function(link) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});