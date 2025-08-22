// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[]; // declarar el atrreglo para agregar listado de nombres de amigos



/************************************************************************************* */
function agregarAmigo(){ // función para agregar cada nombre al listado de amigos

    let lista = document.getElementById('amigo').value;
    //console.log(lista);
    if (lista === ''){
        alert("Por favor inserte un nombre");
    } else {
        amigos.push(lista);
        document.querySelector('#amigo').value='';
        recorrerAmigos();
    }
   //console.log(amigos);
  return; 
   
}

/************************************************************************************* */

function recorrerAmigos(){

    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = "";     

    for (let i=0;i< amigos.length;i++){
        let friends =amigos[i];
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = friends;
        listaHtml.appendChild(nuevoElemento);
    }
    return;
}

/************************************************************************************* */

function sortearAmigo(){

    let listaHtml = document.getElementById("listaAmigos");
    

    if (amigos.length === 0){
        alert("Lista de amigos Vacía");
    } else {
         let numeroGenerado = Math.floor(Math.random()*(amigos.length));
         // console.log(numeroGenerado);
         listaHtml.innerHTML = `<li> El amigo secreto es ${amigos[numeroGenerado]}</li> `;
         
    }

return;

}

