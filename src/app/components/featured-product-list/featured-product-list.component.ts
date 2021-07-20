import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-featured-product-list',
  templateUrl: './featured-product-list.component.html',
  styleUrls: ['./featured-product-list.component.css'],
})
export class FeaturedProductListComponent implements OnInit,AfterViewInit {
  products?: any;
  translateStartPosition:number = 200;
  @ViewChild('slider') slider?:ElementRef;
  sliderHTML?:HTMLElement;
  sliderLength:number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.sliderLength = this.products.length * 250;
    });
  }

  ngAfterViewInit(){
    this.sliderHTML = this.slider?.nativeElement as HTMLElement;
  }

  slideLeft(){
    console.log(this.translateStartPosition);

    if(this.sliderHTML){
      if(this.translateStartPosition <= - this.sliderLength + 350){
        this.translateStartPosition = 200;
        this.sliderHTML.style.transform = `translateX(${this.translateStartPosition}px)`;
      }
      this.translateStartPosition -= 200;
      this.sliderHTML.style.transform = `translateX(${this.translateStartPosition}px)`;
    }

  }

  slideRight(){
    if(this.sliderHTML){
      if(this.translateStartPosition >= 0){
        this.translateStartPosition = -200;
        this.sliderHTML.style.transform = `translateX(${this.translateStartPosition}px)`;
      }
      this.translateStartPosition += 200;
      this.sliderHTML.style.transform = `translateX(${this.translateStartPosition}px)`;
    }
  }

}
