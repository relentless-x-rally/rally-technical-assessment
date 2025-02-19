export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Voter {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    address: string;
    age: number;
    voterfileId: string;
}
