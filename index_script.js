var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-8.5%";
  }
  prevScrollpos = currentScrollPos;
}











/*const nav = document.querySelector("header");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if(lastScrollY<window.scrollY){
    console.log("going down");
    nav.classList.add("nav--hidden");
  }
  else{
    console.log("going up");
    nav.classList.remove("nav--hidden");
  }
  lastScrollY=window.scrollY;
});
*/
