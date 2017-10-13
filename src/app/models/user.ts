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

    constructor() {
        this.roles = { lecturer: true }
    }
}