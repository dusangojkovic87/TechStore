import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent implements OnInit,OnDestroy {
  cartCount: number = 0;
  cartCountSub?:Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.cartItemCountChanged();
    this.productService.cartCount$.subscribe((cartCount: number) => {
      this.cartCount = cartCount;
    });
  }

  ngOnDestroy(){
    this.cartCountSub?.unsubscribe();

  }
}
