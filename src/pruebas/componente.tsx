import React, {Component} from "react";

interface Record {
    name: string
    tel: string
}

interface AgendaProps
{
    datos: Record[]
    onDataChange: ( record: Record, datos: Record[] )=>void // callback
}

interface AgendaState {
    name: string
    tel: string
}

export class Agenda extends Component <AgendaProps, AgendaState> {

    constructor (props: AgendaProps) {
        
        super(props)    
        this.state = {
            name: '',
            tel: ''
        }
        
    }

    private updateRecord() {
        
        if (this.state.name != undefined) {  
            const newRecord = { 
                name: this.state.name,
                tel: this.state.tel
            }
            this.props.datos.push( newRecord )
            this.props.onDataChange( newRecord, this.props.datos )
        }
        else {
            this.editRecord(this.state)
        }
        this.setState({})
    }

    
    private deleteRecord(tel) {

        let usuario = this.props.datos.filter( element => element.tel === this.state.tel ) 

        //Sacar el indice de las props y borrarlo
        
    }

    private editRecord( datos) {

       // Mandar los datos para que actulice el state

        this.setState({
            ...datos
        })

        // No sé como tocar las props
        // this.props.datos = this.state.datos

    }

    render() {
		
        const { datos } = this.props

        return (

            <div>
                <h1>Agenda</h1>
                <div className="input-new-record">
                    <input 
                        placeholder="Entra el nombre"
                        value={this.state.name}
                        onChange={ ( event )=> this.setState({ name: event.target.value })}
                    />
                    <br/>
                    <input 
                        placeholder="Entra el telefono"
                        value={this.state.tel}
                        onChange={ ( event )=> this.setState({ tel: event.target.value })}
                    /> 
                    <button onClick={ () => this.updateRecord()}>
                        {/* No me funciona que aparezca "Editar Usuario"*/}
                        {this.state.name != undefined ? 'Alta Usuario' : 'Editar Usuario' } 
                    </button>
                
                </div>
                <ul className="record-list">
                    {
                        datos.map( element => (
                            <li key={element.tel}>
                                {element.name}, {element.tel}
                                <button onClick={ () => this.editRecord(element) }>Editar</button>
                                <button onClick={ () => this.deleteRecord(element.tel) }>Borrar</button>
                            </li> 
                        )) 
                    }
                </ul>
			</div>
            
        )
    }
} 