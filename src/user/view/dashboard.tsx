import React, { Component } from "react";
import { LoginUser } from "./login";
import { User } from "../user";
import { PrincipalView } from "../../principal/principal";
import { Profile } from "./profile";

interface DashboardState {
    currentUser: User;
}

export class Dashboard extends Component<{}, DashboardState> {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: undefined,
        };
    }

    render() {
        const { currentUser } = this.state;
        console.log(currentUser);

        return (
            <div className="dashboard">
                <div className="signIn">
                    {currentUser ? (
                        <PrincipalView user={currentUser} />
                    ) : (
                        <LoginUser
                            onUserLogin={(user) =>
                                this.setState({ currentUser: user })
                            }
                        />
                    )}
                </div>
            </div>
        );
    }
}
