import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  query: string;
  articles: object;

  constructor(private http: HttpClient) { 
    this.query = "";
  }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      this.articles = data;
    })
  }

}
