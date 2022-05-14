import React, { ChangeEvent, Component } from "react";

interface Amigo {
	nombre: string
	apellido: string
	edad: number
}


const amigos: Amigo[] = [
	{ nombre: 'Juan', apellido: 'Gómez', edad: 45 },
	{ nombre: 'Maria', apellido: 'Santana', edad: 20 },
	{ nombre: 'Jacinto', apellido: 'Martinez', edad: 50 },
	{ nombre: 'Ramón', apellido: 'Cabrera', edad: 18 },
	{ nombre: 'Cinta', apellido: 'Benitez', edad: 34 }
]

interface BuscadorState {
	nombreCompleto: string
	age: number
	partialName: string
}

export class Buscador extends Component<{},BuscadorState> {
			

		constructor( props ) {
				
				super( props )
				
				this.state = {
					partialName: '',
					nombreCompleto: '',
					age: 0
				}
		}

		inputFullNameChange( event: ChangeEvent<HTMLInputElement> ) {
			const partialName = event.target.value

			// const foundAmigo = amigos.find( amigo => amigo.nombre === partialName ) || { nombre: '', apellido: '' }
			const foundAmigo = amigos.find( amigo => amigo.nombre === partialName )

			let nombreCompleto = ''
			if ( foundAmigo ) {
				nombreCompleto = foundAmigo.nombre + ' ' + foundAmigo.apellido
			}

			this.setState({
				partialName: partialName,
				// nombreCompleto: foundAmigo?.nombre + ' ' + foundAmigo?.apellido
				nombreCompleto: nombreCompleto
			})

		}

		inputChangeEdad( event: ChangeEvent<HTMLInputElement> ) {

			this.setState({
				age: Number(event.target.value)
			})

		}

		render() {
				
				const { nombreCompleto, partialName, age } = this.state
				let mayoresVeinticinco = []
	

				const filtrados = partialName? amigos.filter( amigo => {
					return amigo[0] === partialName
				}) : amigos

				
				return (
			
					<div className="buscador">
								
								<div className="bloque1">
									<label>Escribe el nombre: </label>
									<input value={partialName} onChange={ (event) => this.inputFullNameChange(event) } />     
									<ul>
										{nombreCompleto}
									</ul>
							
								
									{filtrados.map( amigo => {
										return <li key={amigo.nombre}>{amigo.nombre}</li>
									})}
								</div>
							
								<div className="bloque2">
									<label>Escribe una edad: </label>
									<input value={age} onChange={ (event) => this.inputChangeEdad(event) } /> 	
									<p>Los mayores de {age} años son: </p> 
								
									<ul>
										
										{mayoresVeinticinco = amigos.filter( amigo => amigo.edad >= this.state.age ).map( amigo => (
											
											<li key={amigo.nombre}>{amigo.nombre}</li> 
										))}
									</ul>
								</div>

								<img src="https://secure.gravatar.com/avatar/630a7407c7d243e025aed1a891f1aa41" alt="tio raro"/>

					</div>
				)

			} 


}