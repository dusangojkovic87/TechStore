import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  watches?:Product[];
  p:any = 1;

  constructor(private productServise:ProductService) { }

  ngOnInit(): void {
    this.productServise
    .getProducts()
    .pipe(
      map((data: any) => {
        let filtered = data.filter(
          (product: Product) => product.category === 'Watch'
        );
        return filtered;
      })
    )
    .subscribe((data) => {
      this.watches = data;
    });
  }

}
