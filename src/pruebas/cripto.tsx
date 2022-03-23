import React, {Component} from 'react'

interface CriptoProps {
    criptos: {
        cripto: string
        precio: string
    }[]
}

interface CriptoState {
    cripto: string
    precio: string
}


export class Cripto extends Component <CriptoProps, CriptoState> {

    constructor (props: CriptoProps){

        super(props)
        this.state = {
            cripto: '',
            precio: ''
        }
    }

    registerCrypto(){

        // if (this.state.cripto )
        this.props.criptos.push({
            cripto: this.state.cripto,
            precio: this.state.precio
        })

        this.setState({
            cripto: '',
            precio: ''
        })

    }

    editCrypto(criptos){

        this.setState({
            cripto: criptos.cripto,
            precio: criptos.precio
        })


    }

    render(){

        const { criptos } = this.props

        return(
            <div>
                <h1>CARTERA CRIPTOMONEDAS</h1>
                <div>
                    <input 
                        placeholder='Nombre de cripto'    
                        value={this.state.cripto}  
                        onChange={( event )=>{ this.setState({cripto: event.target.value})}}    
                    /><br/>
                    <input 
                        placeholder='Precio de cripto'    
                        value={this.state.precio}  
                        onChange={( event )=>{ this.setState({precio: event.target.value})}}    
                    /><br/>
                    <button onClick={()=>{this.registerCrypto()}}>Registrar compra</button> 
                </div>
                <div>
                    <ul className='listadoCriptos'>
                        {criptos.map( element => ( 
                        
                            <li key={element.cripto}>
                                
                                {element.cripto} -{'>'} {element.precio}&nbsp;
                                <button onClick={()=> {this.editCrypto(element)}}>Editar</button>
                                <button onClick={()=> {}}>Borrar</button>
                            </li>

                        ))}
                    </ul>
                </div>                
            </div>

        )

    }   
}