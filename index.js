let fixedNav = document.getElementById("scrollNav");
let sideNav = document.getElementById("sidenav");
let button = document.getElementById("button");
let heading = document.getElementById("forendanimation");
let quote = document.getElementById("quoteanimation");
let website = document.getElementById("website");
let loadingScreen = document.getElementById("loading-container");
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
    // loadingScreen.classList.add("loading-screen");
    // website.classList.add("sh-website");
    var a = document.getElementById("a");
    a.style.transform = "scale(1)";
    heading.classList.add("animation");
    quote.classList.add("animation");
});
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const createAcc = document.getElementById("create-acc");
const forRemove = document.getElementById("forRemove");

function signUpActive (){
	container.classList.add("right-panel-active");
    console.log("ajsndoasd");
};
function signUpRemove (){
	container.classList.remove("right-panel-active");
};

signUpButton.addEventListener('click', () => {
	signUpActive ();
});
signInButton.addEventListener('click', () => {
	signUpRemove ();
});
createAcc.addEventListener('click', () => {
	forRemove.classList.add("remove");
	signUpActive ();
});

