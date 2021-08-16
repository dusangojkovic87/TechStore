import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css'],
})
export class SpecialsComponent implements OnInit {
  specialProducts: Product[] = [];
  p:any = 1;

  constructor(private productServise: ProductService) {}

  ngOnInit(): void {
    this.productServise
      .getProducts()
      .pipe(
        map((products: any) => {
          let filteredProducts = products.filter(
            (product: Product) => product.specialProduct === true
          );
          return filteredProducts;
        })
      )
      .subscribe((specialProducts) => {
        if (specialProducts) this.specialProducts = specialProducts;
      });
  }
}
