import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops?:Product[];
  p:any = 1;

  constructor(private productServise:ProductService) { }

  ngOnInit(): void {
    this.productServise
    .getProducts()
    .pipe(
      map((data: any) => {
        let filtered = data.filter(
          (product: Product) => product.category === 'Laptops'
        );
        return filtered;
      })
    )
    .subscribe((data) => {
      this.laptops = data;
    });

  }

}
