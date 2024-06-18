document.getElementById("fb-icon").addEventListener("click", function () {
  document.getElementById("link-fb").click();
});
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > window.innerHeight * 0.05) {
    navbar.style.backgroundImage =
      "linear-gradient(to right, rgba(207, 222, 243, 0.8), rgba(133, 177, 255, 0.8))";
  }
});
