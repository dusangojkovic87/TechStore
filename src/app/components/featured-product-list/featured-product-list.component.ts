import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-featured-product-list',
  templateUrl: './featured-product-list.component.html',
  styleUrls: ['./featured-product-list.component.css'],
})
export class FeaturedProductListComponent implements OnInit, AfterViewInit {
  products?: any;
  productLength: number = 0;
  currentIndex: number = 0;
  @ViewChild('slider') slider?: ElementRef;
  sliderHTML?: HTMLElement;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.productLength = this.products.length;
    });
  }

  ngAfterViewInit() {
    if (this.slider) this.sliderHTML = this.slider.nativeElement as HTMLElement;
  }

  slideLeft() {
    this.currentIndex -= 1;
    if (this.currentIndex <= -this.productLength) {
      this.currentIndex = 0;
      if (this.sliderHTML) {
        this.sliderHTML.style.transform = `translateX(${
          this.currentIndex * 250
        }px)`;
      }
    }
    if (this.sliderHTML) {
      this.sliderHTML.style.transform = `translateX(${
        this.currentIndex * 250
      }px)`;
    }
  }

  slideRight() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.productLength - 4) {
      this.currentIndex = 0;
      if (this.sliderHTML) {
        this.sliderHTML.style.transform = `translateX(${
          this.currentIndex * 250
        }px)`;
      }
    }
    if (this.sliderHTML) {
      this.sliderHTML.style.transform = `translateX(${
        this.currentIndex * 250
      }px)`;
    }
  }
}
