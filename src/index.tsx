import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Profile } from "./user/view/profile";
import { User } from "./user/user";
import { UserStore } from "./store/user-store";
import { FindUser } from "./user/view/find-user";
import { Pruebas } from "./pruebas/pruebas";
import { Navbar } from "./lib/components/navbar";
import { NavbarBulma } from "./lib/components/navbar-bulma";
import "./styles/styles.scss";
import { Dashboard } from "./user/view/dashboard";


enum NavMenus { none, pruebas, usuario }
interface AppState {
	selectedNavMenu: NavMenus
}

export class App extends Component<{}, AppState> {
	constructor( props ) {
		super( props )
		this.state = {
			selectedNavMenu: NavMenus.none
		}
	}

	// const promise = UserStore.getAll()
	// console.log( 'after getAll', promise )

	menuNavClicked( selectedMenu: NavMenus ) {
		this.setState({
			selectedNavMenu: selectedMenu
		})
	}

	render() {
		const { selectedNavMenu } = this.state

		return (
			<div className="">
				<Navbar className="main-menu">
					<h2>Piar</h2>
					<img src="./src/pruebas/images/bird.jpeg"/>
					<a href="#" className="menu-item" onClick={ ()=>this.menuNavClicked(NavMenus.pruebas)}>Pruebas</a> 
					<a href="#" className="menu-item" onClick={ ()=>this.menuNavClicked(NavMenus.usuario)}>Usuario</a>
				</Navbar>

				<div className="body-container">
					{/* <NavbarBulma/> */}
				
					{ selectedNavMenu === NavMenus.pruebas	&&
						<Pruebas />
					}

					{ selectedNavMenu === NavMenus.usuario &&
						<Dashboard />
						// <div>
						// 	<FindUser onUserFound={ user => this.setState({ user: user }) }/>
						// 	<Profile user={ user } onUserChange={ user => this.changeUser( user ) }/>
						// 	{/* <button onClick={ ()=>console.log( user )}>Ver usuario</button> */}
						// </div>
					}
				</div>
			</div>
		)
	}
}

ReactDOM.render( <App/>, document.getElementsByTagName('Application')[0])