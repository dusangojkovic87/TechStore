import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MobileNavigationService } from 'src/app/Services/mobile-navigation.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit,OnDestroy {
  sideNavOpen:boolean = false;
  categoriesOpen:boolean = false;
  Sub?:Subscription;

  constructor(private mobileNavigationServise:MobileNavigationService) { }

  ngOnInit(): void {
    this.Sub = this.mobileNavigationServise.$mobileMenuOpen.subscribe(isOpen =>{
      this.sideNavOpen = isOpen;
    })
  }

  toggleSideNav(){
    if(window.innerWidth < 970){
     this.sideNavOpen = true;

    }
  }

  closeSideNav(){
    this.sideNavOpen = false;
  }

  toggleCategories(){
    this.categoriesOpen = !this.categoriesOpen;

  }

  ngOnDestroy(){
    this.Sub?.unsubscribe();
  }

}
