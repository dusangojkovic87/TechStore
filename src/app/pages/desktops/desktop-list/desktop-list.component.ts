import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-desktop-list',
  templateUrl: './desktop-list.component.html',
  styleUrls: ['./desktop-list.component.css'],
})
export class DesktopListComponent implements OnInit {
  desktops?: Product[];
  p:any = 1;

  constructor(private productServise: ProductService) {}

  ngOnInit(): void {
    this.productServise
      .getProducts()
      .pipe(
        map((data: any) => {
          let filtered = data.filter(
            (product: Product) => product.category === 'Desktops'
          );
          return filtered;
        })
      )
      .subscribe((data) => {
        this.desktops = data;
      });
  }
}
