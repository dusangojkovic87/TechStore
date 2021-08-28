import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  totalPrice: number = 0;
  totalPriceSub?: Subscription;
  orderForm: any;

  constructor(private cartServise: ProductService, private fb: FormBuilder) {}

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
        expiryDate: ['', Validators.required],
        securityCode: ['', Validators.required],
      }),
    });
  }

  placeOrder(form:FormGroup){
    console.log(form.controls.shippingGroup);
    console.log(form.controls.cardGroup);
  }

  ngOnDestroy() {
    this.totalPriceSub?.unsubscribe();
  }


}
