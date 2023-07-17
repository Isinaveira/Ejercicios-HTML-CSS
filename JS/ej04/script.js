function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return hours + ":" + minutes + ":" + seconds;
}

function updateCurrentTime() {
    const elements = document.getElementsByClassName("now");

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = getCurrentTime();
    }
}

setInterval(updateCurrentTime, 1000);