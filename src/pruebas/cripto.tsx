import React, {Component} from 'react'

interface CryptoPrice {
    cripto: string
    precio: number
}

interface CriptoProps {
    criptos: CryptoPrice[]
}

interface CriptoState {
    cripto: string
    precio: number
    precioBinance: number
}


export class Cripto extends Component <CriptoProps, CriptoState> {

    constructor (props: CriptoProps){

        super(props)
        this.state = {
            cripto: '',
            precio: 0,
            precioBinance: 0
        }
    }

    async componentDidMount() {
        this.setState({
            precioBinance: await this.getBinancebuyPrice( 'BTCUSDT' )
        })
    }

    async getBinancebuyPrice( pairSymbol: string ): Promise<number> {
        const resp = await fetch( `https://api1.binance.com/api/v3/avgPrice?symbol=${ pairSymbol }`)
        const obj = await resp.json()
        // respuesta de la API obj = {"mins":5,"price":"46591.13990388"}
        return Number( obj.price )
    }

    registerCrypto(){

        this.props.criptos.push({
            cripto: this.state.cripto,
            precio: this.state.precio
        })

        this.setState({
            cripto: '',
            precio: 0
        })
    }

    editCrypto(criptos: CryptoPrice){

        this.setState({
            cripto: criptos.cripto,
            precio: criptos.precio
        })

    }

    updateCrypto(){

        // NO HACE NADA, no entiendo el porqué
        
        let stringCripto: string = this.state.cripto
        // let stringPrecio: string = this.state.precio
     
        // let indexCripto = this.props.criptos.findIndex( (element) => element.cripto === stringCripto )
        
        // this.props.criptos[indexCripto].precio = stringPrecio
        
        const cripto = this.props.criptos.find( (element) => element.cripto === stringCripto )
        cripto.precio = this.state.precio
        
        this.setState({
            cripto: '',
            precio: 0
        })

        console.log(this.props.criptos)

    }

    deleteCrypto(criptos: CryptoPrice ){
       
        let stringCripto: string = criptos.cripto

        let indexCripto = this.props.criptos.findIndex( (element) => element.cripto === stringCripto )
      
        this.props.criptos.splice(indexCripto, 1)

        this.setState({})

    }

    yield(buyPrice: number, precioBinance: number){
        console.log( buyPrice, precioBinance, (( buyPrice * 100 ) / precioBinance) - 100 )
        
        let beneficiosPorcentaje = (( buyPrice * 100 ) / precioBinance) - 100
        let yieldTotal = 'La rentabilidad obtenida es ' + beneficiosPorcentaje + '%'
        return yieldTotal

    }

    // changePrice( priceStr: string )

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
                        type="number"
                        value={this.state.precio}  
                        onChange={( event )=> this.setState({ precio: event.target.valueAsNumber })}
                    /><br/><br/>
                    <button onClick={()=>{this.registerCrypto()}}>Registrar compra</button> 
                    <button onClick={()=>{this.updateCrypto()}}>Actualizar compra</button> 
                    <p>Precio Bitcoin Binance: { this.state.precioBinance }</p>
                </div>
                <div>
                    <ul className='listadoCriptos'>
                        {criptos.map( element => ( 
                        
                            <li key={element.cripto}>
                                
                                {element.cripto} -{'>'} {element.precio}&nbsp;
                                
                                <button onClick={()=> {this.editCrypto(element)}}>Editar</button>
                                <button onClick={()=> {this.deleteCrypto(element)}}>Borrar</button>&nbsp;

                                {this.yield(element.precio, this.state.precioBinance)}
                            
                            </li>

                        ))}
                    </ul>
                </div>                
            </div>

        )

    }   
}