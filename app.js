//Array de amigos

let amigos = [];

//funcion actualizar lista de amigos

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //limpio antes de actualizar

    for(let amigo of amigos){
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para agregar un amigo a la lista

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar campo 
    console.log(amigos)
}

