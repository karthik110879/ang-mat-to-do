import { Folder } from "../models/folder.model";

export interface INote {
  id: string;
  title: string;
  desc: string;
  isFav?: boolean;
}
