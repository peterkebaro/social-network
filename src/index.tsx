import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Profile } from "./user/view/profile";
import { User } from "./user/user";
import { UserStore } from "./store/user-store";
import { FindUser } from "./user/view/find-user";
import { Pruebas } from "./pruebas/pruebas";
import { Navbar } from "./lib/components/navbar";
import "./styles/styles.scss";
import { Dashboard } from "./user/view/dashboard";
import { Agenda } from "./pruebas/componente";
import { Cripto } from "./pruebas/cripto";
import { Cars } from "./pruebas/cars";

enum NavMenus {
    none,
    pruebas,
    usuario,
}
// type NavMenusStr = 'none' | 'pruebas' | 'usuario'

interface AppState {
    selectedNavMenu: NavMenus;
    // criptos: any[]
    // cars: any[]
}

export class App extends Component<{}, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavMenu: NavMenus.none,
            // criptos: [ { cripto: 'Bitcoin', precio: 55000}, { cripto: 'Cardano', precio: 0.80 } ],
            // cars: [ { marca: 'Audi', precio: 30000}, { marca: 'Bmw', precio:50000}, { marca: 'Porsche', precio:80000} ]
        };
    }

    // const promise = UserStore.getAll()
    // console.log( 'after getAll', promise )

    menuNavClicked(selectedMenu: NavMenus) {
        this.setState({
            selectedNavMenu: selectedMenu,
        });
    }

    render() {
        const { selectedNavMenu } = this.state; //criptos y cars si lo activas

        return (
            <div className="">
                <Navbar className="main-menu">
                    <h2>Canary Social Network</h2>
                    <img src="./src/pruebas/images/logo.png" />
                    <a
                        href="#"
                        className="menu-item"
                        onClick={() => this.menuNavClicked(NavMenus.pruebas)}
                    >
                        Pruebas
                    </a>
                    <a
                        href="#"
                        className="menu-item"
                        onClick={() => this.menuNavClicked(NavMenus.usuario)}
                    >
                        Usuario
                    </a>
                </Navbar>

                <div className="body-container">
                    {selectedNavMenu === NavMenus.pruebas && <Pruebas />}

                    {
                        selectedNavMenu === NavMenus.usuario && <Dashboard />
                        // <div>
                        // 	<FindUser onUserFound={ user => this.setState({ user: user }) }/>
                        // 	<Profile user={ user } onUserChange={ user => this.changeUser( user ) }/>
                        // 	{/* <button onClick={ ()=>console.log( user )}>Ver usuario</button> */}
                        // </div>
                    }
                </div>
                {/* < Agenda 
					datos={[ { name: 'Pepe', tel: '5555555'}, { name: 'Ana', tel: '66666666'} ]}
					onDataChange={ ( record, datos )=> window.alert(`Los datos cambiaron => ${ record.name }. El numero total de registros es ${ datos.length }`) }
				/>
				<br/><br/>
				< Cripto criptos={ criptos }/>

				<br/><br/>
				< Cars cars={ cars }/>
				<br/> */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementsByTagName("Application")[0]);
