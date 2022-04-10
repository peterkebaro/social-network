import React, { Component } from "react";
import { User } from '../user/user'

interface UserProps {
    user: User
}

export class PrincipalView extends Component <UserProps> {

    constructor (props) {

        super(props)

    }

    sendTweet() {

    }

    render () {

        return(

            <div>
                
                { `User ${ this.props.user.name } is logged in` } <br/><br/>

                <textarea className="textAreaPrincipal"
                    name="tweet"
                    value="Escribe un Tweet"
                >
                </textarea><br/>
                <button onClick={ () => this.sendTweet()}>Send Tweet</button>

            </div>
        )
    }
}