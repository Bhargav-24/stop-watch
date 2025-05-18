const Display = document.getElementById("display");
const Start = document.getElementById("start");
const Stop = document.getElementById("stop");
const Reset = document.getElementById("reset");

let timer = 0
let interval = null

Start.onclick = function(){
    if (interval) return;

    interval = setInterval(() => {
        timer += 0.01
        Display.textContent = timer.toFixed(2);
    }, 10);
}

Stop.onclick = function(){
    clearInterval(interval);
    interval = null;
}

Reset.onclick = function(){
    clearInterval(interval);
    interval = null;
    timer = 0;
    Display.textContent = timer;
}