document.onscroll = menuFixed;
function menuFixed() {
    if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('menu-fixed');
    } else {
        document.querySelector('nav').classList.remove('menu-fixed');
    }
}