
var datos = {}


function guardaDatos(){
    datos.name =document.getElementById("name").value;
    datos.surname= document.getElementById("surname").value;
    
    
    let street_type = document.getElementById("street_type").value;
    let street_name = document.getElementById("street_name").value;
    let cip_code = document.getElementById("cip_code").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let country = document.getElementById("country").value;

    datos.direction = `${street_type} ${street_name}, ${cip_code}, ${city}, ${province}, ${country}`;
    
    datos.birth_date = document.getElementById("birth_date").value;
    datos.avg_grade = document.getElementById("avg_grade").value;
    datos.tlph = document.getElementById("tlph").value;
    datos.email = document.getElementById("email").value;
    datos.account_type = document.querySelector('input[name="account_type"]:checked').value;

    
    if(localStorage.hasOwnProperty('form_users')){
        users.push(datos);
    }else{
        users = [];
        users.push(datos);
    }

    localStorage.setItem("form_users", JSON.stringify(users));
}

document.addEventListener("DOMContentLoaded",function() {
    var users = localStorage.getItem("form_users");
    if(users === null){
        let h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode("NO HAY USUARIOS TODAVÍA"));
    }else{
 
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let row = document.createElement("tr");
        row.appendChild(document.createElement("td").appendChild(document.createTextNode("Nombre")));
        row.appendChild(document.createElement("td").appendChild(document.createTextNode("Apellidos")));
        row.appendChild(document.createElement("td").appendChild(document.createTextNode("Dirección")));
        row.appendChild(document.createElement("td").appendChild(document.createTextNode("Fecha de Nacimiento")));
        row.appendChild(document.createElement("td").appendChild(document.createTextNode("Nota media")));
        row.appendChild(document.createElement("td").appendChild(document.createTextNode("Número de telefono")));
        row.appendChild(document.createElement("td").appendChild(document.createTextNode("Email")));
        row.appendChild(document.createElement("td").appendChild(document.createTextNode("Tipo de cuenta")));
        thead.appendChild(row);

        table.appendChild(thead);
        table.appendChild(tbody);    
        users.array.forEach(user => {
            var fila = document.createElement("tr");
            fila.appendChild(document.createElement("td").appendChild(document.createTextNode(user.name)));
            fila.appendChild(document.createElement("td").appendChild(document.createTextNode(user.surname)));
            fila.appendChild(document.createElement("td").appendChild(document.createTextNode(user.direction)));
            fila.appendChild(document.createElement("td").appendChild(document.createTextNode(user.birth_date)));
            fila.appendChild(document.createElement("td").appendChild(document.createTextNode(user.avg_grade)));
            fila.appendChild(document.createElement("td").appendChild(document.createTextNode(user.tlph)));
            fila.appendChild(document.createElement("td").appendChild(document.createTextNode(user.email)));
            fila.appendChild(document.createElement("td").appendChild(document.createTextNode(user.account_type)));
            tbody.appendChild(fila);
        });

        table.appendChild(tbody);
        
        table.querySelectorAll("thead > tr > td").classList.add("theader");
        table.querySelectorAll("tbody > tr > td").classList.add("data");
    
        document.getElementById("tabla").appendChild(table);
    }
});