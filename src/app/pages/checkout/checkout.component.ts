import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  totalPrice: number = 0;
  totalPriceSub?: Subscription;
  orderForm: any;
  cardExpiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

  constructor(
    private cartServise: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartServise.total();
    this.totalPriceSub = this.cartServise.total$.subscribe((data) => {
      this.totalPrice = data;
    });

    this.orderForm = this.fb.group({
      shippingGroup: this.fb.group({
        Address: ['', Validators.required],
        Phone: ['', Validators.required],
        PostalCode: ['', Validators.required],
        City: ['', Validators.required],
      }),
      cardGroup: this.fb.group({
        cardName: ['', Validators.required],
        cardNumber: ['', Validators.required],
        postalCode: ['', Validators.required],
        expiryDate: [
          '',
          [Validators.required, Validators.pattern(this.cardExpiryRegex)],
        ],
        securityCode: ['', Validators.required],
      }),
    });
  }

  placeOrder(form: any) {
    if (
      form.controls.shippingGroup.get('Address').hasError('required') ||
      form.controls.shippingGroup.get('Phone').hasError('required') ||
      form.controls.shippingGroup.get('PostalCode').hasError('required') ||
      form.controls.shippingGroup.get('City').hasError('required')
    ) {
      Swal.fire('fields cannot be empty!');
      return;
    }

    if (
      form.controls.cardGroup.get('cardName').hasError('required') ||
      form.controls.cardGroup.get('cardNumber').hasError('required') ||
      form.controls.cardGroup.get('postalCode').hasError('required') ||
      form.controls.cardGroup.get('expiryDate').hasError('required')
    ) {
      Swal.fire('fields cannot be empty!');
      return;
    }

    if (form.controls.cardGroup.get('expiryDate').hasError('pattern')) {
      Swal.fire('Expiry date must be in format month/year!');
      return;
    }

    if (form.controls.shippingGroup.valid && form.controls.cardGroup.valid) {
      form.controls.shippingGroup.reset();
      form.controls.cardGroup.reset();
      this.clearCart().then(() => {
        this.navigateToHomePage();
      });
    }
  }

  ngOnDestroy() {
    this.totalPriceSub?.unsubscribe();
  }

  async clearCart() {
    await this.cartServise.deleteCart();
    await this.cartServise.total$.next(0);
    await this.cartServise.cartItemCountChanged();
  }

  navigateToHomePage() {
    this.router.navigateByUrl('');
  }
}
