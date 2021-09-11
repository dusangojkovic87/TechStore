import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carousel } from 'src/app/Models/Carousel';

@Component({
  selector: 'app-carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.css'],
})
export class CarouselImgComponent implements OnInit {
  @Input('sliderImage') sliderImage?: Carousel;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToSpecials() {
    this.router.navigateByUrl('specials');
  }
}
