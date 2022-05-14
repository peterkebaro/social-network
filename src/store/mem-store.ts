import { GenericStore } from "./store";
import { Persistent } from "./store";

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
