import { Folder } from "../models/folder.model";

export interface IUser {
    id:string;
    name:string;
    email:string;
    passwordHash:string;
    createdAt:string;
    folders:Folder[];
}
export interface INewUser {
    username:string;
    email:string;
    password:string;
}
export interface ILoginUser {
    username?:string;//not required for now

    email:string;
    password:string;
}


