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
    interval: '250'
}

// Home Section - Slide Right
ScrollReveal().reveal('.home-items', slideRight);
// Section Title - Slide Up
ScrollReveal().reveal('.section-title', slideUp);
// Rest of Sections - Slide Up
ScrollReveal().reveal('.aboutme-items', slideUp);
ScrollReveal().reveal('.skills-items', slideUp);
ScrollReveal().reveal('.project-items', slideUp);
ScrollReveal().reveal('.contact-items', slideUp);
