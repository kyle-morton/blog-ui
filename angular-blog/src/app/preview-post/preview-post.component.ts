import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.css']
})
export class PreviewPostComponent implements OnInit {
  @Input() post : BlogPost;

  constructor() { }
  ngOnInit() { }

}
