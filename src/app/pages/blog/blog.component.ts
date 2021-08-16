import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Models/Blog';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:any;
  p:any = 1;

  constructor(private blogServise:BlogService) { }

  ngOnInit(): void {
    this.blogServise.getBlogs().subscribe((data:any) =>{
      if(data)
        this.blogs = data;

    })


  }

}
