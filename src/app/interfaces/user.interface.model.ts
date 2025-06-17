import { Folder } from "../models/folder.model";

export interface IUser {
    id:string;
    name:string;
    email:string;
    passwordHash:string;
    createdAt:string;
    folders:Folder[];
}
