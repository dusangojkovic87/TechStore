import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-peripherals-list',
  templateUrl: './peripherals-list.component.html',
  styleUrls: ['./peripherals-list.component.css']
})
export class PeripheralsListComponent implements OnInit {
  peripherals?:Product[];
  p:any = 1;

  constructor(private productServise:ProductService) { }

  ngOnInit(): void {
    this.productServise
    .getProducts()
    .pipe(
      map((data: any) => {
        let filtered = data.filter(
          (product: Product) => product.category === 'Peripherals'
        );
        return filtered;
      })
    )
    .subscribe((data) => {
      this.peripherals = data;
    });
  }

}
