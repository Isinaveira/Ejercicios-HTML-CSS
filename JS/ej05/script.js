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


