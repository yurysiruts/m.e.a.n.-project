import { Component, Input } from "@angular/core";
import { IPost } from "src/app/store/app/types";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  @Input() posts: IPost[] = [];
  // public posts = [
  //   { title: 'Title 1', content: 'Some description of the post' },
  //   { title: 'Title 2', content: 'Some description of the post' },
  //   { title: 'Title 3', content: 'Some description of the post' },
  // ];
}