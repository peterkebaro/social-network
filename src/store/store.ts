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
        let instance = Persistent.createInstance(data.entityName);

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
export interface GenericStore {
    save(obj: Persistent): Promise<void>;
    update(obj: Persistent): Promise<void>;
    findById(id: number, entityName: string): Promise<Persistent>;
    findAll(entityName: string): Promise<Persistent[]>;
    delete(obj: Persistent): Promise<void>;
}
