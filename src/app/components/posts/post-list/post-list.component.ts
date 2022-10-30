import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PostsService } from "src/app/store/app/posts.service";
import { IPost } from "src/app/store/app/types";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  // public posts = [
    //   { title: 'Title 1', content: 'Some description of the post' },
    //   { title: 'Title 2', content: 'Some description of the post' },
    //   { title: 'Title 3', content: 'Some description of the post' },
    // ];

  public posts: IPost[] = [];
  private subscription: Subscription = new Subscription();

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.subscription.add(
      this.postsService.postsUpdated.subscribe((posts: IPost[]) => {
        this.posts = posts;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}