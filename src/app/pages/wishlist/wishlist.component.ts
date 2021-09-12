import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlist:any;
  wishlistSubscription?: Subscription;
  p: any = 1;

  constructor(private wishlistService: ProductService) {}

  ngOnInit(): void {
    this.wishlistService.getWishlistProduct();
    this.wishlistSubscription = this.wishlistService.wishlist$.subscribe(
      (wishlist) => {
        this.wishlist = wishlist;
      }
    );
  }

  ngOnDestroy() {
    this.wishlistSubscription?.unsubscribe();
  }
}
