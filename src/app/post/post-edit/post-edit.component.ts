import { Component, OnInit } from '@angular/core';

import { PostModel } from '../model/post.model';
import { Post } from '../class/post.class';

import { PostService } from '../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})

export class PostEditComponent implements OnInit {
  public post: PostModel = new Post();
  public buttonLabel = 'edit';

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];

      this.postService.getPost(id).subscribe((data: Post) => this.post = data);
    });
  }

  onSubmit() {
    this.postService.putPost(this.post).subscribe(() => this.router.navigate(['/posts']));
  }
};
