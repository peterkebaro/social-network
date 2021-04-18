import React, {Component} from 'react'
import { UserStore } from '../../store/user-store'
import {User} from '../user'


interface ProfileState extends User {}

interface ProfileProps {
    // user: User
}

export class Profile extends Component <ProfileProps, ProfileState>{

    constructor ( props: ProfileProps ) {

        super ( props )
        // this.state = { ...props.user }
        
    }
    
    // componentDidUpdate(prevProps: ProfileProps ) {
    //     if ( prevProps.user !== this.props.user ) {
    //         console.log( 'props', this.props.user )
    //         this.setState({
    //             ...this.props.user
    //         })
    //     }
    // }


	onUserChange(newUser: User) {

        this.setState({
			...newUser
		})

		UserStore.save( newUser )
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
				
                <button onClick={ ()=>this.onUserChange( this.state as User )}>Update User</button>
			</div>
		)


    }



}