
function horaActual(){
    let div  = document.getElementById("contenido");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const currentTime = hours + ":" + minutes + ":" + seconds;
    div.innerText = currentTime;
}

setInterval(horaActual,1000);