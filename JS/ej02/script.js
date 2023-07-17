
colors = ['red', 'green', 'blue', 'yellow' , 'magenta', 'orange'];

function holaMundo(){
    let div = document.getElementById("contenido");
    div.appendChild(document.createTextNode("Hola mundo!"));
}

function changeBackgroundColor(){
    const currentColor = document.getElementById('contenido').style.backgroundColor;
    const nextColor = colors.indexOf(currentColor) + 1 < colors.length ? colors[colors.indexOf(currentColor) + 1]: colors[0];

    document.getElementById('contenido').style.backgroundColor = nextColor;
}


setInterval(changeBackgroundColor, 1000);
holaMundo();
