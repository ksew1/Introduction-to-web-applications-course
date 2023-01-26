import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { PhotoComponent } from './photo/photo.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotoComponent },
  { path: 'posts', component: PostsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
