const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const html = document.querySelector('html');
const fadeElements = document.querySelectorAll('.unvisibility');

btnHamburger.addEventListener('click', function () {

    if (header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open');
        html.classList.remove('noscroll');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    }

    else { // Open Hamburger Menu
        header.classList.add('open');
        html.classList.add('noscroll');
        fadeElements.forEach(function (element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});