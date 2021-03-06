import React, { Component } from "react";
import { humanMove, ganadorPartida, init } from "../tik-tak-toe/engine";
//import gemstone1 from "./images/player1.png";


interface TablaTestState {
	tablero: number[][]
	winner: number
}

interface TableTestProps {
    size: number
}

const playerColor = {
	0: 'white',
	1: 'green',
	2: 'red'
}

export class TablaTest extends Component<TableTestProps, TablaTestState> {
	constructor( props: TableTestProps) {
		super( props )
		this.state = {
			tablero: init( props.size ),
			winner: 0
		}
	}

	changeColor( fila: number, columna: number ) {       
		if ( this.state.winner !==0 ) return

		this.setState({

			tablero: humanMove( fila, columna )
			 
		})

		const winner = ganadorPartida()

		if ( winner !== 0 ) {
		
			this.setState({

				winner: winner

			})

		}

		

	}

	render() {
		const { winner, tablero } = this.state
		
		return (
			<div className="container tabla-n">
				{
					tablero.map( ( fila, i ) => (
						fila.map( ( casilla, j ) => (
							
							<div key={j+2} onClick={ () => this.changeColor( i, j ) } style={{ backgroundColor: playerColor[ casilla ] }}>Casilla {j+2}</div>

							
						))
					))
				}
				{ winner!==0 &&	
					<h2>Ha ganado {winner}</h2>
				}
			</div>
		)
	}
}


