import { Component, OnInit } from '@angular/core';

import { PostModel } from '../model/post.model';
import { Post } from '../class/post.class';

import { PostService } from '../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})

export class PostAddComponent implements OnInit {
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
