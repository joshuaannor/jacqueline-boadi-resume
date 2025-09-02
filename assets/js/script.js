// Minimal shared JS: highlight active nav link
(function() {
  try {
    var path = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function(a){
      var target = a.getAttribute('href');
      if (target === path) {
        a.classList.add('active');
      }
    });
  } catch(e) {}
})();

