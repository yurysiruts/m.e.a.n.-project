import { Component } from '@angular/core';
import { IPost } from './store/app/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-project';
  storedPosts: IPost[] = [];

  onPostCreate(post: IPost) {
    this.storedPosts.push(post);
  }
}
