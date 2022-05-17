import { Persistent } from "./store";
import { GenericStore } from "./store";

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
