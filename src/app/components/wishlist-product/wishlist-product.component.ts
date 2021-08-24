import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-wishlist-product',
  templateUrl: './wishlist-product.component.html',
  styleUrls: ['./wishlist-product.component.css']
})
export class WishlistProductComponent implements OnInit {
  @Input('wishlistProduct') wishlistProduct?:Product;

  constructor(private wishlistServise:ProductService) { }

  ngOnInit(): void {
  }

  deleteFromWishlist(id?:number){
    if(id){
      this.wishlistServise.deleteFromWishlist(id);
    }



  }

}
