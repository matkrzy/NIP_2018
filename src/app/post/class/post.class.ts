import { PostModel } from '../model/post.model';

export class Post implements PostModel {
  public id: number;
  public title: string;
  public description: string;
}
