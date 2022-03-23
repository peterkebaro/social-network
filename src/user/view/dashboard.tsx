import React, { Component } from "react";
import {Profile} from "./profile"



export class Dashboard extends Component{


    signUp() {

        

    }

    unsubscribe() {

        

    }

    userState() {


    }

    render() {

        return(

            <div className="dashboard">
                <div> 
                    <button onClick={ () => this.signUp() }>Alta</button>
                    <button onClick={ () => this.unsubscribe() }>Baja</button>
                    <button onClick={ () => this.userState() }>Estado</button>    
                </div>    
                <div>
                    <Profile />
                </div>
                
            </div>
        )
    }    
}