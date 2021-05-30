import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pw-app';

  posts: Post[] = [
    { title: 'Learn Angular', text: 'Text 1', id: 1 },
    { title: 'First Step', text: 'Text 2', id: 2 },
    { title: 'Run Server', text: 'Text 3', id: 3 }
  ]

  updatePost(p: Post) {
    this.posts.push(p)  // or unshift
  }
}
