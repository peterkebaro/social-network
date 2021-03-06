import React, { ChangeEvent, Component } from 'react'

interface CounterState {
	counter: number
}

interface CounterProps {
	startOn: number
}

export class Counter extends Component<CounterProps, CounterState> {
	constructor( props: CounterProps ) {
		super( props )

		this.state = {
			counter: props.startOn
		}

	}

	incrementCounter() {
		this.setState({
			counter: this.state.counter + 1 
		})
	}
	
	decrementCounter() {
		this.setState({
			counter: this.state.counter - 1
		})
	
	}

	// interface Event {
	// 	target: {
	// 		value: 'valor que ha cambiado'
	// 	}
	// }

	inputChange( event: ChangeEvent<HTMLInputElement> ) {
		
		const val: number = Number(event.target.value)

		if ( !isNaN( val ) ) {
		
			this.setState({
				counter:  val
			})

		}
	}

	render() {

		return (
			<div className="contador">
				<label>Contador:</label> 
				<input value={this.state.counter} onChange={ ( event )=> this.inputChange( event ) }/>
				<button onClick={ () => this.incrementCounter() }>Incrementar</button>
				<button onClick={ () => this.decrementCounter() }>Reducir</button>
			</div>
		)
	}
}

