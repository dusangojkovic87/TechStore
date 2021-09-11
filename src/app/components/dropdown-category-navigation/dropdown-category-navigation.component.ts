import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MobileNavigationService } from 'src/app/Services/mobile-navigation.service';

@Component({
  selector: 'app-dropdown-category-navigation',
  templateUrl: './dropdown-category-navigation.component.html',
  styleUrls: ['./dropdown-category-navigation.component.css'],
})
export class DropdownCategoryNavigationComponent implements OnInit {
  sideNavOpen: boolean = false;

  constructor(private mobileNavigationServise: MobileNavigationService) {}

  ngOnInit(): void {}

  openMobileMenu() {
    if (window.innerWidth < 970) {
      this.mobileNavigationServise.toggleMobileMenu();
    }
  }
}
