import React from "react";
import ReactDOM from "react-dom";
import { Counter } from './pruebas/contador'
import { Buscador } from './pruebas/buscador'
import { Reloj } from './pruebas/reloj'
import { TablaN } from "./pruebas/tablan";


export function App() {
	return (
		<div>
			<h1 id="1" className="css">Hola mundo desde React</h1>
			<Counter startOn={5}/>
			<Buscador />
			<Reloj />
			<TablaN size={3}/>
			
		</div>
	)
}

ReactDOM.render( <App/>, document.getElementsByTagName('Application')[0])