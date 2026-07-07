document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("contactForm");
    const telefonoInput = document.getElementById("telefono");

    // SOLO NÚMEROS + MÁXIMO 15 DÍGITOS
    telefonoInput.addEventListener("input", () => {
        telefonoInput.value = telefonoInput.value
            .replace(/[^0-9]/g, '')
            .slice(0, 15);
    });


    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        const nombre = document.querySelector("[name='nombre']").value;
        const empresa = document.querySelector("[name='empresa']").value;
        const correo = document.querySelector("[name='correo']").value;
        const servicio = document.querySelector("[name='servicio']").value;
        const sistema = document.querySelector("[name='sistema']").value;
        const equipo = document.querySelector("[name='equipo']").value;
        const cliente = document.querySelector("[name='cliente']").value;
        const horario = document.querySelector("[name='horario']").value;
        const urgencia = document.querySelector("[name='urgencia']").value;
        const mensaje = document.querySelector("[name='mensaje']").value;

        const telefono = telefonoInput.value;

        // Código de Perú
        const pais = "+51";


        if (telefono.length < 7) {
            alert("Ingresa un número válido");
            return;
        }


        const telefonoFinal = pais + telefono;


        const texto = ` NUEVA SOLICITUD

Nombre: ${nombre}
Empresa: ${empresa || "No especificada"}
Correo: ${correo}
Cliente: ${cliente || "No especificado"}
Horario: ${horario || "No especificado"}
Teléfono: ${telefonoFinal}
Servicio: ${servicio}
Sistema: ${sistema}
Equipo:${equipo || "No especificado"}
Urgencia: ${urgencia}
Mensaje: ${mensaje}`;


        const url = `https://wa.me/51960654539?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

        formulario.reset();

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a");

if(menuToggle){

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}
links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    const clickDentroMenu = nav.contains(e.target);
    const clickEnBoton = menuToggle.contains(e.target);

    if (!clickDentroMenu && !clickEnBoton) {
        nav.classList.remove("active");
    }

});

window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 200;
        const bottom = top + section.offsetHeight;

        if (pageYOffset >= top && pageYOffset < bottom) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});