export class Coach {
    id: number;
    unit: string;
    name: string;
    phone: string;
    account: string;
    constructor(id: number, unit: string, name: string, phone: string, account: string) {
        this.id = id;
        this.unit = unit;
        this.name = name;
        this.phone = phone;
        this.account = account;
    }
}
