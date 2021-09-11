import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cameras-list',
  templateUrl: './cameras-list.component.html',
  styleUrls: ['./cameras-list.component.css']
})
export class CamerasListComponent implements OnInit {
  cameras?:Product[];
  p:any = 1;

  constructor(private productServise:ProductService) { }

  ngOnInit(): void {
    this.productServise
    .getProducts()
    .pipe(
      map((data: any) => {
        let filtered = data.filter(
          (product: Product) => product.category === 'Cameras'
        );
        return filtered;
      })
    )
    .subscribe((data) => {
      this.cameras = data;
    });

  }

}
