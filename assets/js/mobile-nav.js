// Select mobile navigation elements
const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

// Toggle mobile menu visibility
mobileNav.addEventListener('click', (e) => {
    navlinks.classList.toggle('mobile-menu');
    if (e.target === menuBtn) {
        menuBtn.replaceWith(closeBtn);
        closeBtn.style.display = 'block';
    }
    if (e.target === closeBtn) {
        closeBtn.replaceWith(menuBtn);
    }
});

