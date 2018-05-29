import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getPost();
  }

  private getPost(): void {
    const id = this.route.snapshot.paramMap.get('id'); //+ is JS conversion from string to int (which id should be)
    console.log('id: ' + id);
  }

}
