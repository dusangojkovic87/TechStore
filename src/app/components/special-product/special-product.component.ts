import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-special-product',
  templateUrl: './special-product.component.html',
  styleUrls: ['./special-product.component.css']
})
export class SpecialProductComponent implements OnInit {
  @Input('product') product?:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
