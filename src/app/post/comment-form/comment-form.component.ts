import { Component, Input, OnInit } from '@angular/core';

import { PostModel } from '../model/post.model';
import { PostService } from '../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() comment: PostModel;
  @Input() onSubmitAction;
  @Input() buttonLabel: string;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.onSubmitAction(this.comment);
  }
};
