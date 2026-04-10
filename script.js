// ================= MENÚ MÓVIL (HAMBURGUESA) =================
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Al hacer clic en el botón de menú, muestra/oculta los enlaces
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ================= SLIDER DE EVENTOS =================
const slider = document.getElementById('slider');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

// Función para mover el slider a la izquierda
btnLeft.addEventListener('click', () => {
    // Se desplaza 300px hacia la izquierda (ajustable)
    slider.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

// Función para mover el slider a la derecha
btnRight.addEventListener('click', () => {
    // Se desplaza 300px hacia la derecha (ajustable)
    slider.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

/* ================= ANIMACIONES DE SCROLL ================= */
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los elementos que tengan la clase 'reveal'
    const reveals = document.querySelectorAll('.reveal');

    // Usamos IntersectionObserver para un mejor rendimiento
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en pantalla, le agregamos la clase 'active'
                entry.target.classList.add('active');
                // Opcional: si quieres que la animación se repita al subir y bajar, borra la línea de abajo
                observer.unobserve(entry.target); 
            }
        });
    }, {
        rootMargin: "0px",
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});

// /* ================= OCULTAR SPLASH SCREEN ================= */
// window.addEventListener('load', () => {
//     const splashScreen = document.getElementById('splash-screen');
    
//     // Verificamos si ya mostramos la animación en esta sesión
//     if (!sessionStorage.getItem('splashShown')) {
//         // Si no se ha mostrado, esperamos 2 segundos y la ocultamos
//         setTimeout(() => {
//             splashScreen.classList.add('hidden');
//             // Guardamos que ya se mostró para que no vuelva a salir si recargan
//             sessionStorage.setItem('splashShown', 'true');
//         }, 2000); 
//     } else {
//         // Si ya se mostró antes, la ocultamos inmediatamente sin esperar
//         splashScreen.style.display = 'none';
//     }
// });

/* ================= OCULTAR SPLASH SCREEN ================= */
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    
    // Le damos 2 segundos (2000 ms) para que la animación termine antes de ocultarse
    setTimeout(() => {
        splashScreen.classList.add('hidden');
    }, 2000); 
});