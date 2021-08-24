import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  wishlist$ = new BehaviorSubject<any>(null);
  cartCount$ = new BehaviorSubject<number>(0);
  cart$ = new BehaviorSubject<Product[]>([]);

  getProducts(): Observable<Product> {
    return this.http.get<Product>('/assets/fakeBackendApi/products.json');
  }

  getNewCollection(): Observable<Product> {
    return this.http.get<Product>('/assets/fakeBackendApi/new-collection.json');
  }

  addToWishlist(product: Product) {
    let wishlist: Product[] = [];
    if (localStorage.getItem('wishlist')) {
      let dataJsonFromStorage = localStorage.getItem('wishlist');
      if (dataJsonFromStorage != null) {
        let storedProducts = JSON.parse(dataJsonFromStorage);
        storedProducts.forEach((stored: Product) => {
          wishlist.push(stored);
        });

        let productExist = wishlist.some(
          (stored: Product) => stored.id === product.id
        );
        if (productExist) {
          Swal.fire('Already in wishlist');
        } else {
          wishlist.push(product);
          let productString = JSON.stringify(wishlist);
          localStorage.setItem('wishlist', productString);
          this.cartItemCountChanged();
          Swal.fire('Added to wishlist!');
        }
      }
    } else {
      wishlist.push(product);
      let productString = JSON.stringify(wishlist);
      localStorage.setItem('wishlist', productString);
      this.cartItemCountChanged();
      Swal.fire('Added to wishlist!');
    }
  }

  getWishlistProduct() {
    if (localStorage.getItem('wishlist')) {
      let storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        let wishlistJSON = JSON.parse(storedWishlist);
        if (wishlistJSON) {
          this.wishlist$.next(wishlistJSON);
        }
      }
    }
  }

  deleteFromWishlist(id?: number) {
    if (id) {
      if (localStorage.getItem('wishlist')) {
        let storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          let wishlistJSON = JSON.parse(storedWishlist);
          let filtered = wishlistJSON.filter(
            (product: Product) => product.id != id
          );
          let wishlistString = JSON.stringify(filtered);
          localStorage.setItem('wishlist', wishlistString);
          this.wishlist$.next(filtered);
        }
      }
    }
  }

  addToCart(product?: Product) {
    if (product === null || undefined) {
      return;
    }
    let cart: any = [];
    if (localStorage.getItem('cart')) {
      let stored = localStorage.getItem('cart');
      if (stored) {
        let storedJSON = JSON.parse(stored);
        storedJSON.forEach((storedProduct: Product) => {
          cart.push(storedProduct);
        });

        let exists = cart.some((stored: Product) => stored.id === product?.id);
        if (exists) {
          cart.map((storedProduct: Product) => {
            if (storedProduct.id === product?.id) {
              storedProduct.qt += 1;
            }
          });
        } else {
          cart.push(product);
        }
        let cartString = JSON.stringify(cart);
        localStorage.setItem('cart', cartString);
        this.cartItemCountChanged();
        Swal.fire('added to cart!');
      }
    } else {
      cart.push(product);
      let cartString = JSON.stringify(cart);
      localStorage.setItem('cart', cartString);
      this.cartItemCountChanged();
      Swal.fire('added to cart!');
    }
  }

  cartItemCountChanged(){
    let cart = localStorage.getItem("cart");
    if(cart){
      let cartJson = JSON.parse(cart);
      this.cartCount$.next(cartJson.length);
    }
  }

  getCart(){
    let cart = localStorage.getItem("cart");
    if(cart){
      let cartJson = JSON.parse(cart);
      this.cart$.next(cartJson);
    }
  }
}
