import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderPhoneNumberComponent } from './components/header-phone-number/header-phone-number.component';
import { DropdownCategoryNavigationComponent } from './components/dropdown-category-navigation/dropdown-category-navigation.component';
import { PageNavigationLinksComponent } from './components/page-navigation-links/page-navigation-links.component';
import { MainFilterSearchComponent } from './components/main-filter-search/main-filter-search.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { TabletDropdownSearchComponent } from './components/tablet-dropdown-search/tablet-dropdown-search.component';
import { CarouselAndCategoryAsideNavComponent } from './components/carousel-and-category-aside-nav/carousel-and-category-aside-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AsideCategoryNavComponent } from './components/aside-category-nav/aside-category-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPhoneNumberComponent,
    DropdownCategoryNavigationComponent,
    PageNavigationLinksComponent,
    MainFilterSearchComponent,
    MyCartComponent,
    TabletDropdownSearchComponent,
    CarouselAndCategoryAsideNavComponent,
    HomeComponent,
    AsideCategoryNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
