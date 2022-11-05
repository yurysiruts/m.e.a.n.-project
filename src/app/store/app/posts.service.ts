import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IPost } from "./types";

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: IPost[] = [];
  public postsUpdated = new Subject<IPost[]>();

  constructor(private http: HttpClient) {}

  public getPosts() {
    this.http.get<{ id: string, message: string, posts: IPost[] }>('http://localhost:3000/api/posts').subscribe((res: any) => {
      this.posts = res.posts;
      this.postsUpdated.next([...this.posts]);  
    });

  } 

  public addPosts(title: string, content: string ) {
    const post = { id: null, title: title, content: content };
    this.http.post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe((res) => {
        console.log(res.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });

  }
}