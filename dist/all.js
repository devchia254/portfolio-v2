//Toggle Menu Animation
let mainNav = document.getElementById('js-menu');
let fixedNav = document.getElementById('js-fixed');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    fixedNav.classList.toggle('colour');
});

//Navbar scroll colour change
window.onscroll = function changeClass(){
    var fixedBar = document.getElementById('js-fixed'); 
    var mainNav = document.getElementById('js-menu');
    var navBar = document.getElementById('js-bar');

    var secondSection = document.getElementById('secondSection'); // selects the element by Id. 
    var secondSectionTop = secondSection.getBoundingClientRect().top; //selects the Y position of the element in the view
    var navBarHeight = navBar.getBoundingClientRect().height; //select the height of the navBar


    if(secondSectionTop <= navBarHeight) {
        navBar.className = ('navbar colour');
        mainNav.className = ('main-nav colour');
        fixedBar.className = ('fixed-nav colour');
    } else if(secondSectionTop >= navBarHeight) {
        navBar.className =  ('navbar');
        mainNav.className = ('main-nav');
        fixedBar.className = ('fixed-nav');
    }

}

window.onload = function() {

    const easeInCubic = function (t) { return t*t*t }	
    const scrollElems = document.getElementsByClassName('nav-links');
    
    
    //console.log(scrollElems);
    const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
        //debugger;
        const runtime = stamp - start;
        let progress = runtime / duration;
        const ease = easeInCubic(progress);
        
        progress = Math.min(progress, 1);
        // console.log(startScrollOffset,startScrollOffset + (scrollEndElemTop * ease));
        
        const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
        window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
    
        if(runtime < duration){
            requestAnimationFrame((timestamp) => {
                const stamp = new Date().getTime();
                scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
            })
        }
    }
    
    function smoothScroll (e) {
        e.preventDefault();
        const scrollElemId = e.target.href.split('#')[1];
        // alert(scrollElemId);
        const scrollEndElem = document.getElementById(scrollElemId);
        
        const anim = requestAnimationFrame(() => {
            const stamp = new Date().getTime();
            const duration = 1200;
            const start = stamp;
                
            const startScrollOffset = window.pageYOffset;
        
            const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
                    
            scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
            // scrollToElem(scrollEndElemTop);
        })
    }
    
    //Nav Links Scroll Animation
    for(let i=0; i<scrollElems.length; i++) {
      const elem = scrollElems[i];  
        elem.addEventListener('click', smoothScroll);
    }

    //Show More button Scroll Animation
    const button = document.getElementById("know-more");

    button.addEventListener('click', smoothScroll);

    console.log(button);


}



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
ScrollReveal().reveal('.section-title', { delay: 300, reset:  true });
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