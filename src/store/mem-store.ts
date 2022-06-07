import { GenericStore } from "./store"
import { Persistent } from "./store"

export class MemStore implements GenericStore {
    async save(obj: Persistent): Promise<void> {
        this._store.push(obj)
        // return Promise.resolve()
    }

    async update(obj: Persistent): Promise<void> {
        const foundIndex = this._store.findIndex((element) => element.id === obj.id)
        this._store[foundIndex] = obj
    }

    async findById(id: number, entityName: string): Promise<Persistent> {
        const found = this._store.find((element) => element.id === id)
        if (!found) return

        return Persistent.getObjectInstance(found)
    }

    async findAll(entityName: string): Promise<Persistent[]> {

        return this._store.find((element) => Persistent.getObjectInstance(entityName)) as any
        
    }

    async delete(obj: Persistent): Promise<void> {

        const foundIndex = this._store.findIndex((element) => element.id === obj.id)
        this._store.slice(foundIndex)
    }

    private _store: Persistent[] = []
}
