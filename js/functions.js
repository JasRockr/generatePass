

/* ----------------------------- */
/* Funciones */
/* ----------------------------- */

// Funcion que permite alternar el estilo e icono de los botones.
// function btnToggle(elemento) {
//   elemento.classList.toggle("true");
//   elemento.childNodes[1].classList.toggle("fa-check");
//   elemento.childNodes[1].classList.toggle("fa-times");
//   console.log(elemento.classList);
// }

export const hw = () => {
  console.log('Hi world!');
}

export const btnToggle = (elemento) => {
  elemento.classList.toggle("true");
  elemento.childNodes[1].classList.toggle("fa-check");
  elemento.childNodes[1].classList.toggle("fa-times");
  console.log(elemento.classList);
}

// Funcion que genera la contraseña.
function generarPassword() {
  // Variable en donde guardaremos la cadena de texto con todos los caracteres que podemos usar para generar la contraseña.
  var caracteresFinales = "";

  // Variable en donde guardaremos caracter por caractere la contraseña.
  var password = "";

  // Iteramos sobre el objeto configuracion para acceder a cada una de las propiedades.
  for (propiedad in configuracion) {
    // Preguntamos si la propiedad es igual a true.
    // Entonces significa que si quiere aceptar simbolos / numeros / mayusculas.
    if (configuracion[propiedad] == true) {
      // conso.log para identificar que es configuracion[propiedad].
      // console.log(configuracion[propiedad]);

      // A la variable de caracteres finales le sumamos la cadena de texto correspondiente a la iteracion actual.
      // En pocas palabras, vamos creando una cadena de texto que contiene todos los caracteres que si podemos usar.
      caracteresFinales += caracteres[propiedad] + " ";
    }
  }

  // Eliminamos el ultimo espaciado que sobra en la cadena de texto.
  caracteresFinales = caracteresFinales.trim();

  // console.log para comprobar que la variable de caracteres finales contiene todos los caracteres que el usuario si quiere.
  // console.log(caracteresFinales);

  // Convertimos la cadena de texto de caracteres finales a un arreglo.
  caracteresFinales = caracteresFinales.split(" ");

  // Ciclo que genera la contraseña letra por letra al azar.
  for (var i = 0; i < configuracion.caracteres; i++) {
    // A la variable password le vamos sumando una letra al azar por cada iteracion.
    // Primero tomamos un numero al azar que va del 0 al numero de caracteresFinales.
    // Y despues usamos ese numero para acceder a una posicion del arreglo al azar de caracteresFinales.
    password +=
      caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
  }

  // Mostramos la password en el input de contraseña.
  app.elements.namedItem("input-password").value = password;
}

// Funcion que nos permite copiar el texto al portapapeles.
function copiarPassword() {
  // Selecciona el texto de un input
  app.elements.namedItem("input-password").select();
  // Copiamos el Texto
  document.execCommand("copy");
  document.getElementById("alerta-copiado").classList.add("active");

  setTimeout(function () {
    document.getElementById("alerta-copiado").classList.remove("active");
  }, 2000);
}

