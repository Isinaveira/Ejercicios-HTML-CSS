function startAlarm() {
    const timerInput = document.getElementById("timer");
    const startBtn = document.getElementById("startBtn");
    const status = document.getElementById("status");
    const resetBtn = document.getElementById("restart");
    const seconds = parseInt(timerInput.value);

    if (seconds > 0) {
        startBtn.disabled = true;
        
        status.innerText = "La alarma está activa.";

        countdown = setTimeout(() => {
            status.innerText = "¡La alarma está sonando!";
            resetBtn.disabled = false;
        }, seconds * 1000);
    }
}


function reset(){
    const resetBtn = document.getElementById("restart");
    resetBtn.disabled = true;
    const startBtn = document.getElementById("startBtn");
    startBtn.disabled = false;
    const timerInput = document.getElementById("timer");
    timerInput.value = 0;
    const status = document.getElementById("status");
    status.innerText = "";

    resetBtn
}

function snooze(){

    const snoozeBtn = document.getElementById("snoozeBtn");
    const resetBtn = document.getElementById("restart");
    const status = document.getElementById("status");

    clearTimeout(countdown);

    status.innerText = "Alarma pospuesta";
    resetBtn.disable = true;
    snoozeBtn.disabled = true;

    status.innerText = "Alarma pospuesta";
    resetBtn.disabled = true;
    snoozeBtn.disabled = true;

    const snoozeDuration = 5; //segundos


    snoozeTimeout = setTimeout(() => {
        startAlarm();
        snoozeBtn.disabled = false;
    }, snoozeDuration * 1000);

}