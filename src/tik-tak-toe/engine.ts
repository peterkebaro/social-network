

let tablero: number[][] = []  

const humanPlayer = 1
const cpuPlayer = 2

export function arrayInicio ( tipoJuego: number ) {

    for ( let i = 0; i < tipoJuego; i++ ){
        const fila = []

        for ( let j = 0; j < tipoJuego; j++ ) {

            fila[j] = 0
             
        }
        tablero.push(fila)
    } 
   
    return tablero

}

function numeroAleatorio ( casillasMenosUno: number ) {

    let posicionJugada = Math.random() * casillasMenosUno
    posicionJugada = Math.floor(posicionJugada)
    
    return posicionJugada


}

export function casillasVacias () {
    
    let posicionesVacias = []
    
    for ( let i = 0; i < tablero.length; i++ ){

        for ( let j = 0; j < tablero.length; j++ ) {

            if (tablero[i][j] === 0) posicionesVacias.push([i, j])

        }
        
    }
    return posicionesVacias

}


export function ponerFicha ( posicionesVacias: Array<number> ) {

    let posicionJugada = numeroAleatorio(posicionesVacias.length - 1)

    let posicionFinal = posicionesVacias[posicionJugada]
    let fila = posicionFinal[0]
    let columna = posicionFinal[1]
        
    tablero[fila][columna] = cpuPlayer


    return tablero
}


function jugadorTresColumnas ( columna: number ) {

    let columnasUno = 0
    let columnasDos = 0
    
    for ( let i = 0; i < tablero.length; i++ ){

        if ( tablero[i][columna] === 1) columnasUno++
        if ( tablero[i][columna] === 2) columnasDos++

    }

    if ( columnasUno ===  tablero.length ) return 1
    if ( columnasDos ===  tablero.length ) return 2 
    
    return 0

}

function jugadorTresFilas ( fila: number ) {

    let filasUno = 0
    let filasDos = 0
    
    for ( let i = 0; i < tablero.length; i++ ){

        if ( tablero[fila][i] === 1) filasUno++
        if ( tablero[fila][i] === 2) filasDos++

    }

    if ( filasUno ===  tablero.length ) return 1
    if ( filasDos ===  tablero.length ) return 2 


    return 0

}

function jugadorDiagonalDesc() {

    let diagonalDescUno = 0
    let diagonalDescDos = 0
    
    for ( let i = 0; i < tablero.length; i++ ){

        if ( tablero[i][i] === 1) diagonalDescUno++
        if ( tablero[i][i] === 2) diagonalDescDos++

    }

    if ( diagonalDescUno ===  tablero.length ) return 1
    if ( diagonalDescDos ===  tablero.length ) return 2 


    return 0

}

function jugadorDiagonalAsc() {

    let diagonalAscUno = 0
    let diagonalAscDos = 0
    let contador = tablero.length-1 
    

    //  0/3, 1/2, 2/1, 3/0

    for ( let i = 0; i < tablero.length; i++ ){

        if ( tablero[i][contador] === 1) diagonalAscUno++
        if ( tablero[i][contador] === 2) diagonalAscDos++
        contador--
    
    }

    if ( diagonalAscUno ===  tablero.length ) return 1
    if ( diagonalAscDos ===  tablero.length ) return 2 

    return 0

    


}

export function ganadorPartida() {

    for ( let i = 0; i < tablero.length; i++ ) {
     
        if ( jugadorTresColumnas(i) === 1 || jugadorTresFilas(i) === 1 || jugadorDiagonalDesc() === 1 || jugadorDiagonalAsc() === 1 ) return 1
        if ( jugadorTresColumnas(i) === 2 || jugadorTresFilas(i) === 2 || jugadorDiagonalDesc() === 2 || jugadorDiagonalAsc() === 2 ) return 2
        
    }

    return 0

}

function iniciarTikTakToe ( tipoJuego: number ) {
    
    arrayInicio( tipoJuego )
    let player = 0
    let contador = 1
    let ganador = 0

    for ( let i = 0; i < (tablero.length * tablero.length); i++ ){

        
        if ( contador % 2 != 0 ) player = 1
        else player = 2

        let posicionesVacias = casillasVacias()
        
        ponerFicha( posicionesVacias )

        ganador = ganadorPartida()
        
        if ( ganador ) break;
        
        contador++
        
    } 
    
    return tablero
    
    
    
}

// iniciarTikTakToe(3)

export function init( size: number ) {
    return arrayInicio( size )
}

export function humanMove( x: number, y: number ) {
    if ( tablero[x][y] !== 0 ) throw new Error('Casilla ocupada')

    tablero[x][y] = humanPlayer

    let posicionesVacias = casillasVacias()
    
    if ( !ganadorPartida() ) {
    
        ponerFicha( posicionesVacias )
    
    }

    return tablero
}

// export function bestMove( posicionesVacias ) {

//     for ( let i = 0; i < posicionesVacias.length; i++ ) {

//         bestMove( posicionesVacias )
        

//     }

//     if ( ganadorPartida() ) 

//     let mejorJugada = [0,1] // Arreglar ésto


//     let posicionJugada = mejorJugada

//     let posicionFinal = posicionesVacias[posicionJugada]
//     let fila = posicionFinal[0]
//     let columna = posicionFinal[1]
        
//     tablero[fila][columna] = cpuPlayer


//     return tablero

// }

