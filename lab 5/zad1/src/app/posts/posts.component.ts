import { Component, OnInit } from '@angular/core';
import { DataService, Post } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      next: (data) => (this.posts = data),
      error: (err) => console.warn(err),
    });
  }

  setPost(postForm: { title: string; body: string }) {
    this.service.setPost(postForm.title, postForm.body).subscribe({
      next: (data) => this.posts.push(data),
      error: (err) => console.warn(err),
    });
  }
}
