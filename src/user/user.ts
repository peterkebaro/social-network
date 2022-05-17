import { Persistent } from "../store/store";

export class User implements Persistent {
    public id: number;
    public name: string;
    public nick: string;
    public password: string;
    public email: string;
    public bio: string;
    public picture: string;

    entityName = "users";
}

Persistent.registerPersistentFactory("users", () => new User());

const user: User = Persistent.getObjectInstance({
    entityName: "users",
    id: 546546456,
    name: "Pepe",
}) as User;
