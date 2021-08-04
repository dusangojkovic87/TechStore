import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/Services/review.service';
import SwiperCore from 'swiper/core';




@Component({
  selector: 'app-client-aside-review-list',
  templateUrl:'./client-aside-review-list.component.html',
  styleUrls: ['./client-aside-review-list.component.css'],

})
export class ClientAsideReviewListComponent implements OnInit {
  reviews: any;

  constructor(private reviewServise: ReviewService) {}

  ngOnInit(): void {
    this.reviewServise.getReviews().subscribe((data) => {
      this.reviews = data;
    });
  }


  }









