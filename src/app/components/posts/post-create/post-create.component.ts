import { Component, EventEmitter, Output } from "@angular/core";
import { IPost } from "src/app/store/app/types";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  @Output() postCreated = new EventEmitter<IPost>();

  public enteredTitle = '';
  public enteredContent = '';

  public addPost() {
    const post: IPost = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}