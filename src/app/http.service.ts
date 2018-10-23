import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  postPost(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
}


