//Creacion de variable del prompt para la persona que ingresara una frase, dando un For para confirmar que sea un String, y un If anidado en caso de que no llene la opción
var mensaje= prompt ("¡Hola!, por favor, ingresa tu frase:"){
  for(var i=0; i<mensaje.length; i++){
    if (mensaje.type= number || mensaje === null){
      alert("El campo no debe tener números o tener vacío. Vuelve a intentarlo");
    }
  }¡ESTA MADRE AUN NO ESTA, DEBES DE CORREGIRLA, ANDREA!
}
//Creación de función y array para cifrado Cesar. Uso del for para delimitar
function phrase(str) {
  var array = [];
    for
}


// La versión alternativa de Free Code Camp... Esa que no esta bien segun lo que piden, PERO AL MENOS ESA SI ME SALIO!

//Creamos función que tome un string y lo descifre. 
function caesar(str){
	//Creamos una variable donde se va a ir agregando el resultado del for de abajo.
	var  solved= "";
	//Usamos un For para poder revisar cada uno des los elementos de ese string delimitandolos.
	 for (var i=0; i<str.length; i++) {
	 	//Usamos el CharCodeAt,guardandolo en una variable
	 	var asciiNum = str[i].charCodeAt();
	 		
	 		//creamos un if anidado, para poder crear las condiciones de movimiento de letras (13 hacia der o izq). 65 porque alli empieza la A 
	 		if (asciiNum >=65 && asciiNum <= 90){
	 			solved += String.fromCharCode(asciiNum + 13);
	 		}
	 }
	 return solved;
}



caesar("SERR PBQR PNZC");