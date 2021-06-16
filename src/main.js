import { leakedPoke }  from './data.js';
import pokem from './data/pokemon/pokemon.js';

///operador += agrega un valor a una variable o agragar y concatenar cadenas
///querySelector(selector del DOM): metodo q devuelve class de header (1er elemento) que coincide con selector CSS especificados.///
///Fondo blanco de logo para que no se vea cortado///
document.querySelector('.logo').style.backgroundColor = 'white';

///Para que se muestre data///
let globalPoke = pokem.pokemon;
let showPokem = Object.values(globalPoke);

///Función que recorre los valores de la data. ShowPokem matriz de contenedores de img y name///
showPokem = (obj) => {
  for (obj of globalPoke) {
    let pName = document.createElement('p');
    pName.textContent = obj.name;

    let divBox = document.createElement('div');
    divBox.appendChild(pName);

    ///Creamos un contenedor divBox para name, ahora crearemos otro contenedor para img///
    let imagen = document.createElement('img');
    imagen.src = obj.img;
    divBox.appendChild(imagen);

    let divRoot = document.getElementById('root');
    divRoot.appendChild(divBox); ///hasta aqui mostramos name e img///
  }
};

///Funcion limpieza de pantalla///
let cleanScreenOfPokem= showPokem(); ///showPokem() matriz de contenedores de img y name, lo guardo?///
cleanScreenOfPokem = () => {
  document.getElementById('root').innerHTML = '';
};

///Funcion que muestra data denuevo///
let viewDataNew = cleanScreenOfPokem;  ///aqui hay q llamar a la variable cleanScreenOfPokem
viewDataNew = () => {
  showPokem();     ///es necesario poner parametro globalPoke?
};

////Funcion Botones///
// let buttonBug = document.getElementById('bug');
// buttonBug.addEventListener('click', () => {
//   cleanScreenOfPokem();                      /// porque es funcion
//   leakedPoke('bug');                    // se le pide que filtre los pokemones bichos
// });

// let buttonDragon = document.getElementById('dragon');
// buttonDragon.addEventListener('click', () => {
//   cleanScreenOfPokem();                      
//   leakedPoke('dragon');                    
// });

// let buttonElectric = document.getElementById('electric');
// buttonElectric.addEventListener('click', () => {
//   cleanScreenOfPokem();                      
//   leakedPoke('electric');                    
// });

////Boton Reset///
let buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', () => {
  viewDataNew();                   // muestra todos los Pokemones de nuevo una vez q esta filtrado
});

///Función formulario, tipos de Pokemones///
const typesForm = document.getElementById('mon');
typesForm.addEventListener('change', () => {
    let typ = document.getElementById('pokem').value;
     cleanScreenOfPokem(); 
     //showPokem();
    for (let i=0; i<typ.length; i++) {
    ` <dl>
    <dt> ${i.name} </dt>
    <img src="${i.img}"/>
    </dl> `
    document.getElementById('root').innerHTML += leakedPoke[i];
    typ[i],addEventListener('click', leakedPoke, true);
      console.log(typ);
    }
});



/*for (var i = 0 ; i < comment.length; i++) {
   comment[i].addEventListener('click' , showComment , false ) ; 
} */

/*//Se crea el evento a los botones de filtrar.
filteredBttn.forEach(bttn => bttn.addEventListener("click", (e) => {
  const filteredByID = filteredByType(pokemonData, e.target.id);
  for (let i = 0; i < allPokemonsCards.childElementCount; i++) {
    allPokemonsCards.childNodes[i].style.display = "none"
  }
  drawCards(filteredByID); */

/*const orderAZ = document.getElementById("pokem");  //id de bt ordenar
orderAZ.addEventListener("change", () => {              /// change evento que cambie, 1° limpia luego ordene A-Z                 
  cleanScreenOfPokem();
  showPokem(dataAZ);
});

const orderZA = document.getElementById("pokem");
orderZA.addEventListener("change", () => {
  cleanScreenOfPokem();
  showPokem(dataAZ.reverse); ///inv si es metodo
});*/

/* divRoot.addEventListener("click", () => {
      let pokeInfo = `
                    <div class="div-container">
                      <button value="Cerrar divRoot" id="close-modal-button" />X</button>
                      <p class="title-modal"> ${obj.name}</p>
                      <img class="img-modal" src="${obj.img}"/>
                      <p class="blurb-modal">${obj.about}</p> 
                    </div> `;

      modal.innerHTML = pokeInfo;
      divRoot.appendChild(modal)

      const button = document.getElementById("close-modal-button") ///se creo en 36 para cerrar pantalla///
      button.onclick = closeModal

    });
  }
}
document.getElementById('root').innerHTML += obj.name + `<br>`+ obj.img + `<br><br>`;*/