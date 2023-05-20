import { Person } from "./person";

export interface Student extends Person {
    registrationCode: number;
    carrer: string;
    level: string;
}