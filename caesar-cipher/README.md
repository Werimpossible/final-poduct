##DESCRIPCIÓN
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

Consideraciones Específicas:
El programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.
El usuario no debe poder ingresar un campo vacío o que contenga números

##PSEUDOCODIGO
1. Creación de variable de mensaje para el prompt. Aqui el usuario escribira el mensaje.

2. Validación de tipo de datos ingresados
  2.1. Creación de condicionales para delimitar el tipo de dato que el usuario debe agregar
    2.1.1 Uso de For para delimitar el rango de verificacion de .length
    2.1.2 Uso de If para crear condicionales y prompt donde pida de nuevo los datos con el tipo correcto
  2.2. Si las letras estan en minúsculas, pasarlas a mayúsculas.

3. Creación de variables con funciones.
  3.1 Crear una variable para el abecedario (var ABC)
  3.2 Crear una variable para el cifrado (var cipher)
  3.3 Crear una variable para el descifrado (var decipher)
  3.4 Crear variable que separe la frase en letras. (var applyToChars)

4.


###DIAGRAMA DE FLUJO
Link de diagrama de flujo : http://subefotos.com/ver/?103b405846b54b7ca76c86cf0f204fffo.jpg
