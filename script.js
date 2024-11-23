document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    burgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !burgerMenu.contains(event.target)) {
            nav.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
}); 