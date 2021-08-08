import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-special-product-list',
  templateUrl: './special-product-list.component.html',
  styleUrls: ['./special-product-list.component.css'],
})
export class SpecialProductListComponent implements OnInit {
  specialProduct?: any;

  constructor(private productServise: ProductService) {}

  ngOnInit(): void {
    this.productServise
      .getProducts()
      .pipe(
        map((data: any) => {
          let filteredProducts = data.filter(
            (product: Product) => product.specialProduct === true
          );
          return filteredProducts;
        })
      )
      .subscribe((data) => {
        this.specialProduct = data;
      });
  }
}
