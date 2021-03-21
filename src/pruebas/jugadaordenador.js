
// Resultado 1, 0, -1 (gana, empata, pierde)
// Traemos el tablero en la posición actual, primero vacío y luego irá teniendo casillas rellenas
// Además creamos un segundo tablero que nos servirá para almacenar la sumatoria de los caminos disponibles
// lo cual nos permitirá saber donde se pone la ficha. O sea, donde mayor sumatoria haya, es porque hay más probabilidad de ganar.
// Debemos usar la recursividad para que vaya autoejecutando la jugadaOrdenador dentro del bucle de i. 

let puntosTotales = [[0,0,0],[0,0,0],[0,0,0]]


function jugadaOrdenador(vacias, inicio) {

    


    for ( let i = 0; i < tablero.length; i++ ) {


        sumatoria += jugadaOrdenador(vacias, i)



    }

    return casilla

}

