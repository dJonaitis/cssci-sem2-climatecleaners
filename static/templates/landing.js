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