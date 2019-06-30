
// ScrollReveal({ reset: true });

const slideRight = {
    delay: 350,
    distance: '50px',
    duration: 1000,
    origin: 'left',
    easing: 'ease',
    interval: '250',
    reset: true
}

const slideUp = {
    delay: 550,
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease',
    interval: '500',
    reset: true
}

// All Sections
ScrollReveal().reveal('.section-title', { delay: 350, reset: true });
// Home Section
ScrollReveal().reveal('.home-items', slideRight);
// About Section
ScrollReveal().reveal('.aboutme-item2', slideRight);
ScrollReveal().reveal('.aboutme-item3', slideUp);
// Skills Section
ScrollReveal().reveal('.icon-list', slideUp);
ScrollReveal().reveal('.skills-content', slideRight);
// Portfolio Section
ScrollReveal().reveal('.proj-content', slideRight);
ScrollReveal().reveal('.proj-img', slideUp);
// Contact Section
ScrollReveal().reveal('.contact-items', { delay: 350, reset: true });


// const leftSide = [
//     document.querySelectorAll('.home-items'),
//     document.querySelector('.aboutme-item1'),
//     document.querySelector('.icon-list'),
//     document.querySelector('.proj-content')
// ];

// ScrollReveal().reveal( leftSide, slideRight);