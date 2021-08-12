import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/Models/Blog';

@Component({
  selector: 'app-footer-blog',
  templateUrl: './footer-blog.component.html',
  styleUrls: ['./footer-blog.component.css']
})
export class FooterBlogComponent implements OnInit {
  @Input('blog') blog?:Blog;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectToBlogDetails(id?:number){
    if(id){
      this.router.navigate(['blog',id]);
    }

  }

}
