document.getElementById('menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
    } else {
        mobileMenu.classList.add('open');
    }
});

document.querySelectorAll('#mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.remove('open');
    });
});