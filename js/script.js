const navbarNav = document.querySelector(".navbar-nav")
const hamburgerMenu = document.querySelector("#hamburger-menu")

hamburgerMenu.onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
}

// Klik diluar sidebar untuk menghilangkan sidebar
document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})