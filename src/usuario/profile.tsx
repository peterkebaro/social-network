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
				
                <label>Perfil de Usuario</label><br/> 

                <label>Nombre: </label>
                <input value={ nombre } onChange={ event => this.setState({ nombre: event.target.value }) }/>

                <label> Email: </label>
                <input value={ correo } onChange={ event => this.setState({ correo: event.target.value })}/>
				
                <button onClick={ ()=>this.props.onUserChange( this.state as Usuario )}>Validar usuario</button>
			</div>
		)


    }



}