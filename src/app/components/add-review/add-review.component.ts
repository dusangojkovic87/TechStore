import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  addReviewGroup: any;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.addReviewGroup = this.fb.group({
      name: ['', Validators.required],
      review: ['', Validators.required],
      rating: ['3', Validators.required],
    });
  }

  addReview(form: FormGroup) {
    if (
      form.get('name')?.hasError('required') ||
      form.get('review')?.hasError('required')
    ) {
      Swal.fire('fields cannot be empty!');
      return;
    }

    if (form.valid) {
      this.router.navigateByUrl('');
    }
  }
}
