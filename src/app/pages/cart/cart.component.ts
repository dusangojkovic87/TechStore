import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  totalPrice:number = 0;
  totalPriceSub?:Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCart();
    this.cartSub = this.productService.cart$.subscribe((cart: Product[]) => {
      this.cart = cart;
    });

    this.productService.total();
    this.totalPriceSub = this.productService.total$.subscribe(data =>{
      this.totalPrice = data;

    });

  }

  ngOnDestroy(){
    this.cartSub?.unsubscribe();
    this.totalPriceSub?.unsubscribe();

  }
}
