import { Folder } from "./folder.model";
import { v4 as uuidv4 } from 'uuid';

export class User {
    id:string;
    name:string;
    email:string;
    passwordHash:string;
    createdAt:string;
    folders!:Folder[];

    constructor(
            name:string,
            email:string,
            passwordHash:string,
            createdAt:string) {
        this.id = `USER_${uuidv4()}`;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.createdAt = createdAt;
    }
}
