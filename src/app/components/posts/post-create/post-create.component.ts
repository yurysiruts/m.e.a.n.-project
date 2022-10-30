import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IPost } from "src/app/store/app/types";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  @Output() postCreated = new EventEmitter<IPost>();

  public newPostForm = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  });

  public enteredTitle = '';
  public enteredContent = '';

  public addPost() {
    if (this.newPostForm.valid && this.newPostForm.value.content && this.newPostForm.value.title) {
      const post: IPost = {
        title: this.newPostForm.value.title as string,
        content: this.newPostForm.value.content as string
      };
      this.postCreated.emit(post);
    }
  }
}