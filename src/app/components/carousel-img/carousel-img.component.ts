import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from 'src/app/Models/Carousel';

@Component({
  selector: 'app-carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.css']
})
export class CarouselImgComponent implements OnInit {
  @Input('sliderImage') sliderImage?:Carousel;

  constructor() { }

  ngOnInit(): void {

  }

}
