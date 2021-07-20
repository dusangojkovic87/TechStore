import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css'],
})
export class ProductMenuComponent implements OnInit {
  @Input('productId') productId?: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToDetailsPage(id?: number) {
    this.router.navigate(['/product-details', id]);
  }
}
