window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 20)
})
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("stickydown", window.scrollY > 20)
})
