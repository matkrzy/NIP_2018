import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CommentModel } from '../model/comment.model';

import { PostService } from '../service/post.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  public comments: CommentModel[];
  public postId: number;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.getComments();
    });
  }

  getComments() {
    this.postService.getPostComments(this.postId).subscribe((data: CommentModel[]) => this.comments = data);
  }

  deleteComment(commentId) {
    this.postService.deletePostComment(this.postId, commentId).subscribe(() => this.getComments());
  }

};
