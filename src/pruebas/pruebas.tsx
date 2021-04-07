import React, {Component} from 'react'
import { Counter } from './contador'
import { Buscador } from './buscador'
import { Reloj } from './reloj'
import { TablaN } from './tablan'


export function Pruebas () {

    return(
        <div>
					<h1 id="1" className="css">Hola mundo desde React</h1>
					<Counter startOn={5}/>
					<Buscador />
					<Reloj />
					<TablaN size={3}/>
        </div>


    )


}