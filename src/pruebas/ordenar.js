function ordenarNumeros(...args) {

    let numeros = [...args]
    
    // let resultado = new Array( numeros.length )
    // resultado[0] = numeros[0]
    // let resultado = [...numeros]

    //[3, 7, 5, 1]
    //[3, 7, 5, 1]


    //OPCION BUBBLESORT
    
        
    for (let i = 0; i < numeros.length; i++) {

        for (let j = 0; j < numeros.length; j++) {
                
            if (numeros[j] > numeros[j + 1]) {
                    
                let numeroMayor = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = numeroMayor;
                
            }
       
        }
    
    }
    



    //OPCION 2
    // for (let i = 1; i < numeros.length; i++) {

    //     for (let j = 0; j < numeros.length-1; j++ ){
                                
    //         if ( numeros[i] < numeros[j] ) {
               
    //             console.log(resultado)  

    //             if ( (j === 0) && (resultado[j]!= 1) ) {

    //                 resultado.splice(i, 1); //Index 1 y borra 1 elemento
    //                 resultado.unshift(numeros[i])
                    
                    
    //             }
    //             else {

    //                 resultado[j+1] = resultado[j]
    //                 resultado[j] = numeros[i]
                    
    //             }
                
    //         }
            

    //     }
        
        
    // }


    // OPCION UNO
    // for (let i = 1; i < numeros.length; i++) {

    //     for (let j = 0; j < resultado.length-1; j++ ){

    //         if ( numeros[i] < resultado[j] ) {
                    
    //             if ( j === 0 ) {

    //                 resultado.shift(numeros[i])
                    
    //             }
    //             else {

    //                 resultado[j+1] = resultado[j]
    //                 resultado[j] = numeros[i]
                    
    //             }
                
    //         }


    //     }
        
    // }
   
    return numeros

}

ordenarNumeros(3, 9, 1, 7, 3, 5)
