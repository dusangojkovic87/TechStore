import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/Models/Review';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.css']
})
export class ClientReviewComponent implements OnInit {
  @Input('review') review?:Review;

  constructor() { }

  ngOnInit(): void {
  }

}
