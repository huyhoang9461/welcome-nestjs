export class User {
    id?: number;
    username?: string;
    password?: string;
    email?: string;

    constructor({id, username, password, email}) {
        if (id !== null) this.id = id;
        if (username !== null) this.username = username;
        if (password !== null) this.password = password;
        if (email !== null) this.email = email;
    }
}