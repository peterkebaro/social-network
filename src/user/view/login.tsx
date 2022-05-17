import React, { Component } from "react";
import { PrincipalView } from "../../principal/principal";
import { UserStore } from "../../store/user-store";
import { User } from "../user";

interface LoginUserState {
    userName: string;
    password: string;
}

interface LoginUserProps {
    onUserLogin: (user: User) => void;
}

export class LoginUser extends Component<LoginUserProps, LoginUserState> {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        };
    }

    async loginUser(pass: string) {
        const verifiedUser = await UserStore.login(
            this.state.userName,
            this.state.password
        );
        // const allUsers = await UserStore.getUserByName( this.state.userName )
        //console.log(allUsers)

        // const veryfiedPass = allUsers.find( (element) => element.password === pass && element.name === this.state.userName )
        // console.log(veryfiedPass)

        if (verifiedUser != undefined) {
            this.props.onUserLogin(verifiedUser);
            //CARGAR la página principal.tsx <PrincipalView/>
            //No sé como limpiar la ventana y poner solo el componente que quiero
            //No sé como meterle un alert en el "else" de debajo para decir que el usuario/password no son correctos
        } else {
            window.alert("User not found");
            this.setState({
                userName: "",
                password: "",
            });
        }
    }

    render() {
        return (
            <div className="loginView">
                <div className="principalPicture">
                    <img src="../../src/img/main.jpg" />
                </div>
                <div className="loginUser">
                    <h2>Sign In</h2>
                    <br />
                    <input
                        placeholder="User"
                        value={this.state.userName}
                        onChange={(event) =>
                            this.setState({ userName: event.target.value })
                        }
                    />
                    <br />
                    <input
                        placeholder="password"
                        type="password"
                        value={this.state.password}
                        onChange={(event) =>
                            this.setState({ password: event.target.value })
                        }
                    />
                    <br />
                    <br />
                    <button
                        className="loginButton"
                        onClick={() => this.loginUser(this.state.password)}
                    >
                        Login User
                    </button>
                </div>
            </div>
        );
    }
}
