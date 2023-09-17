//voy por minuto 14:26 de 39:47
window.onload = inicio;
var reyes = [
  "atanagildo",
  "ataulfo",
  "ervigio",
  "leogivildo",
  "recesvinto",
  "sisebuto",
  "teodorico",
];
var camisetas = ["camisetaNegra.png", "camisetaBlanca.png"];
var camisetaActual = 0;
//generamos numeros aleatorios de la fottos de los reyes y le quito decimales Math.floor
var reyActual = Math.floor(Math.random() * reyes.length);
var size = 2;

// Escribir el resto del código JavaScript aquí.
// Intenta no modificar los arrays superiores ni crear nuevos manualmente (no es necesario).
// A continuación he añadido algunas funciones interesantes por si las necesitas.

function inicio() {
  // Eventos y acciones iniciales
  //ir al html y añadir y mostrar
  document
    .querySelector(".camiseta")
    .insertAdjacentHTML(
      "beforeend",
      `<img id="dibujo" src="img/${camisetas[camisetaActual]}">`
    );

  //que no inserte que se cargue el contenido que hay y añada otra cosa
  document.querySelector(
    ".imagen"
  ).innerHTML = `<img id="rey" src="img/rey_${reyes[reyActual]}.png">`;
  //modificar div
  //para poner 1º letera maysculas de nombres de reyes traspaso a funcion para que cambie el nombre con rey
  actualizarRey();
  //let reyConMayusculas =
  //   reyes[reyActual].substr(0, 1).toUpperCase() +
  //  reyes[reyActual].substr(1).toLowerCase();
  //document.querySelector(".texto").innerHTML = `I ♡ ${reyConMayusculas}`;
  //eventos
  //tienes que estar atento al codigo teclado cuando pulsamos + o - 
  window.onkeydown = teclado;
  document.querySelector("#dibujo").onclick = cambiarCamiseta;
  document.querySelector("#rey").onclick = cambiarRey;

  document.querySelector("#imprimir").onclick = imprimir;
  ayusculas;
}

function teclado(e) {
  //para que no escribas mas de x caracteres en texto
  let longitud = document.querySelector(".texto").innerHTML.length;
  //excepciones para que responda cursore y demas
  let excepciones = [
    "Delete",
    "Backspace",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
    "ArrowLeft",
    "+",
    "-",
  ];
  if (longitud > 15 && excepciones.indexOff(e.key) == -1) {
    e.preventDefault();
  } else {
    let codigo = e.key;
    //alert(codigo);
    if (codigo == "+") {
      if (size<3) {
        size += .1; //size=size+.1 lo mismo
      }
      //para que no aumente texto mas de 3
      e.preventDefault();
    }
    if (codigo == "-") {
      if (size>1) {
        size -= .1; //size=size+.1 lo mismo
      }
      //para que no aumente texto mas de 3
      e.preventDefault();
    }
    document.querySelector(".texto").style.fontSize = size + "em";
  }
}
function actualizarRey() {
  let reyConMayusculas =
    reyes[reyActual].substr(0,1).toUpperCase() +
    reyes[reyActual].substr(1).toLowerCase();
  let inicios = document.querySelector(".texto").innerHTML.substr(0,3);
  if (inicios == "I ♡" || inicios == "") {
    document.querySelector(".texto").innerHTML = `I ♡ ${reyConMayusculas}`;
  }
}
function cambiarRey() {
  reyActual++;
  //para que no pase del final de ultimo rey que vuelva al primero
  if (reyActual >= reyes.length) {
    reyActual = 0;
  }
  document.querySelector("#rey").src = `img/rey_${reyes[reyActual]}.png`;
  actualizarRey();
}

function cambiarCamiseta() {
  //creo array valor 0 o 1 blanco o negro
  let colores = ["white", "black"];
  //para cambiar el color ;
  camisetaActual = Number(!camisetaActual);

  //valla a dibujo y cambie por otra cosa
  document.querySelector("#dibujo").src = `img/${camisetas[camisetaActual]}`;
  document.querySelector(".texto").style.color = colores[camisetaActual];
}

function imprimir() {
  // Imprime lo que haya en pantalla en ese momento. Si sólo se desea que imprima unos elementos y no otros o personalizar lo que se envía a la impresora, se debería utilizar en conjunción con mediaqueries (@media print) de CSS.
  window.print();
}
