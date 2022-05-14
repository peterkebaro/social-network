type PersistentConstructor = () => Persistent;
export interface FactoryCollection {
    [key: string]: PersistentConstructor;
}
export abstract class Persistent {
    id: number;
    readonly entityName: string;
    [key: string]: any; //TODO: eliminar

    static registerPersistentFactory(
        entityName: string,
        factory: PersistentConstructor
    ) {
        Persistent.factories[entityName] = factory;
    }

    static getObjectInstance(data: any): Persistent {
        if (!data) return undefined;
        let instance = Persistent.createInstance(data.entity);

        Object.assign(instance, data);
        // structuredClone()

        return instance;
    }

    static createInstance(entityName: string) {
        const factory = Persistent.factories[entityName];
        if (!factory)
            throw new Error(`La entidad ${entityName} no ha sido registrada`);
        return factory();
    }

    private static factories: FactoryCollection = {
        // 'users': ()=>new User()
    };
}

// Persistent.registerPersistentFactory( 'users', ()=>new User() )

// const createUser = ()=>new User()
// createUser()

export interface GenericStore {
    save(obj: Persistent): Promise<void>;
    update(obj: Persistent): Promise<void>;
    findById(id: number, entityName: string): Promise<Persistent>;
    findAll(entityName: string): Promise<Persistent[]>;
    delete(obj: Persistent): Promise<void>;
}

export class MemStore implements GenericStore {
    save(obj: Persistent): Promise<void> {
        throw "not implemented";
    }

    update(obj: Persistent): Promise<void> {
        throw "not implemented";
    }

    findById(id: number, entityName: string): Promise<Persistent> {
        throw "not implemented";
    }

    findAll(entityName: string): Promise<Persistent[]> {
        throw "not implementes";
    }

    delete(obj: Persistent): Promise<void> {
        throw "not implemented";
    }
}

export class RestStore implements GenericStore {
    save(obj: Persistent): Promise<void> {
        return fetch(`http://localhost:3000/${obj.entityName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        }) as unknown as Promise<void>;
    }

    update(obj: Persistent): Promise<void> {
        return fetch(`http://localhost:3000/${obj.entityName}/${obj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        }) as unknown as Promise<void>;
    }

    async findById(id: number, entityName: string): Promise<Persistent> {
        const response = await fetch(
            `http://localhost:3000/${entityName}/${id}`
        );

        const datos = await response.json();

        return Persistent.getObjectInstance(datos);
    }

    async findAll(entityName: string): Promise<Persistent[]> {
        const response = await fetch(
            `http://localhost:3000/${entityName}`
            // { method: 'GET' }
        );
        const datos = (await response.json()) as unknown[];

        return datos.map((dato) => Persistent.getObjectInstance(dato));
    }

    delete(obj: Persistent): Promise<void> {
        return fetch(`http://localhost:3000/${obj.entityName}/${obj.id}`, {
            method: "DELETE",
        }) as unknown as Promise<void>;
    }
}

function suma(a: number, b: number) {
    return a - b;
}

expect(suma(2, 4)).toBe(6);
expect(suma(25, 10)).toBe(35);
