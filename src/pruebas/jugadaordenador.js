
// Resultado 1, 0, -1 (gana, empata, pierde)
// Traemos el tablero en la posición actual, primero vacío y luego irá teniendo casillas rellenas
// Además creamos un segundo tablero que nos servirá para almacenar la sumatoria de los caminos disponibles
// lo cual nos permitirá saber donde se pone la ficha. O sea, donde mayor sumatoria haya, es porque hay más probabilidad de ganar.
// Debemos usar la recursividad para que vaya autoejecutando la jugadaOrdenador dentro del bucle de i. 

let puntosTotales = [[0,0,0],[0,0,0],[0,0,0]]


export function bestMove( posicionesVacias ) {

        let contador = 0

        for ( let i = 0; i < posicionesVacias.length; i++ ) {
    
            ponerficha( posicionesVacias ) //Revisar la lógica a la hora de ir poniendo las fichas.
            
            if ( ganadorPartida() ) {
    
                contador++
    
            }

            bestMove( posicionesVacias )
            
            puntosTotales[i][j] = contador //Ver como asignar las i y j para que ponga los puntos de cada hilo del árbol

        }
       
        // let posicionJugada = mejorJugada
    
        // let posicionFinal = posicionesVacias[posicionJugada]
        // let fila = posicionFinal[0]
        // let columna = posicionFinal[1]
            
        // tablero[fila][columna] = cpuPlayer
    
    
        return tablero
    
}

