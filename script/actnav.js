var section;
var sections = {};

(function() {
  "use strict";
  var section = document.querySelectorAll(".section");
  var i = 0;
  Array.prototype.forEach.call(section,function(e) {
    sections[e.id] = e.offsetTop;
    
  });
  
})();


window.onscroll = function(){
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  for(i in sections) {
  if(sections[i] <= scrollPosition) {
    document.querySelector(".active").setAttribute("class"," ");
    document
    .querySelector("a[href*=" + i + "]")
    
    .setAttribute("class","active");
    }
  }
}

var navToggle = document.getElementById('nav-toggle');

var navItems = document.getElementById('nav-items');

//9. Add an "event listener" for the button. When the button is clicked, we'll call a function

navToggle.addEventListener('click', function(){
  navItems.classList.toggle('mobile-nav-hidden');
  // 
});