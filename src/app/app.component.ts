import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private post: Post = { userId: 5, id: 101, title: 'SomeTitle', body: 'somebody' };

  constructor() { }

  ngOnInit() {
  }

  public addPost() {

  }

  private getPostsData() {

  }
};
