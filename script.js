window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
});