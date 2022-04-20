import React, { Component } from "react";
import { User } from '../user/user';
import { RestStore, GenericStore, MemStore, Persistent } from '../store/store';
import { Profile } from "../user/view/profile";
import { Tweet } from "../tweets/tweet";

interface UserProps {
    tweet?: Tweet
    user?: User
}

interface PrincipalState {
    allTweets: Tweet[]
    tweet?: Tweet
    body: string
    dateTime: number
    userNick: string
    id: number
}

export class PrincipalView extends Component <UserProps, PrincipalState> {

    constructor (props) {

        super(props) 

        this.store = new RestStore
        this.state = { 
            allTweets:[],
            body: '',
            dateTime: 12,
            userNick: this.props.user.nick,
            id: this.props.user.id
        } 
    }

    async sendTweet(tweet: Tweet) {

        await this.store.save( tweet )
        
        this.setState({
            body: 'Type your Tweet'
        })
    
    }

    getTweetFromState(): Tweet {

        const tweet = new Tweet()
  
        tweet.body = this.state.body
        tweet.dateTime = this.state.dateTime
        tweet.userNick = this.state.userNick
        tweet.id = this.state.id

        return tweet

    }

    render () {

        

        return(

            <div>
                <div className="principalView">
                    { `User ${ this.props.user.name } is logged in` } <br/><br/>

                    <textarea 
                        className="tweetAreaPrincipal"
                        placeholder="Type your Tweet"
                        value={this.state.body}
                        onChange={ ( event ) => this.setState({body: event.target.value})}
                    />
                    <br/>
                    <button onClick={ () => this.sendTweet(this.getTweetFromState())}>Send Tweet</button>
                </div>

                <div>
                    <Profile/>    
                </div>
            </div>
        )
    }
    private store: GenericStore
}
