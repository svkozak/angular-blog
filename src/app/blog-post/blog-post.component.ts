import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  authors: object;

  constructor(private http: HttpClient ) { 
  }

  ngOnInit(): void {
    this.http.get<Object>("https://jsonplaceholder.typicode.com/users").subscribe(data => {
      this.authors = data;
    })
  }

  onSubmit(postForm) {
    this.http.post("https://jsonplaceholder.typicode.com/posts", postForm).subscribe(response => {
      console.log(response);
    })
  }

}
