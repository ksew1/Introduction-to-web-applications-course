import { Component, OnInit } from '@angular/core';
import { DataService, Photo } from '../data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos!: Photo[];
  constructor(private service: DataService) {}
  ngOnInit(): void {
    this.service.getPhotos().subscribe({
      next: (data) => (this.photos = data.slice(0, 300)),
      error: (err) => console.warn(err),
    });
  }
}
