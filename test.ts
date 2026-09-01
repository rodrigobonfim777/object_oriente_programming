class User {
    constructor(
    name: string,
    email: string,
    address: Address[] = [],
    active: boolean = false
    ) {}
}

class Address {
    constructor(
        public address: string,
        public zipCode: number,
        public number?: number
    ) {}
}


