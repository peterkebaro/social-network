import React, { Component } from "react";
import { User } from "../user";
import { RestStore, GenericStore } from "../../store/store";

interface ProfileState extends Partial<User> {
    allUsers: User[];
}

interface ProfileProps {
    user?: User;
    onCancel: () => void;
}

export class Profile extends Component<ProfileProps, ProfileState> {
    constructor(props: ProfileProps) {
        super(props);
        this.store = new RestStore();
        this.state = { ...props.user, allUsers: [] };
    }

    componentDidMount() {
        return this.updateUserList();
    }

    async updateUser(user: User) {
        if (user.id) {
            await this.store.update(user);
        } else {
            await this.store.save(user);
        }

        this.setState({
            name: "",
            nick: "",
            bio: "",
            email: "",
            picture: "",
            password: "",
            id: undefined,
            entityName: "",
        });

        await this.updateUserList();
    }

    async editUser(user: User) {
        this.setState({
            ...user,
        });
    }

    async deleteUser(user: User) {
        await this.store.delete(user);
        await this.updateUserList();
    }

    async updateUserList() {
        this.setState({
            allUsers: (await this.store.findAll(
                new User().entityName
            )) as User[],
        });
    }

    getUserFromState(): User {
        const user = new User();

        user.name = this.state.name;
        user.nick = this.state.nick;
        user.bio = this.state.bio;
        user.email = this.state.email;
        user.picture = this.state.picture;
        user.password = this.state.password;
        user.id = this.state.id;
        user.entityName = this.state.entityName;

        return user;
    }

    render() {
        const { name, nick, bio, email, picture, password, id, allUsers } =
            this.state;
        const { onCancel } = this.props;

        return (
            <div className="profile">
                <br />
                <label className="cabecera-perfil">Perfil de Usuario</label>
                <br />
                <br />

                <label>Nombre: </label>
                <input
                    value={name || ""}
                    onChange={(event) =>
                        this.setState({ name: event.target.value })
                    }
                />
                <br />

                <label>Password: </label>
                <input
                    value={password || ""}
                    onChange={(event) =>
                        this.setState({ password: event.target.value })
                    }
                />
                <br />

                <label> Email: </label>
                <input
                    value={email || ""}
                    onChange={(event) =>
                        this.setState({ email: event.target.value })
                    }
                />
                <br />

                <label> Nick: </label>
                <input
                    value={nick || ""}
                    onChange={(event) =>
                        this.setState({ nick: event.target.value })
                    }
                />
                <br />

                <label>Bio: </label>
                <input
                    value={bio || ""}
                    onChange={(event) =>
                        this.setState({ bio: event.target.value })
                    }
                />
                <br />

                <label>Foto: </label>
                <input
                    value={picture || ""}
                    onChange={(event) =>
                        this.setState({ picture: event.target.value })
                    }
                />
                <br />
                <br />

                <button
                    onClick={() => this.updateUser(this.getUserFromState())}
                >
                    {id === undefined ? "Save User" : "Update User"}
                </button>
                <br />
                <br />

                {allUsers.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.name},{usuario.email}
                        {
                            <button onClick={() => this.editUser(usuario)}>
                                Editar
                            </button>
                        }
                        {
                            <button onClick={() => this.deleteUser(usuario)}>
                                Borrar
                            </button>
                        }
                    </li>
                ))}

                <button onClick={() => onCancel()}>Cancelar</button>
            </div>
        );
    }

    private store: GenericStore;
}
