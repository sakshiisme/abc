
// final.js - small UX enhancements
document.addEventListener('DOMContentLoaded', function(){
  // IntersectionObserver for reveal-on-scroll
  var opts = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 };
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, opts);
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // Make external links open in new tab (nice touch)
  document.querySelectorAll('a[href^="http"]').forEach(function(a){
    if(a.hostname !== location.hostname) { a.setAttribute('target','_blank'); a.setAttribute('rel','noopener noreferrer'); }
  });

  // Add simple mobile menu toggle if a nav has .mobile-toggle button
  var toggle = document.querySelector('.mobile-toggle');
  if(toggle){
    toggle.addEventListener('click', function(){ var t = document.querySelector('.nav-links'); if(t) t.classList.toggle('open'); });
  }
});
