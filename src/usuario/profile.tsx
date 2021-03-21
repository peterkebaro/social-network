import React, {Component} from 'react'
import {Usuario} from '../usuario/user'


interface ProfileState extends Usuario {}

interface ProfileProps {
    usuario: Usuario
    onUserChange: ( user: Usuario )=>void
}

export class Profile extends Component <ProfileProps, ProfileState>{

    constructor ( props: ProfileProps ) {

        super ( props )

        this.state = { ...props.usuario }

    }

    render () {
        const { nombre, nick, bio, correo, foto } = this.state

        return (
			<div className="profile">
				
                <br/>
                <label className="cabecera-perfil">Perfil de Usuario</label><br/><br/> 

                <label>Nombre: </label>
                <input value={ nombre } onChange={ event => this.setState({ nombre: event.target.value }) }/><br/> 

                <label> Email: </label>
                <input value={ correo } onChange={ event => this.setState({ correo: event.target.value })}/><br/> 

                <label> Nick: </label>
                <input value={ nick } onChange={ event => this.setState({ nick: event.target.value }) }/><br/> 

                <label>Bio: </label>
                <input value={ bio } onChange={ event => this.setState({ bio: event.target.value }) }/><br/> 

                <label>Foto: </label>
                <input value={ foto } onChange={ event => this.setState({ foto: event.target.value }) }/><br/><br/> 
				
                <button onClick={ ()=>this.props.onUserChange( this.state as Usuario )}>Validar usuario</button>
			</div>
		)


    }



}