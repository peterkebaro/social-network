import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Profile } from "./user/view/profile";
import { Navbar } from "./lib/components/navbar";
import "./styles/styles.scss";
import { Dashboard } from "./user/view/dashboard";

enum NavMenus {
    none,
    pruebas,
    usuario,
}

interface AppState {
    selectedNavMenu: NavMenus,
}

export class App extends Component<{}, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavMenu: NavMenus.none,
        };
    }

    menuNavClicked(selectedMenu: NavMenus) {
        this.setState({
            selectedNavMenu: selectedMenu,
        });
    }

    render() {
        const { selectedNavMenu } = this.state; 

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
                        Sign Up
                    </a>
                    <a
                        href="#"
                        className="menu-item"
                        onClick={() => this.menuNavClicked(NavMenus.usuario)}
                    >
                        Login User
                    </a>
                </Navbar>

                <div className="body-container">
                    {selectedNavMenu === NavMenus.pruebas && <Profile /> }

                    {selectedNavMenu === NavMenus.usuario && <Dashboard />}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementsByTagName("Application")[0]);
