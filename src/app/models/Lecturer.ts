export class Lecturer {

    public firstName: string;
    public lastName: string;
    public nic: string;
    public email: string;
    public address: string;
    public expired: number;
    public telephone: Telephone;
    
    constructor() {
        this.expired = 0;
        this.telephone = new Telephone();
    }
}

export class Telephone {
    personal? : string;
    home? : string;
}