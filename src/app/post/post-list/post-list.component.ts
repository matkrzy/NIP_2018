import { Component, OnInit } from '@angular/core';

import { PostModel } from '../model/post.model';
import { PostService } from '../service/post.service';


@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  public posts: PostModel[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  public fetchPosts() {
    this.postService.getPosts().subscribe((data: PostModel[]) => this.posts = data);
  }

  public deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.fetchPosts();
    });
  }

};
