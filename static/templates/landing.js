w1 = document.getElementById("waveTrans1");
w2 = document.getElementById("waveTrans2");
w3 = document.getElementById("waveTrans3");
w4 = document.getElementById("waveTrans4");



window.addEventListener('scroll', function() {
    let y = window.scrollY;

    w1.style.backgroundPositionX = 400 + y * 4 + 'px';
    w1.style.backgroundPositionX = 300 + y * -4 + 'px';
    w1.style.backgroundPositionX = 200 + y * 2 + 'px';
    w1.style.backgroundPositionX = 100 + y * -2 + 'px';
});



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = '0';
                section.style.transform = 'translateY(50px)';
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll(); // Initial check on page load
});
