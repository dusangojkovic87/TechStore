import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-aside-special-products',
  templateUrl: './aside-special-products.component.html',
  styleUrls: ['./aside-special-products.component.css'],
})
export class AsideSpecialProductsComponent implements OnInit {
  specialProducts?: any;

  constructor(private AsideSpecialProductServise: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.AsideSpecialProductServise.getProducts()
      .pipe(
        map((data: any) => {
          return data.filter((data: Product) => data.specialProduct === true);
        })
      )
      .subscribe((data) => {
        this.specialProducts = data;
      });
  }

  redirectToDetails(id?:number){
    console.log(id);

    if(id != undefined || null){
      this.router.navigate(['product-details',id]);
    }

  }
}
