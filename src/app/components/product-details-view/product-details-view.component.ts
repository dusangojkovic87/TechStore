import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {
  childComponentName:string = 'description';
  @Input('product') product:Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadChildComponent(componentName:string){
    this.childComponentName = componentName;

  }

}
