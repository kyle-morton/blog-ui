import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../service/blog-post.service';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  posts: BlogPost[];

  constructor(private postService : BlogPostService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() : void {
    console.log('getting posts: ' + this.postService);
    this.postService.GetPosts()
    .subscribe((posts) => {
      this.posts = posts;
      this.loading = false;
      console.log('posts: ' + JSON.stringify(this.posts));
    })
  }

}
