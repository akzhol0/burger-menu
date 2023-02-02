let counter = 0;

document.querySelector('.menu-btn').addEventListener('click', function() {
    counter++;
    if (counter %2 === 1) {
        document.querySelector('.menu-bar').setAttribute('id', 'menu-bar');
        document.querySelector('.line1').setAttribute('id', 'line1');
        document.querySelector('.line2').setAttribute('id', 'line2');
        document.querySelector('.line3').setAttribute('id', 'line3');
    } else {
        document.querySelector('.menu-bar').removeAttribute('id', 'menu-bar');
        document.querySelector('.line1').removeAttribute('id', 'line1');
        document.querySelector('.line2').removeAttribute('id', 'line2');
        document.querySelector('.line3').removeAttribute('id', 'line3');
    }
})
