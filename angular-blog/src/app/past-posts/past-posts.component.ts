import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../service/blog-post.service';

@Component({
  selector: 'app-past-posts',
  templateUrl: './past-posts.component.html',
  styleUrls: ['./past-posts.component.css']
})
export class PastPostsComponent implements OnInit {

  loading: boolean = true;

  constructor(private postService : BlogPostService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() : void {
      console.log('getting posts: ' + this.postService);
  }

}
