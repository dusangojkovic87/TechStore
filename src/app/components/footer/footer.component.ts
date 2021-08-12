import { Component, ElementRef, OnInit } from '@angular/core';
import { Blog } from 'src/app/Models/Blog';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  blogs:any;


  constructor(private blogSevise:BlogService) { }

  ngOnInit(): void {
    this.blogSevise.getBlogs().subscribe(data =>{
      if(data)
        this.blogs = data;
    })


  }

  toggleFooterInfo(element:HTMLUListElement){
     element.classList.toggle('info');
  }

}
