import React, { Component } from "react";
import { User } from '../user/user';
import { RestStore, GenericStore, MemStore, Persistent } from '../store/store';
import { Profile } from "../user/view/profile";
import { Tweet } from "../tweets/tweet";

interface UserProps {
    tweet?: Tweet
    user?: User
}

interface PrincipalState extends Partial<Tweet>{
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
            id: this.props.user.id,
            editProfile: false
        } 
    }

    async sendTweet(tweet: Tweet) {

        await this.store.save( tweet )
        
        this.setState({
            body: 'Type your Tweet'
        })

        this.updateTweetList()
    
    }

    getTweetFromState(): Tweet {

        const tweet = new Tweet()
  
        tweet.body = this.state.body
        tweet.dateTime = this.state.dateTime
        tweet.userNick = this.state.userNick
        tweet.id = this.state.id

        return tweet

    }

    async updateTweetList() {
        this.setState({
            allTweets: await this.store.findAll( new Tweet().entityName ) as Tweet[]
        })
    }

    

    editThisProfile() {
       this.setState( {
           editProfile: true
       })
    }

    render () {

        const {allTweets, editProfile} = this.state
        
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
                    {allTweets.map( tweet => (
                    <li key={ tweet.id }>
                        {tweet.userNick} -{'>'}  
                        {tweet.body}            
                    </li> 
                ))}
                </div>

                <div>
                    {editProfile 
                        ?<Profile/>
                        :<button onClick={ () => this.editThisProfile() }>Edit Profile</button>
                    }
                </div>
            </div>
        )
    }
    private store: GenericStore
}
