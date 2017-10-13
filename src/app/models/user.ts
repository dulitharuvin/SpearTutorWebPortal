export interface Roles {
    admin?: boolean;
    moderator?: boolean;
    lecturer: boolean;
}

export class User {
    email: string;
    firstName: string;
    lastName: string;
    nic: string;
    address: string;
    roles: Roles;

    constructor(user: User) {
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.nic = user.nic;
        this.address = user.address;
        this.roles = { lecturer: true }
    }
}