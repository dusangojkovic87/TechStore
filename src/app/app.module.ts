import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FeaturedProductListComponent } from './components/featured-product-list/featured-product-list.component';
import { ProductComponent } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { AsideBannerComponent } from './components/aside-banner/aside-banner.component';
import { ProductMenuComponent } from './components/product/product-menu/product-menu.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

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
    InfoCardComponent,
    FeaturedProductListComponent,
    ProductComponent,
    RatingComponent,
    AsideBannerComponent,
    ProductMenuComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
