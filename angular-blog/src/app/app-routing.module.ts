import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { PastPostsComponent } from 'src/app/past-posts/past-posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'posts', component: PastPostsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
