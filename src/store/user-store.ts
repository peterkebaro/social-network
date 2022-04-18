import { User } from "../user/user";

/**
 * This class will take care of user storage or persistence
 */
export class UserStore {
		static async login(userName: string, password: string): Promise<User> {
				const response = await fetch( `http://localhost:3000/users?name=${ userName }&password=${ password }` )
				const datos = await response.json()

				return this.fillUserObject( datos[0] )
		}

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

		return this.fillUserObject( datos )
	}

	static async getUserByName(name: string ): Promise<User> {
		const response = await fetch(`http://localhost:3000/users?name=${name}`)
		const datos = await response.json()

		return this.fillUserObject( datos[0] )
	}

	private static async fillUserObject( data: any ): Promise<User> {
		if ( !data ) return undefined
		
		const user = new User()

		user.name = data.name
		user.nick = data.nick
		user.password = data.password
		user.email = data.email
		user.bio = data.bio
		user.picture = data.picture
		
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