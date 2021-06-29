import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-phone-number',
  templateUrl: './header-phone-number.component.html',
  styleUrls: ['./header-phone-number.component.css']
})
export class HeaderPhoneNumberComponent implements OnInit {
  accountDropdownState:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  accountDropdown(){
    this.accountDropdownState = !this.accountDropdownState;

  }

}
