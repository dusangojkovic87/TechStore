import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-scanner-list',
  templateUrl: './scanner-list.component.html',
  styleUrls: ['./scanner-list.component.css']
})
export class ScannerListComponent implements OnInit {
  scanners?:Product[];
  p:any = 1;

  constructor(private productServise:ProductService) { }

  ngOnInit(): void {
    this.productServise
    .getProducts()
    .pipe(
      map((data: any) => {
        let filtered = data.filter(
          (product: Product) => product.category === 'Scanner'
        );
        return filtered;
      })
    )
    .subscribe((data) => {
      this.scanners = data;
    });


  }

}
