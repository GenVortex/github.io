document.addEventListener("DOMContentLoaded", function() {
  // Force TOUS les liens à s'ouvrir dans un nouvel onglet
  document.querySelectorAll("a[href]").forEach(function(a) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
});