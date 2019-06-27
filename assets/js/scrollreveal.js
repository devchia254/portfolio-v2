
// ScrollReveal({ reset: true });

const slideRight = {
    delay: 350,
    distance: '100px',
    duration: 1000,
    origin: 'left',
    easing: 'ease',
    interval: '500',
    reset: true
}

const slideLeft = {
    delay: 700,
    distance: '100px',
    duration: 1000,
    origin: 'right',
    easing: 'ease',
    interval: '500',
    reset: true
}

// All Sections
ScrollReveal().reveal('.section-title', { delay: 300 });
// Home Section
ScrollReveal().reveal('.home-items', slideRight);
// About Section
ScrollReveal().reveal('.aboutme-item1', slideRight);
ScrollReveal().reveal('.aboutme-item2', slideLeft);
// Skills Section
ScrollReveal().reveal('.icon-list', slideRight);
ScrollReveal().reveal('.skills-content', slideLeft);
// Portfolio Section
ScrollReveal().reveal('.proj-content', slideRight);
ScrollReveal().reveal('.proj-img', slideLeft);
// Contact Section
// ScrollReveal().reveal('.contact', { delay: 1000 });


// const leftSide = [
//     document.querySelectorAll('.home-items'),
//     document.querySelector('.aboutme-item1'),
//     document.querySelector('.icon-list'),
//     document.querySelector('.proj-content')
// ];

// ScrollReveal().reveal( leftSide, slideRight);