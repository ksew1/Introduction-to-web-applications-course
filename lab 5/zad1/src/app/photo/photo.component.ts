import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService, Photo } from '../data.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  constructor(private service: DataService, private route: ActivatedRoute) {}
  photo!: Photo;
  routeSub!: Subscription;
  private id!: number;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.service.getPhotos().subscribe({
      next: (data) => (this.photo = data[this.id]),
    });
  }
}
