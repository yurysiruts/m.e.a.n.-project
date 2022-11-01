import { Component } from "@angular/core";
import { FormBuilder, FormGroupDirective, Validators } from "@angular/forms";
import { PostsService } from "src/app/store/app/posts.service";
import { IPost } from "src/app/store/app/types";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  constructor(public postsService: PostsService, private fb: FormBuilder) {}

  public newPostForm = this.fb.group({
    title: [null, Validators.required],
    content: [null, Validators.required],
  });

  public addPost(formDirective: FormGroupDirective) {
    if (this.newPostForm.valid && this.newPostForm.value.content && this.newPostForm.value.title) {
      this.postsService.addPosts(this.newPostForm.value.title, this.newPostForm.value.content as string)
      this.newPostForm.reset();
      formDirective.resetForm();
    }
  }
}