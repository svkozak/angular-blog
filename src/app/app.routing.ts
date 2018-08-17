import { ArticleComponent } from './article/article.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes = [
    { path: "post", component: BlogPostComponent },
    { path: "search", component: ArticleComponent },
    { path: "", pathMatch: "full", redirectTo: "post" }
];


export const routing = RouterModule.forRoot(appRoutes);