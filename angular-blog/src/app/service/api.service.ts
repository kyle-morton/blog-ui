import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { BlogPost } from '../models/blog-post';

const API_URL = environment.api.base;

@Injectable({
  providedIn: 'root' //TODO: figure out how to inject service instead of being at root of app
})
export class ApiService {

  constructor(private http: Http) { }

  // public get<T>(endpoint: string):  {
  //   // return this.http
  //   //   .get(API_URL + endpoint)
  //   //   .pipe(map(response => {
  //   //     return response.json();
  //   //   }))
  //   //   .pipe(catchError(this.handleError));
  //     // return this.http
  //     // .get(API_URL + endpoint)
  //     // .pipe(map(response => {
  //     //   return response.json();
  //     //   // return json.map((todo) => new T(todo));
  //     // }))
  //     // .pipe(catchError(this.handleError));
  // }

  public GetPosts(endpoint: string) : Observable<BlogPost[]> {
      return this.http
      .get(API_URL + endpoint)
      .pipe(map(response => {
        var json = response.json();
        return json.map((post) => new BlogPost(post));
      }))
      .pipe(catchError(this.handleError));
  }

  //handle any error encounted while sending http request
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
