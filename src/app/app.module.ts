import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchArticlesPipe } from './search-articles.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    NavigationComponent,
    ArticleComponent,
    SearchArticlesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
