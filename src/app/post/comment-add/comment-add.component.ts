import { Component, OnInit } from '@angular/core';

import { PostModel } from '../model/post.model';
import { Post } from '../class/post.class';

import { PostService } from '../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})

export class CommentAddComponent implements OnInit {
  public post: PostModel = new Post();
  public buttonLabel = 'add';

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.postService.postPost(this.post).subscribe(() => this.router.navigate(['/posts']));
  }
};
