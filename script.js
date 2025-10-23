const animatedElements = document.querySelectorAll('.banner, .about, .projects, .skills, .contact');

const animationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } 
        
        else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(element => {
    animationObserver.observe(element);
});


// active navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    threshold: 0.5 
});

sections.forEach(section => {
    navObserver.observe(section);
});