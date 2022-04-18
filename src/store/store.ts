export class Persistent {
	id: number
	readonly entityName: string
	[ key: string ]: any
	
	static registerPersistentFactory( entityName: string, factory: PersistentConstructor ) {
		Persistent.factories[ entityName ] = factory
	}

	static getFactory( entityName: string ) {
		return Persistent.factories[ entityName ]
	}

	// getInstance( entityName: string, .... ): Persistent { // User Tweet 
	// }

	private static factories = {}
}

type PersistentConstructor = ()=>Persistent



export interface GenericStore {
	save( obj: Persistent ): Promise<void>
	update( obj: Persistent ): Promise<void>
	findById( id: number, entityName: string ): Promise<Persistent>
	findAll( entityName: string ): Promise<Persistent[]>
	delete( obj: Persistent ): Promise<void>
}

export class MemStore implements GenericStore {
	save( obj: Persistent ): Promise<void> {
		throw 'not implemented'
	}

	update( obj: Persistent ): Promise<void> {
		throw 'not implemented'
	}

	findById( id: number, entityName: string ): Promise<Persistent> {
		throw 'not implemented'
	}

	findAll( entityName: string ): Promise<Persistent[]> {
		throw 'not implementes'		
	}

	delete( obj: Persistent ): Promise<void> {
		throw 'not implemented'
	}

}

export class RestStore implements GenericStore {

	save( obj: Persistent ): Promise<void> {
		return fetch(`http://localhost:3000/${ obj.entityName }`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( obj )
		}) as unknown as Promise<void>
	}

	update( obj: Persistent ): Promise<void> {
		return fetch(`http://localhost:3000/${ obj.entityName }/${ obj.id }`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( obj )
		}) as unknown as Promise<void>
			
	}

	async findById( id: number, entityName: string ): Promise<Persistent> {

		const response = await fetch(`http://localhost:3000/${ entityName }/${id}`)

		const datos = await response.json()

		return this.fillObject( datos )
	}

	async findAll( entityName: string ): Promise<Persistent[]> {
		const response = await fetch(`http://localhost:3000/${ entityName }`
			// { method: 'GET' }
		)
		const datos = await response.json() as unknown[]
		
		return datos.map( dato => this.fillObject( dato ) )
	}
	
	delete( obj: Persistent ): Promise<void>	 {
		return fetch( `http://localhost:3000/${ obj.entityName }/${obj.id}`, {
			method: 'DELETE',
		}) as unknown as Promise<void>
	}
	
	private fillObject( data: any ): Persistent {
		if ( !data ) return undefined
		
		const entityConstructor: PersistentConstructor = Persistent.getFactory( data.entityName )
		const instance = entityConstructor()
		
		Object.assign( instance, data )

		return instance
	}

}