import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PostsService } from "src/app/store/app/posts.service";
import { IPost } from "src/app/store/app/types";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  constructor(public postsService: PostsService) {}

  public newPostForm = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  });

  public enteredTitle = '';
  public enteredContent = '';

  public addPost() {
    if (this.newPostForm.valid && this.newPostForm.value.content && this.newPostForm.value.title) {
      this.postsService.addPosts(this.newPostForm.value.title as string, this.newPostForm.value.content as string)
    }
  }
}