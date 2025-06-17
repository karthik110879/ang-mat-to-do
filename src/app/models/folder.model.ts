import { v4 as uuidv4 } from 'uuid';

export class Folder {
  id: string;
  name: string;
  path: string;
  updated: Date;

  constructor(name:string,path:string, updated:Date) {
    this.id = `FOLD_${uuidv4()}`;
    this.name = name;
    this.path = path;
    this.updated = updated;
  }
}
