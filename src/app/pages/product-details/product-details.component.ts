import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit,OnDestroy {
  id?: number;
  product: Product[] = [];
  isLoaded:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productServise: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });

    this.productServise
      .getProducts()
      .pipe(
        map((products: any) => {
          return products.filter((product: Product) => product.id == this.id);
        })
      )
      .subscribe((product) => {
        this.product = product;
        this.isLoaded = true;
      });
  }

  ngOnDestroy(){
    this.isLoaded = false;
  }
}
