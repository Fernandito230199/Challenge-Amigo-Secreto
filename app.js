// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    let nombre = document.getElementById("amigo").value.trim();

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;  // Detiene la ejecución si el campo está vacío
    }
    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById("nombreAmigo").value = "";

    // Mostrar la lista actualizada de amigos
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual

    // Crear una lista de amigos
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Validar si hay amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigoSorteado;
}