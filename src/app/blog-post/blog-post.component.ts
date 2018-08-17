import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  authors: object;
  alert = false;

  constructor(private http: HttpClient, private api: ApiService ) { 
  }

  ngOnInit(): void {
    this.api.getAuthors().subscribe(data => {
      this.authors = data
    })
  }

  onSubmit(postForm) {
    this.api.post(postForm)
    this.alert = true;
  }

  hideAlert(){
      this.alert = false
  }

}
