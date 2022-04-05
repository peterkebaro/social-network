import React, {Component} from 'react'

interface CarsProps{
    cars: {
        marca: string
        precio: string
    }[]
}

interface CarsState{
    marca: string
    precio: string
}

export class Cars extends Component <CarsProps, CarsState>{

    constructor (props: CarsProps) {

        super(props)
        this.state = {
            marca: '',
            precio: ''
        }

    }


    render() {

        const {cars} = this.props

        return(
            
            <div>
                <h1>Stock de Coches</h1>
                <input 
                    placeholder='Marca del coche'
                    value={this.state.marca}
                    onChange={ (event) => { this.setState({ marca: event.target.value })}}
                /><br/>

            </div>
        )
    }
}