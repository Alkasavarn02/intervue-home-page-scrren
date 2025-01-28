const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav-right-elements');

hamburgerMenu.addEventListener('click', () => {
    if(navBar.classList.contains('show-mobile-nav')) {
        navBar.classList.remove('show-mobile-nav');
    } else {
        navBar.classList.add('show-mobile-nav');
    }
})