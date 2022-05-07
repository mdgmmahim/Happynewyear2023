// snow fall

function creatsnow(){
    let container = document.querySelector('.container');
    let span = document.createElement('span');

    span.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(span);

    setTimeout(()=>{
        span.remove();
    }, 5000);
};
setInterval(creatsnow, 100);
function creatsnow2(){
    let container = document.querySelector('.container');
    let span2 = document.createElement('span');
    span2.className = 'span2'
    span2.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(span2);

    setTimeout(()=>{
        span2.remove();
    }, 5000);
};
setInterval(creatsnow2, 100);

// count down part

let countData = new Date('jan 1, 2023 00:00:00').getTime()

function countDown() {
    let now = new Date().getTime();
    gap = countData - now;

    let second = 1000;
    let minutes = second * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (second));

    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
};
setInterval(function () {
    countDown();
}, 1000);
