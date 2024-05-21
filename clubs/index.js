let fixedNav = document.getElementById("scrollNav");
let sideNav = document.getElementById("sidenav");
let button = document.getElementById("button");
let btn1 = document.getElementById("show-more-btn-1");
let btn2 = document.getElementById("show-more-btn-2");
let btn3 = document.getElementById("show-more-btn-3");
let cont1 = document.getElementById("cont-1");
let cont2 = document.getElementById("cont-2");
let cont3 = document.getElementById("cont-3");
let cont12 = document.getElementById("cont-1-2");
let cont22 = document.getElementById("cont-2-2");
let cont32 = document.getElementById("cont-3-2");
let col2 = document.getElementById("col-2");
let col3 = document.getElementById("col-3");
let backBtn1= document.getElementById("back-btn-1");
let backBtn2 = document.getElementById("back-btn-2");
let backBtn3 = document.getElementById("back-btn-3");
// scroll nav bar
window.addEventListener("scroll", (j) => {
    if (window.scrollY >= 140) {
        fixedNav.classList.add("ani-nav");
    } else {
        fixedNav.classList.remove("ani-nav");
    }
});
button.addEventListener("click", function () {
    sideNav.classList.toggle("show");
});
// starting image animation
window.addEventListener("load", () => {
    var a = document.getElementById("a");
    a.style.transform = "scale(1)";
});
// for more info in card
btn1.addEventListener("click", function () {
    cont1.classList.add("hide");
    cont12.classList.add("show-cont-2");
});
btn2.addEventListener("click", function () {
    cont2.classList.add("hide");
    cont22.classList.add("show-cont-2");
    col2.classList.remove("for-col-gap");
});
btn3.addEventListener("click", function () {
    cont3.classList.add("hide");
    cont32.classList.add("show-cont-2");
    col3.classList.remove("for-col-gap");
});
// for back in card
backBtn1.addEventListener("click", function () {
    cont1.classList.remove("hide");
    cont12.classList.remove("show-cont-2");
});
backBtn2.addEventListener("click", function () {
    cont2.classList.remove("hide");
    cont22.classList.remove("show-cont-2");
    col2.classList.add("for-col-gap");
});
backBtn3.addEventListener("click", function () {
    cont3.classList.remove("hide");
    cont32.classList.remove("show-cont-2");
    col3.classList.add("for-col-gap");
});