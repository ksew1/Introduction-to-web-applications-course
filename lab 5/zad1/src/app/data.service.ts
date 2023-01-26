import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  posts!: Post[];

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data) => (this.posts = data),
        error: (err) => console.warn(err),
      });
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPhotos() {
    return this.http.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }

  setPost(title: string, body: string) {
    const lastElement = this.posts[this.posts.length - 1];
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', {
      id: lastElement.id + 1,
      title: title,
      body: body,
      userId: -1,
    });
  }
}
