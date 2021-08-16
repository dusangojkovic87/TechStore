import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css'],
})
export class NewCollectionComponent implements OnInit {
  newCollection: Product[] = [];
  p:any = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getNewCollection().subscribe((newCollection: any) => {
      if (newCollection) this.newCollection = newCollection;
    });
  }
}
