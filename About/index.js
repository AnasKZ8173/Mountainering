let fixedNav = document.getElementById("scrollNav");
let sideNav = document.getElementById("sidenav");
let button = document.getElementById("button");
//
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
window.addEventListener("load", () => {
    var a = document.getElementById("a");
    a.style.transform = "scale(1)";
});