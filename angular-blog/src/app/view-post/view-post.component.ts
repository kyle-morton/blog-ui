import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from 'src/app/service/blog-post.service';
import { BlogPost } from 'src/app/models/blog-post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  loading: boolean = true;
  post: BlogPost;

  constructor(private route: ActivatedRoute, private postService : BlogPostService) { }

  ngOnInit() {
    this.getPost();
  }

  private getPost(): void {
    const id = this.route.snapshot.paramMap.get('id'); //+ is JS conversion from string to int (which id should be)
    console.log('id: ' + id);

    this.postService.GetPost(id)
    .subscribe((post) => {
      console.log('post: ' + JSON.stringify(post));
      this.post = post;
      this.loading = false;
    })
  }

}
