import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getBlogs():Observable<Blog>{
    return this.http.get<Blog>("/assets/fakeBackendApi/blogs.json");

  }
}
