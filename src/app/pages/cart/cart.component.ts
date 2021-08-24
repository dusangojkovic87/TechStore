import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit,OnDestroy {
  cart: any;
  cartSub?:Subscription;
  p:any = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCart();
    this.productService.cart$.subscribe((cart: Product[]) => {
      this.cart = cart;
    });
  }

  ngOnDestroy(){
    this.cartSub = this.cart;
    this.cartSub?.unsubscribe();

  }
}
