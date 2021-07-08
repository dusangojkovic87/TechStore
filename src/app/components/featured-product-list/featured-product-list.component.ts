import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-featured-product-list',
  templateUrl: './featured-product-list.component.html',
  styleUrls: ['./featured-product-list.component.css'],
})
export class FeaturedProductListComponent implements OnInit {
  products?: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
