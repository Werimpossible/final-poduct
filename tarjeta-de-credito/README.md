#DESCRIPCIÓN
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

Consideraciones Específicas
Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío


##PSEUDOCODIGO
1. Crear un prompt donde pregunte por número de tarjeta a usuario.
2. Pasar números a un array en orden inverso.
    2.1 Se debe invertir el orden con un Reverse de tal forma que puedas empezar a trabajar con eso.
3. Aplicar la operación a los números de las posiciones pares.
    3.1 Sumar los dígitos y nuevos dígitos.
    3.2 Si suman más de 9, los dos dígitos se suman entre ellos para dejar únicamente un dígito.
4. Juntas con los números de posiciones impares y sumas todas las cantidades.
5. Comprobar si es una tarjeta válida (isValidCard)
    5.1 La validación es cierta si la suma de las cantidades, se divide entre 10 y su resultado es 0.
6. Llamas a la función y te da como resultado el True o False después de haber corrido el algoritmo.
    6.1 Por medio de un alert? das al usuario la respuesta de si es válida o no.


###DIAGRAMA DE FLUJO
