import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Input('reviews') reviews?:any;
  p:any = 1;

  constructor() { }

  ngOnInit(): void {
  }

  }


