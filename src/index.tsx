import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Profile } from "./usuario/profile";
import { User } from "./usuario/user";
import { UserStore } from "./store/user-store";
import { FindUser } from "./usuario/find-user";
import { Pruebas } from "./pruebas/pruebas";
import { Navbar } from "./lib/components/navbar";

enum NavMenus { none, pruebas, usuario }
interface AppState {
	user: User
	selectedNavMenu: NavMenus
}

export class App extends Component<{}, AppState> {
	constructor( props ) {
		super( props )
		this.state = {
			user: null,
			selectedNavMenu: NavMenus.none
		}
	}

	changeUser(newUser: User) {
		this.setState({
			user: {...newUser}
		})
		UserStore.save( newUser )
	}

	// const promise = UserStore.getAll()
	// console.log( 'after getAll', promise )

	menuNavClicked( selectedMenu: NavMenus ) {
		this.setState({
			selectedNavMenu: selectedMenu
		})
	}

	render() {
		const { user, selectedNavMenu } = this.state

		console.log(user)

		return (
			<div>
				<Navbar className="main-menu">
					<h2>Piar</h2>
					<img src="./src/pruebas/images/bird.jpeg"/>
					<a href="#" onClick={ ()=>this.menuNavClicked(NavMenus.pruebas)}>Pruebas</a>
					<a href="#" onClick={ ()=>this.menuNavClicked(NavMenus.usuario)}>Usuario</a>
				</Navbar>
			
				{ selectedNavMenu === NavMenus.pruebas	&&
					<Pruebas />
				}

				{ selectedNavMenu === NavMenus.usuario &&
					<div>
						<FindUser onUserFound={ user => this.setState({ user: user }) }/>
						<Profile usuario={ user } onUserChange={ user => this.changeUser( user ) }/>
						<button onClick={ ()=>console.log( user )}>Ver usuario</button>
					</div>
				}
			</div>
		)
	}
}

ReactDOM.render( <App/>, document.getElementsByTagName('Application')[0])