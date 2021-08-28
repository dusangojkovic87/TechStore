import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input('product') product?: Product;

  constructor(private cartServise: ProductService) {}

  ngOnInit(): void {
  }

  removeFromCart(id?: number) {
    if (id) {
      this.cartServise.removeFromCart(id);
    }
  }

  qtUp(id?: number) {
    if(id)
       this.cartServise.qtUp(id);

  }

  qtDown(id?: number) {
    if(id)
       this.cartServise.qtDown(id);

}

}
