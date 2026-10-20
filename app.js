console.log("AgroSana funcionando correctamente");

// EFECTO AL HACER CLICK EN BOTONES

const botones = document.querySelectorAll("button");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        console.log("Botón presionado");

    });

});