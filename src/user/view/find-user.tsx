import React, { Component } from "react";
import { User } from "../user";
import { UserStore } from "../../store/user-store";

interface FindUserState {
	id: string
}

interface FindUserProps {
	onUserFound: (user: User)=>void
}

export class FindUser extends Component<FindUserProps, FindUserState> {
	constructor( props: FindUserProps ) {
		super( props )

		this.state = {
			id: ''
		}
	}

	async findUser() {

        const user = await UserStore.getUser(this.state.id)
        this.props.onUserFound(user)
        
	}

	render() {
		const { id } = this.state

		return(
			<div className="find-user">
				<input  
					placeholder="Enter user id"
					value={ id }
					onChange={ event => this.setState({ id: event.target.value }) }
				/>
				<button
					onClick={ ()=>this.findUser()}
				>
					Find user
				</button>
			</div>
		)
	}
}