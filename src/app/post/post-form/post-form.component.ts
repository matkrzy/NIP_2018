import { Component, Input, OnInit } from '@angular/core';

import { PostModel } from '../model/post.model';
import { PostService } from '../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';


class PostClass implements PostModel {
  public id: number;
  public title: string;
  public description: string;
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() post: PostModel;
  @Input() onSubmitAction;
  @Input() buttonLabel: string;
  @Input() formId: string;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.onSubmitAction(this.post);
  }

};
