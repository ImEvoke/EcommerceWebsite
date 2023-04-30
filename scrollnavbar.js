window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 150)
})
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("stickydown", window.scrollY > 150)
})
