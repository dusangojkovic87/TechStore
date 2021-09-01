import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {
  childComponentName:string = 'description';
  @Input('product') product:Product[] = [];

  constructor(private cartServise:ProductService) { }

  ngOnInit(): void {
  }

  loadChildComponent(componentName:string){
    this.childComponentName = componentName;

  }

  addToCart(product:Product){
    if(product){
      this.cartServise.addToCart(product);
      this.cartServise.cartItemCountChanged();

    }
  }

 addToWishlist(product:Product){
   if(product)
     this.cartServise.addToWishlist(product);
 }

}
