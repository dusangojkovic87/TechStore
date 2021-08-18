import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/Services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  blogs: any;
  subscribeForm: any;

  constructor(private blogSevise: BlogService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.blogSevise.getBlogs().subscribe((data) => {
      if (data) this.blogs = data;
    });

    this.subscribeForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  toggleFooterInfo(element: HTMLUListElement) {
    element.classList.toggle('info');
  }

  subscribe(formData: FormGroup) {
    if (formData.controls.Email.errors?.required) {
      Swal.fire("Field cannot be empty!");
      return;
    }

    if (formData.controls.Email.errors?.email) {
      Swal.fire("Email is not valid!");
      return;
    }

    if (formData.valid) {
      Swal.fire("Subsribed succesfully!");
      formData.reset();
    }
  }
}
