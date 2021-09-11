import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileNavigationService {
  $mobileMenuOpen = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleMobileMenu() {
    if (this.$mobileMenuOpen.value === true) {
      this.$mobileMenuOpen.next(false);
    } else {
      this.$mobileMenuOpen.next(true);
    }
  }
}
