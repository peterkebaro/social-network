import React, { Component } from "react";
import {Profile} from "./profile"



export class Dashboard extends Component{


    changeConfig() {

        

    }

    render() {

        return(

            <div className="dashboard">
                <div> 
                    <button onClick={ () => this.changeConfig() }>Account configuration</button>
                    <button>Languages</button>
                    <button>Delete User</button>
                </div>
								<div>
									<h2>Not implemented</h2>
								</div>
            </div>

        )
    }    
}