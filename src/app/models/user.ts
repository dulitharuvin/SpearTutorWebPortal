export interface Roles {
    admin?: boolean;
    moderator?: boolean;
    lecturer: boolean;
}

export class Telephone {
    personal? : string;
    home? : string;
}

export class User {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    telephone: Telephone;
    nic: string;
    address: string;
    roles: Roles;

    constructor() {
        this.roles = { lecturer: true }
        this.telephone = new Telephone();
    }
}

