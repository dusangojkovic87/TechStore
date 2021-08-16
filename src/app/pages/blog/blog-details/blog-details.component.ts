import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Blog } from 'src/app/Models/Blog';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  blogDetails:Blog[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogServise: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.blogServise
          .getBlogs()
          .pipe(
            map((data: any) => {
              let filteredBlog = data.filter(
                (blog: Blog) => blog.id === +params.id
              );
              return filteredBlog;
            })
          )
          .subscribe((blog) => {
            if(blog)
            this.blogDetails.push(blog[0]);
          });
      }
    });
  }
}
