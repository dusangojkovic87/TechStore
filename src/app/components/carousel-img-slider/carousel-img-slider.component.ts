import { ElementRef, QueryList } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Carousel } from 'src/app/Models/Carousel';
import { CarouselService } from 'src/app/Services/carousel.service';

@Component({
  selector: 'app-carousel-img-slider',
  templateUrl: './carousel-img-slider.component.html',
  styleUrls: ['./carousel-img-slider.component.css'],
})
export class CarouselImgSliderComponent implements OnInit, AfterViewInit {
  CarouselImages?: any;
  @ViewChildren('slideImageTemplateRef') slideImages?: QueryList<ElementRef>;
  imagesHtml: HTMLElement[] = [];
  currentSlide: number = 0;
  slideInterval: any;
  slideIntervalCleared?: boolean = true;
  canActivateInterval: boolean = false;

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.carouselService.getImages().subscribe((data: Carousel) => {
      this.CarouselImages = data;
    });

    if (window.innerWidth < 768) {
      this.canActivateInterval = true;
      this.startSlideInterval();
      this.slideIntervalCleared = false;
    } else {
      this.canActivateInterval = false;
      this.clearSlideInterval();
      this.slideIntervalCleared = true;
    }
  }

  ngAfterViewInit() {
    if (this.slideImages)
      this.slideImages.changes.subscribe((data: QueryList<ElementRef>) => {
        let images = data.toArray();
        this.castElementRefToHtmlRef(images);
        this.initHideImages();
        this.startSlide();
      });
  }

  castElementRefToHtmlRef(images: Array<ElementRef>) {
    images.forEach((img) => {
      let i = img.nativeElement as HTMLElement;
      this.imagesHtml.push(i);
    });
  }

  initHideImages() {
    this.imagesHtml.forEach((img) => {
      img.style.display = 'none';
    });
  }

  startSlide() {
    this.imagesHtml[this.currentSlide].style.display = 'flex';
    this.imagesHtml[this.currentSlide].style.justifyContent = 'center';
  }

  slideLeft() {
    if (this.imagesHtml.length < 0 || this.currentSlide == 0) {
      this.initHideImages();
      this.currentSlide = this.imagesHtml.length - 1;
      this.startSlide();
    } else {
      this.initHideImages();
      this.currentSlide--;
      this.startSlide();
    }
  }

  slideRight() {
    if (this.currentSlide >= this.imagesHtml.length - 1) {
      this.initHideImages();
      this.currentSlide = 0;
      this.startSlide();
    } else {
      this.initHideImages();
      this.currentSlide++;
      this.startSlide();
    }
  }

  onWindowResizeSlider(event: UIEvent) {
    if (event) {
      let window = event.target as Window;
      if (window.innerWidth < 768) {
        this.canActivateInterval = true;
        this.startSlideInterval();
        this.slideIntervalCleared = false;
      } else if (window.innerWidth > 768) {
        this.canActivateInterval = false;
        this.clearSlideInterval();
        this.slideIntervalCleared = true;
      }
    }
  }

  automaticSlideShow() {
    if (this.currentSlide <= 0) {
      this.initHideImages();
      this.currentSlide++;
      this.startSlide();
    } else if (this.currentSlide >= this.imagesHtml.length - 1) {
      this.initHideImages();
      this.currentSlide--;
      this.startSlide();
    } else {
      this.initHideImages();
      this.currentSlide++;
      this.startSlide();
    }
  }

  startSlideInterval() {
    if (this.slideIntervalCleared == true && this.canActivateInterval == true) {
      this.slideInterval = setInterval(() => {
        this.automaticSlideShow();
      }, 3500);
    }
  }

  clearSlideInterval() {
    clearInterval(this.slideInterval);
  }
}
