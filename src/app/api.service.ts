import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient ) { 
    }

    getAuthors() {
       return this.http.get("https://jsonplaceholder.typicode.com/users");
    }

    post(formData) {
        this.http.post("https://jsonplaceholder.typicode.com/posts", formData);
        console.log(formData);
    }

    getArticles() {
       return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }
}