import React from "react";
import ReactDOM from "react-dom";
import { Counter } from './pruebas/contador'
import { Buscador } from './pruebas/buscador'
import { Reloj } from './pruebas/reloj'
import { TablaN } from "./pruebas/tablan";
import { Profile } from "./usuario/profile";
import { Usuario } from "./usuario/user";


export function App() {
	const usuario = new Usuario()

	const cambiarUsuario = (user: Usuario) => {
		usuario.nombre = user.nombre
		usuario.correo = user.correo
		usuario.nick = user.nick
		usuario.password = user.password
		usuario.bio = user.bio
		usuario.foto = user.foto
	}

	return (
		<div>
			<h1 id="1" className="css">Hola mundo desde React</h1>
			<Counter startOn={5}/>
			<Buscador />
			<Reloj />
			<TablaN size={3}/>
			<Profile usuario={ usuario } onUserChange={ user => cambiarUsuario( user ) }/>
			<button onClick={ ()=>console.log( usuario )}>Ver usuario</button>
		</div>
	)
}

ReactDOM.render( <App/>, document.getElementsByTagName('Application')[0])