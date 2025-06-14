import { v4 as uuidv4 } from 'uuid';

export class Note {
  id: string;
  title: string;
  desc: string;
  isFav: boolean;

  constructor(title:string,desc:string, isFav:boolean) {
    this.id = `NOTE_${uuidv4()}`;
    this.title = title;
    this.desc = desc;
    this.isFav = isFav;
  }
}
