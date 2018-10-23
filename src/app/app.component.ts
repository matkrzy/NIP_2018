import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private post: Post = { userId: 5, id: 101, title: 'SomeTitle', body: 'somebody' };
  public posts: Post[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.loadData();
  }

  public addPost() {

  }

  private getPostsData() {

  }

  public loadData() {
    this.httpService.getPosts().subscribe((data: Post[]) => this.posts = data);
    console.log(this.posts);
  }
};
