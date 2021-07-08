import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderPhoneNumberComponent } from './components/header-phone-number/header-phone-number.component';
import { DropdownCategoryNavigationComponent } from './components/dropdown-category-navigation/dropdown-category-navigation.component';
import { PageNavigationLinksComponent } from './components/page-navigation-links/page-navigation-links.component';
import { MainFilterSearchComponent } from './components/main-filter-search/main-filter-search.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { TabletDropdownSearchComponent } from './components/tablet-dropdown-search/tablet-dropdown-search.component';
import { HomeComponent } from './pages/home/home.component';
import { AsideCategoryNavComponent } from './components/aside-category-nav/aside-category-nav.component';
import { CarouselImgSliderComponent } from './components/carousel-img-slider/carousel-img-slider.component';
import { CarouselImgComponent } from './components/carousel-img/carousel-img.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerListComponent } from './components/banner-list/banner-list.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

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
    HomeComponent,
    AsideCategoryNavComponent,
    CarouselImgSliderComponent,
    CarouselImgComponent,
    BannerComponent,
    BannerListComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
