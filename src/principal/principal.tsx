import React, { Component } from "react";
import { User } from '../user/user';
import { RestStore, GenericStore, MemStore, Persistent } from '../store/store';

interface UserProps {
    user: User
}

interface PrincipalState {
    tweetArea: string
}

export class PrincipalView extends Component <UserProps, PrincipalState> {

    constructor (props) {

        super(props)

        this.store = new RestStore
        this.state ={
            tweetArea: ''
        }

    }

    async sendTweet(text: string) {

        let feed = []

        feed.push({
            body: text, 
            dateTime: 121234,
            userNick: this.props.user.name
        })

        await this.store.save( feed[0] )

        this.setState({ 
            tweetArea: 'Type your Tweet' 
        })

    }

    render () {

        

        return(

            <div>
                
                { `User ${ this.props.user.name } is logged in` } <br/><br/>

                <textarea 
                    className="tweetAreaPrincipal"
                    placeholder="Type your Tweet"
                    value={this.state.tweetArea}
                    onChange={ ( event ) => this.setState({tweetArea: event.target.value})}
                />
                <br/>
                <button onClick={ () => this.sendTweet(this.state.tweetArea)}>Send Tweet</button>
                <p>{this.props.user.id}</p>
                {/* { this.store.findAll( element => <li key={element}>{element} by {this.props.user.name}</li> ) } */}
           
            </div>
        )
    }
    private store: GenericStore
}
