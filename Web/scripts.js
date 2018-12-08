//Funció Login
function funcioLogin(){
    var txt = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("contr").value
    };
    $.ajax({
        type: "POST",
        url: "http://ordinadorcasa.no-ip.org:4100/auth/login",
        data: JSON.stringify(txt),
        contentType: 'application/json',
        dataType: "json"
    })
    .then(function(data) {
        sessionStorage.setItem("token", data.token);
        window.location.replace("../index.html");
    }, function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.responseJSON.statusCode == 401){
            alert("Email/Contrasenya incorrectes");
        } else {
            alert("Servidor no disponible actualment");
        }
    });
}

//funció Registre
function funcioRegistre(){
    var txt = {
      "name": document.getElementById("formName").value,
      "nif": document.getElementById("formNIF").value,
      "email": document.getElementById("formEmail").value,
      "password": document.getElementById("formPassword").value,
      "phone": document.getElementById("formPhone").value
    };
    $.ajax({
        type: "POST",
        url: "http://ordinadorcasa.no-ip.org:4100/auth/register",
        data: JSON.stringify(txt),
        contentType: 'application/json',
        dataType: "json"
    })
    .then(function(data, textStatus, jqXHR) {
        alert("Registre completat satisfactòriament! Inici sessió");
        window.location.href = "../vistes/login.html";
    }, function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.responseJSON.statusCode == 400) {
            alert("Ja existeix un usuari amb aquest compte de correu");
        }
    });
}

//funcio Logout(Index)
function logoutInd(){
    sessionStorage.clear();
    window.location.replace("./vistes/login.html");
}

//funcio Logout(Resta)
function logoutRest(){
    sessionStorage.clear();
    window.location.replace("../vistes/login.html");
}

//function updateProfile
function updateProfile(){
    var txt = {
        "name": document.getElementById("input-username").value,
        "email": document.getElementById("input-email").value,
        "NIF": document.getElementById("input-nif").value,
        "phone": document.getElementById("input-phone").value,
        "address": document.getElementById("input-address").value,
        "city": document.getElementById("input-city").value,
        "postcode": document.getElementById("input-postal-code").value,
        "country": document.getElementById("input-country").value
    };
    var txt2 = {
        "NIF": "123456789"
    };
    $.ajax({
        type: "PATCH",
        url: "http://ordinadorcasa.no-ip.org:4100/profile",
        data: JSON.stringify(txt2),
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        },
        contentType: 'application/json',
        dataType: "json"
    })
    .then(function(data){
        sessionStorage.setItem("profileName", data.name);
        sessionStorage.setItem("profileEmail", data.email);
        sessionStorage.setItem("profileNIF", data.NIF);
        sessionStorage.setItem("profilePhone", data.phone);
        window.location.href = "../vistes/profile.html";
    }, function(jqXHR, textStatus, errorThrown){
        alert("Can't modify profile");
        //console.log(textStatus);
        //console.log(errorThrown);
    });
}

//funció pàgina principal
function imprimirTaula(){
    var dataToday = new Date();
    var data00 = new Date(dataToday.getFullYear(), dataToday.getMonth(), dataToday.getDate(), 00, 00);
    alert(data00.toString());
    var data23 = new Date(dataToday.getFullYear(), dataToday.getMonth(), dataToday.getDate(), 23, 59);
    alert(data23.toString());
    $.ajax({
        type: "GET",
        url: "http://ordinadorcasa.no-ip.org:4100/event/own?fromDate=" + data00.toString() + "&toDate=" + data23.toString(),
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        },
        contentType: 'application/json',
        dataType: "json"
    })
        .then(function(data){
            sessionStorage.setItem("profileNAct", data.events.length);
            if (data.events.length == 0){
                document.getElementById("taulaDiaPrincipal").innerHTML = "<tr> <th scope=\"row\"> No teniu cap activitat per al dia d'avui </th> </tr>";
            } else {
                var i, txt;
                for (i = 0, txt = ""; i < data.events.length; i++) {
                    txt += "<tr> <th scope=\"row\" onclick=\"pagSeeActPrin(" + data.events[i].id +")\" >" + data.events[i].name + "</th> <td>" + data.events[i].type + "</td>" +
                        "<td>" + data.events[i].capacity + "</td> <td class=\"text-left\"> <div class=\"dropdown\">" +
                        "<a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
                        "<i class=\"fas fa-ellipsis-v\"></i> </a> <div class=\"dropdown-menu dropdown-menu-left dropdown-menu-arrow\">" +
                        "<a class=\"dropdown-item\" onclick=\"pagModifyActPrin(" + data.events[i].id + ")\">Editar</a> <a class=\"dropdown-item\" onclick=\"eliminarAct(" + data.events[i].id + ")\">Eliminar</a>" +
                        "</div> </div> </td> </tr>";
                }
                document.getElementById("taulaDiaPrincipal").innerHTML = txt;
            }
        }, function(){
            document.getElementById("taulaDiaPrincipal").innerHTML = "<tr> <th scope=\"row\">" + "ERROR al carregar les activitats" + "</th> </tr>";
        });
}

//llistar activitats
function llistarActivitats(){
    $.ajax({
        type: "GET",
        url: "http://ordinadorcasa.no-ip.org:4100/event/own",
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        },
        contentType: 'application/json',
        dataType: "json"
    })
        .then(function(data){
            sessionStorage.setItem("profileNAct", data.events.length);
            if (data.events.length == 0){
                document.getElementById("taulaLlistat").innerHTML = "<tr> <th scope=\"row\"> No teniu cap activitat creada </th> </tr>";
            } else {
                data.events.sort(function(a, b){
                    return (new Date(a.startDate) - new Date(b.startDate));
                });
                var i, txt;
                for (i = 0, txt = ""; i < data.events.length; i++) {
                    var dateIni = new Date(data.events[i].startDate);
                    txt += "<tr> <th scope=\"row\" onclick=\"pagSeeActSec(" + data.events[i].id +")\" >" + data.events[i].name + "</th> <td>" + dateIni.getDate() + "/" + (dateIni.getMonth() + 1) + "/" + dateIni.getFullYear() + "</td>" +
                        "<td>" + data.events[i].capacity + "</td> <td class=\"text-left\"> <div class=\"dropdown\">" +
                        "<a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
                        "<i class=\"fas fa-ellipsis-v\"></i> </a> <div class=\"dropdown-menu dropdown-menu-left dropdown-menu-arrow\">" +
                        "<a class=\"dropdown-item\" onclick=\"pagModifyActSec(" + data.events[i].id + ")\">Editar</a> <a class=\"dropdown-item\" onclick=\"eliminarAct(" + data.events[i].id + ")\">Eliminar</a>" +
                        "</div> </div> </td> </tr>";
                }
                document.getElementById("taulaLlistat").innerHTML = txt;
            }
        }, function(){
            document.getElementById("taulaLlistat").innerHTML = "<tr> <th scope=\"row\">" + "ERROR al carregar les activitats" + "</th> </tr>";
        });
}

//funció crearActivitat
function crearActivitat(){
    var horaIni = document.getElementById("input-hourIni").value;
    horaIni = horaIni.split(":");
    var dataIni = document.getElementById("input-startDate").value;
    dataIni = dataIni.split("/");
    var horaFi = document.getElementById("input-hourFi").value;
    horaFi = horaFi.split(":");
    var dataFi = document.getElementById("input-endDate").value;
    dataFi = dataFi.split("/");

    var txt ={
        "name": document.getElementById("input-nomactivitat").value,
        "description": document.getElementById("input-description").value,
        "type": document.getElementById("input-interes").value,
        "startDate": new Date(dataIni[2], (dataIni[0] - 1), dataIni[1], horaIni[0], horaIni[1]),
        "endDate": new Date(dataFi[2], (dataFi[0] - 1), dataFi[1], horaFi[0], horaFi[1]),
        "longitude": 1,
        "latitude": 1,
        "capacity": document.getElementById("input-capacitat").value
    };
    $.ajax({
        type: "POST",
        url: "http://ordinadorcasa.no-ip.org:4100/event",
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        },
        data: JSON.stringify(txt),
        contentType: 'application/json',
        dataType: "json"
    })
    .then(function(data){
        sessionStorage.setItem("idAct", data.events.id);
        alert("Activitat creada correctament!");
        window.location.href = "../vistes/veureActivitat.html";
    }, function(){
        alert("Error al crear l'activitat");
    });
}

//funció eliminarActivitat
function eliminarAct(id){
    $.ajax({
        type: "DELETE",
        url: "http://ordinadorcasa.no-ip.org:4100/event/" + id,
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        },
        contentType: 'application/json',
        dataType: "json"
    })
    .then(function(){
        alert("Activitat eliminada correctament");
        window.location.reload();
    }, function(){
        alert("No s'ha pogut eliminar l'activitat");
    })
}

//pagModificarActivitat des de principal
function pagModifyActPrin(id){
    sessionStorage.setItem("idAct", id);
    window.location.href = "./vistes/modificarActivitat.html";
}

function pagModifyActSec(id){
    sessionStorage.setItem("idAct", id);
    window.location.href = "../vistes/modificarActivitat.html";
}

//pagVeureActivitat des de principal
function pagSeeActPrin(id){
    sessionStorage.setItem("idAct", id);
    window.location.href = "./vistes/veureActivitat.html";
}

function pagSeeActSec(id) {
    sessionStorage.setItem("idAct", id);
    window.location.href = "../vistes/veureActivitat.html";
}

//editarActivitat
function editarActivitat(){
    var horaIni = document.getElementById("input-hourIni").value;
    horaIni = horaIni.split(":");
    var dataIni = document.getElementById("input-startDate").value;
    dataIni = dataIni.split("/");
    var horaFi = document.getElementById("input-hourFi").value;
    horaFi = horaFi.split(":");
    var dataFi = document.getElementById("input-endDate").value;
    dataFi = dataFi.split("/");
    var txt ={
        "name": document.getElementById("input-nomactivitat").value,
        "description": document.getElementById("input-description").value,
        "type": document.getElementById("input-interes").value,
        "startDate": new Date(dataIni[2], (dataIni[0] - 1), dataIni[1], horaIni[0], horaIni[1]),
        "endDate": new Date(dataFi[2], (dataFi[0] - 1), dataFi[1], horaFi[0], horaFi[1]),
        "longitude": 1,
        "latitude": 1,
        "capacity": document.getElementById("input-capacitat").value
    };
    $.ajax({
        type: "PATCH",
        url: "http://ordinadorcasa.no-ip.org:4100/event/" + sessionStorage.getItem("idAct"),
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        },
        data: JSON.stringify(txt),
        contentType: 'application/json',
        dataType: "json"
    })
    .then(function(){
        alert("Activitat editada correctament!");
        window.location.href = "../vistes/veureActivitat.html";
    }, function(){
        alert("Error a l'editar l'activitat");
    });
}