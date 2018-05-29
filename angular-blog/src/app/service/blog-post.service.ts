import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { BlogPost } from '../models/blog-post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private apiService : ApiService) { }

  public GetPosts() : Observable<BlogPost[]> {
    return this.apiService.GetPosts(environment.api.entries);
  }

  public GetPost(id: string) : Observable<BlogPost> {
    return this.apiService.GetPost(environment.api.entries, id);
  }

}
