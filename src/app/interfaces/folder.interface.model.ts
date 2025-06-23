import { Folder } from "../models/folder.model";

export interface IFolder {
    id: string;
    createdUserId: string;
    name: string;
    path: string;
    updated?: Date;
}
