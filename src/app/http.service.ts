import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class HttpService {
  private url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get(`${this.url}/posts`);
  }

  postPost(post: Post) {
    return this.http.post(`${this.url}/posts`, post);
  }

  putPost(post: Post) {
    return this.http.put(`${this.url}/posts/${post.id}`, post);
  }

  deletePost(post: Post) {
    return this.http.delete(`${this.url}/posts/${post.id}`);

  }
}


