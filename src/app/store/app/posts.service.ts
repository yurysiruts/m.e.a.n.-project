import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IPost } from "./types";

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: IPost[] = [];
  public postsUpdated = new Subject<IPost[]>();

  public getPosts(): IPost[] {
    return [...this.posts];
  } 

  public addPosts(title: string, content: string ) {
    const post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next(this.getPosts());
  }
}