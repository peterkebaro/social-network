function ordenarNumeros(...args) {

    let numeros = [...args]
    // let resultado = new Array( numeros.length )
    // resultado[0] = numeros[0]
    let resultado = [...numeros]

  
    for (let i = 1; i < numeros.length; i++) {

        for (let j = 0; j < resultado.length-1; j++ ){

            if ( numeros[i] < resultado[j] ) {
                    
                resultado[j+1] = resultado[j]
                resultado[j] = numeros[i]

            }

            // if ( j === (resultado.length-1)) {

            //     // resultado.push(numeros[i])
            //     resultado[j+1] = numeros[i]

            // }

        }
        
    }

    resultado.forEach( numero => console.log(numero))
   
    return resultado

}

ordenarNumeros(3, 7, 5, 1, 2)
