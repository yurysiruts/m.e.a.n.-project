import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { IPost } from "./types";

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: IPost[] = [];
  public postsUpdated = new Subject<IPost[]>();

  constructor(private http: HttpClient) {}

  public getPosts() {
    this.http
      .get<{ id: string, message: string, posts: any }>('http://localhost:3000/api/posts')
      .pipe(map((res) => {
        return res.posts.map((post: any) => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      }))
      .subscribe((resPosts: IPost[]) => {
        this.posts = resPosts;
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

  public deletePost(id: string) {
    this.http.delete('http://localhost:3000/api/posts' + id)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== id);
        this.posts = updatedPosts;
        this.postsUpdated.next([...updatedPosts]);
      });
  }
}