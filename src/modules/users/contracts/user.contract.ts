import { Contract } from "./contract";


export class UserContract implements Contract{
    errors: any[];
    validate(model: any): boolean {
        throw new Error("Method not implemented.");
    }

}