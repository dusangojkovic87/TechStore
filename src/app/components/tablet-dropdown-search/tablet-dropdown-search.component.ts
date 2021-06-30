import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablet-dropdown-search',
  templateUrl: './tablet-dropdown-search.component.html',
  styleUrls: ['./tablet-dropdown-search.component.css']
})
export class TabletDropdownSearchComponent implements OnInit {
  dropdownSearchState:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  tabletSearchDropdownToggle(event:Event){
    event.stopPropagation();
    event.preventDefault();
    this.dropdownSearchState = !this.dropdownSearchState;
  }
}
