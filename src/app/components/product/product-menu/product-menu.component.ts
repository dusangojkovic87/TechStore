import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css'],
})
export class ProductMenuComponent implements OnInit {
  @Input('product') product?:Product;

  constructor(private router: Router,private productServise:ProductService) {}

  ngOnInit(): void {}

  redirectToDetailsPage(id?: number) {
    this.router.navigate(['/product-details', id]);
  }

  addToWishlist(product?:Product){
    if(product)
      this.productServise.addToWishlist(product);
  }

  addToCart(product?:Product){
    if(product)
       this.productServise.addToCart(product);
  }
}
