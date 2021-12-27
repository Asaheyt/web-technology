import {Comment} from "./comment";

export interface Item {
  id: number,
  title: string,
  description: string,
  owners: Array<string>,
  img: string,
  comments: Array<Comment>
}
