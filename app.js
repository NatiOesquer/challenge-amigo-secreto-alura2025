//Array de amigos

let amigos = [];

//funcion actualizar lista de amigos

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //limpio antes de actualizar

    for(let amigo of amigos){
        let li = document.createElement('li');
        li.textContent = amigo;
        li.appendChild(li);
    }
}

