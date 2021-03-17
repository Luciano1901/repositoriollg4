

const URL = "https://www.breakingbadapi.com/api/characters"
let characters = []; //va a contener todos los personajes globales a la aplicacion



//Funcion encargada de traer los personajes de la URL
const  fetchCharacters = async (url = URL) => {
    try{
        console.log("Peticion...");
        const response = await fetch(url);
        const characters = await response.json();
        //console.log(characters);
        console.log(response);
        return characters
    } catch(err){
        console.error(err);
    }

};

const showMessage = () => {
    //mostrar un mensaje en un span
    document.querySelector("#message").innerHTML = "No hay personajes";
    document.getElementById("input").disable = true;
}

const del = (id) => {
    document.getElementById(id).remove();
    characters = characters.filter(characters.id != id);
    console.log(characters);
    characters.length === 0 ? showMessage : null;
};




const createNode = (character, index) => {
    //aca creo la columna con toda la info del personaje

    const node = `
    <div class="col-md-4 col-12" id="${character.char_id}">
        <div class="card mt-5 ml-3">
            <img src="${character.img}" />
            <div class="card-body">
            
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">Nick Name :${character.nickname} </p>

                <button onClick="del(${character.char_id})" id="" class="btn btn-danger btn.block">Borrar</button>
            </div>
    </div>
    `;
    document.getElementById("apiR").insertAdjacentHTML("beforeend", node);
}



//Funcion encargada de buscar un personaje por nombre
const searchCharacter = (character) => {

    console.log("buscar")
    const { value : name } = document.querySelector("#input")
    var contenedor = document.getElementById("apiR")
    var container = document.getElementById("apiR2")
    contenedor.style.display = 'none';
    const foundCharacter = characters.find(
    (character) => character.name.toLowerCase() === name.toLowerCase() || console.log("coloque nombre completo")
    );

    /*for(var k in foundCharacter) {*/
      const nodo = `<div class="padre" id="${foundCharacter.char_id}">
      <div text-align ="center" class="card mt-2 ml-2">
          <img src="${foundCharacter.img}"  />
          <div class="card-body">
          
              <h5 class="card-title">${foundCharacter.name}</h5>
              <p class="card-text">Nick Name :${foundCharacter.nickname} </p>

              <button onClick="del(${foundCharacter.char_id})" id="" class="btn btn-danger btn.block">Borrar</button>
          </div>
  </div>
  `;
    container.insertAdjacentHTML("beforeend", nodo);
   // } 
    
    
    //document.getElementById("apiR2").insertAdjacentHTML("beforeend", node2);

 
    /*------codigo ok-------------------
    var personaje = "";
    for(var k in foundCharacter) {
      personaje = `<img src= ${foundCharacter.img}>`;
    } 
    ---------------------------------------*/
   

    //container.innerHTML = personaje;
    
    //selectCharacter(foundCharacter);

    //container.append(foundCharacter);
       //document.getElementById("apiR2").insertAdjacentHTML("beforeend", node2);
        //characters.map((character) => createNode(character));

        //const getData = foundCharacter.id  
        //const getid = foundCharacter.char_id;        
        //console.log(foundCharacter.char_id);
        //iterateCharacters(foundCharacter);
        //window.location.href = "appbb2.html";
        //return getid;
        //document.innerHTML(foundCharacter.img);
        
        
        
};


function selectCharacter() {
    return createNode2(foundCharacter);
}

const iterateCharacters =(characters) => 
 characters.map((character) => createNode(character));

//  ..carga el DOM
async function start() {
    document.getElementById("find").addEventListener("click", searchCharacter);
    characters = await fetchCharacters();
    console.log(characters);
    iterateCharacters(characters);
}


window.onload = start();