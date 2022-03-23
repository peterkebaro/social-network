import { User } from "../user/user";

/**
 * This class will take care of user storage or persistence
 */
export class UserStore {

	/**
	 * Stores a user in the store (database)
	 * 
	 * @param user the user to store
	 */
	 static save( user: User ): Promise<Response> {
		return fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( user )
		})

		// api REST 
		// get method http://localhost:3000/usuarios (endpoint)

		// post method
	}

	static update( user: User ): Promise<Response> {
		return fetch(`http://localhost:3000/users/${ user.id }`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( user )
		})

		// api REST 
		// get method http://localhost:3000/usuarios (endpoint)

		// post method
	}

	/**
	 * Returns a Promise resolving to a User array
	 */
	static async getAll(): Promise<User[]> {
		// console.log('antes de fetch')
		// return fetch('http://localhost:3000/users')
		// 	.then( ( response )=>{ 
		// 		response.json().then( 
		// 			datos => console.log('Ya he recibido los datos', datos ) 
		// 		) 
		// 	}) as Promise<User[]>
		const response = await fetch('http://localhost:3000/users'
			// { method: 'GET' }
		)
		const datos = await response.json()

		console.log('los datos son ', datos )
		console.log('after fetch')

		return datos
	}

	static async getUser(id: string ): Promise<User> {

		const response = await fetch(`http://localhost:3000/users/${id}`)

		const datos = await response.json()

		const user = new User()

		user.name = datos.name
		user.nick = datos.nick
		user.password = datos.password
		user.email = datos.email
		user.bio = datos.bio
		user.picture = datos.picture
		
		return user

	}

	static deleteUser( id: number ): Promise<void> {
		return fetch( `http://localhost:3000/users/${id}`, {
			method: 'DELETE',
		}) as unknown as Promise<void>
	}


}
/*
json-server endPoints
GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
PATCH  /posts/:id
DELETE /posts/:id
*/