import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BlogPostService } from '../service/blog-post.service';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-author-post',
  templateUrl: './author-post.component.html',
  styleUrls: ['./author-post.component.css']
})
export class AuthorPostComponent implements OnInit {

  public post : BlogPost;

  constructor(private postService : BlogPostService) { }

  ngOnInit() {
    this.post = new BlogPost();
  }
  
  public submit() : void {
    console.log('submitting blog post: ' + JSON.stringify(this.post));

    this.postService.CreatePost(this.post)
    .subscribe(response => console.log('response on new post: ' + JSON.stringify(response)));
  }

}
