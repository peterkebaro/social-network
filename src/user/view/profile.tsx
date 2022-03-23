import React, {Component} from 'react'
import { UserStore } from '../../store/user-store'
import {User} from '../user'


interface ProfileState extends User {
    allUsers: User[]
}

interface ProfileProps {
    user?: User
    
}

export class Profile extends Component <ProfileProps, ProfileState>{

    constructor ( props: ProfileProps ) {

        super ( props )
        this.state =  { ...props.user, allUsers:[] }
        
    }
    
    componentDidMount() {
        return this.updateUserList()
    }


	async updateUser(user: User) {
        if ( user.id ) {
            await UserStore.update( user )
        }
        else {
            await UserStore.save( user )
        }

        this.setState({
            name: '',
            nick: '',
            bio: '',
            email: '',
            picture: '',
            password: '',
            id: undefined     
        })

        await this.updateUserList()
	}

	async editUser( user: User ) {
        this.setState({
            ...user
        })
	}

    async deleteUser( id: number) {
        await UserStore.deleteUser( id )
        await this.updateUserList()
    }

    async updateUserList() {
        this.setState({
            allUsers: await UserStore.getAll()
        })
    }

    render () {
    
        const { name, nick, bio, email, picture, password, id } = this.state
        const {allUsers} = this.state

        return (
			<div className="profile">
				
                <br/>
                <label className="cabecera-perfil">Perfil de Usuario</label><br/><br/> 

                <label>Nombre: </label>
                <input value={ name || '' } onChange={ event => this.setState({ name: event.target.value }) }/><br/> 

                <label>Password: </label>
                <input value={ password ||  '' } onChange={ event => this.setState({ password: event.target.value }) }/><br/> 

                <label> Email: </label>
                <input value={ email || '' } onChange={ event => this.setState({ email: event.target.value })}/><br/> 

                <label> Nick: </label>
                <input value={ nick || '' } onChange={ event => this.setState({ nick: event.target.value }) }/><br/> 

                <label>Bio: </label>
                <input value={ bio || '' } onChange={ event => this.setState({ bio: event.target.value }) }/><br/> 

                <label>Foto: </label>
                <input value={ picture || '' } onChange={ event => this.setState({ picture: event.target.value }) }/><br/><br/> 
				
                <button onClick={ ()=>this.updateUser({ id, name, nick, bio, email, picture, password })}>
                    { id === undefined ? 'Save User' : 'Update User' }
                </button>
                <br/><br/>
                
                
                {allUsers.map( usuario => (
                    <li key={ usuario.id }>
                        {usuario.name},  
                        {usuario.email}            
                        {<button onClick={ ()=> this.editUser( usuario )}>Editar</button>}
                        {<button onClick={ ()=> this.deleteUser( usuario.id )}>Borrar</button>}
                    </li> 
                ))}

            </div>
		)


    }


}