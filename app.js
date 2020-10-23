let a = 240;

setInterval(function() {
    a--;
    if (a >= 0) {
        id = document.getElementById('timer');
        id.innerHTML = a;
    }


    if (a == 0) {
        id.innerHTML = 'все! спасибо за внимание :)';
    }
}, 1000);