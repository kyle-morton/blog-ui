import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
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
    return this.apiService.Get(environment.api.entries)
    .pipe(map(json => {
      return json.map((post) => new BlogPost(post));
    }))
  }

  public GetPost(id: string) : Observable<BlogPost> {
    return this.apiService.Get(environment.api.entries + '/' + id)
    .pipe(map(json => {
      return new BlogPost(json);
    }));
  }

}
