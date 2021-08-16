import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/Models/Blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input('blog') blog?:Blog;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  blogDetails(id?:number){
    if(id)
      this.router.navigate(['blog',id]);
  }

}
