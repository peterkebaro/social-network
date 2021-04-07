import React, {Component} from 'react'
import {User} from '../usuario/user'


interface ProfileState extends User {}

interface ProfileProps {
    usuario: User
    onUserChange: ( user: User )=>void
}

export class Profile extends Component <ProfileProps, ProfileState>{

    constructor ( props: ProfileProps ) {

        super ( props )
        this.state = { ...props.usuario }
        
    }
    
    componentDidUpdate(prevProps: ProfileProps ) {
        if ( prevProps.usuario !== this.props.usuario ) {
            console.log( 'props', this.props.usuario )
            this.setState({
                ...this.props.usuario
            })
        }
    }

    render () {
        const { name: nombre, nick, bio, email: correo, picture: foto } = this.state

        return (
			<div className="profile">
				
                <br/>
                <label className="cabecera-perfil">Perfil de Usuario</label><br/><br/> 

                <label>Nombre: </label>
                <input value={ nombre } onChange={ event => this.setState({ name: event.target.value }) }/><br/> 

                <label> Email: </label>
                <input value={ correo } onChange={ event => this.setState({ email: event.target.value })}/><br/> 

                <label> Nick: </label>
                <input value={ nick } onChange={ event => this.setState({ nick: event.target.value }) }/><br/> 

                <label>Bio: </label>
                <input value={ bio } onChange={ event => this.setState({ bio: event.target.value }) }/><br/> 

                <label>Foto: </label>
                <input value={ foto } onChange={ event => this.setState({ picture: event.target.value }) }/><br/><br/> 
				
                <button onClick={ ()=>this.props.onUserChange( this.state as User )}>Validar usuario</button>
			</div>
		)


    }



}