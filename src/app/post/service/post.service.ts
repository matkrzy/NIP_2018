import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostModel } from '../model/post.model';

@Injectable()
export class PostService {
  private url = 'http://7710f21d.ngrok.io/api/v2';

  constructor(private http: HttpClient) {
  }

  private handleError(error) {
    return console.log(error.subscribe(data => data));
  }

  getPosts() {
    return this.http.get(`${this.url}/blogposts`);
  }

  getPost(id: number) {
    return this.http.get(`${this.url}/blogposts/${id}`);
  }

  getPostComments(id: number) {
    return this.http.get(`${this.url}/blogposts/${id}/comments`);
  }

  deletePostComment(postId: number, commentId: number) {
    return this.http.delete(`${this.url}/blogposts/${postId}/comments/${commentId}`);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.url}/blogposts/${id}`);
  }

  postPost(post: PostModel) {
    return this.http.post(`${this.url}/blogposts`, post);
  }

  //postPostComment(comment) {
  //  return this.http.post(`${this.url}/blogposts`, post);
  //}

  putPost(post: PostModel) {
    return this.http.put(`${this.url}/blogposts/${post.id}`, post);
  }
}


