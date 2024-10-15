// Credenciales válidas para el inicio de sesión
const validUsername = "admin"; 
const validPassword = "password"; 

// Obtener elementos del DOM para el modal de chat
const chatModal = document.getElementById('chat-modal');
const chatInput = document.getElementById('chat-input');
const chatResponse = document.getElementById('chat-response');

// Evento para mostrar el modal de chat al hacer clic en el botón
document.getElementById('btn-chat').addEventListener('click', function() {
    chatModal.style.display = "block"; // Muestra el modal de chat
});

// Evento para cerrar el modal de chat al hacer clic en el botón de cerrar
document.querySelector('#chat-modal .close').addEventListener('click', function() {
    chatModal.style.display = "none"; // Oculta el modal de chat
});

// Evento para enviar el mensaje de chat
document.getElementById('send-chat').addEventListener('click', function() {
    const userInput = chatInput.value; // Obtiene el valor del input del chat
    chatResponse.innerText = `Tu duda: ${userInput}`; // Muestra el mensaje en la respuesta
    chatInput.value = ''; // Limpia el input del chat
});

// Obtener elemento del DOM para el modal de inicio de sesión
const loginModal = document.getElementById('login-modal');

// Evento para mostrar el modal de inicio de sesión al hacer clic en el botón
document.getElementById('btn-login').addEventListener('click', function() {
    loginModal.style.display = "block"; // Muestra el modal de inicio de sesión
});

// Evento para cerrar el modal de inicio de sesión al hacer clic en el botón de cerrar
document.querySelector('#login-modal .close').addEventListener('click', function() {
    loginModal.style.display = "none"; // Oculta el modal de inicio de sesión
});

// Evento para manejar el inicio de sesión al hacer clic en el botón
document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value; // Obtiene el nombre de usuario
    const password = document.getElementById('password').value; // Obtiene la contraseña

    // Verifica las credenciales ingresadas
    if (username === validUsername && password === validPassword) {
        document.getElementById('login-response').innerText = "Inicio de sesión exitoso!"; // Mensaje de éxito
    } else {
        document.getElementById('login-response').innerText = "Credenciales incorrectas. Intenta de nuevo."; // Mensaje de error
    }
});

// Maneja clics en el área fuera de los modales para cerrarlos
window.onclick = function(event) {
    if (event.target === chatModal) {
        chatModal.style.display = "none"; // Cierra el modal de chat
    }
    if (event.target === loginModal) {
        loginModal.style.display = "none"; // Cierra el modal de inicio de sesión
    }
};

// Evento para manejar la búsqueda en el catálogo (funcionalidad no implementada)
document.getElementById('btn-buscar').addEventListener('click', function() {
    alert('Funcionalidad de búsqueda en el catálogo aún no implementada.'); // Alerta de que no está implementado
});

// Evento para acceder al foro temático (funcionalidad no implementada)
document.getElementById('btn-foro').addEventListener('click', function() {
    alert('Acceso al foro temático aún no implementado.'); // Alerta de que no está implementado
});

// Maneja clics en los enlaces de navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
        const targetId = this.getAttribute('href'); // Obtiene el id del objetivo del enlace

        // Oculta todas las secciones principales
        document.querySelectorAll('main > section').forEach(section => {
            section.style.display = 'none';
        });

        // Muestra la sección correspondiente al enlace clickeado
        document.querySelector(targetId).style.display = 'block';
    });
});

// Configuración inicial cuando se carga la ventana
window.onload = function() {
    // Oculta todas las secciones principales
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none'; 
    });
    // Muestra la sección "quienes somos" al cargar
    document.querySelector('#quienes-somos').style.display = 'block'; 
};

// Evento para manejar la búsqueda
document.getElementById('btn-search').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.toLowerCase(); // Obtiene el texto de búsqueda y lo convierte a minúsculas
    const sections = document.querySelectorAll('main > section'); // Selecciona todas las secciones del main
    let found = false; // Variable para verificar si se encontró la palabra

    // Oculta todas las secciones
    sections.forEach(section => {
        section.style.display = 'none'; // Oculta todas las secciones inicialmente
    });

    // Itera sobre cada sección para buscar el texto
    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(query)) { // Verifica si la sección incluye el texto de búsqueda
            section.style.display = 'block'; // Muestra la sección si se encuentra el texto
            found = true; // Marca que se encontró un resultado
        }
    });

    // Muestra un mensaje si no se encontraron resultados
    if (!found) {
        alert('No se encontraron resultados para: ' + query);
    }
});
