import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { SwiperModule } from 'swiper/angular';






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
import { ProductDetailsViewComponent } from './components/product-details-view/product-details-view.component';
import { AsideSpecialProductsComponent } from './components/aside-special-products/aside-special-products.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { ReviewComponent } from './components/product-review/review/review.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ClientAsideReviewListComponent } from './components/client-aside-review-list/client-aside-review-list.component';
import { ClientReviewComponent } from './components/client-review/client-review.component';
import { BannerListBottomComponent } from './components/banner-list-bottom/banner-list-bottom.component';
import { SpecialProductListComponent } from './components/special-product-list/special-product-list.component';
import { SpecialProductComponent } from './components/special-product/special-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterBlogComponent } from './components/footer-blog/footer-blog.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NewCollectionComponent } from './pages/new-collection/new-collection.component';
import { SpecialsComponent } from './pages/specials/specials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

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
    ProductDetailsComponent,
    ProductDetailsViewComponent,
    AsideSpecialProductsComponent,
    ProductDescriptionComponent,
    ProductReviewComponent,
    ReviewComponent,
    AddReviewComponent,
    ClientAsideReviewListComponent,
    ClientReviewComponent,
    BannerListBottomComponent,
    SpecialProductListComponent,
    SpecialProductComponent,
    FooterComponent,
    FooterBlogComponent,
    BlogComponent,
    NewCollectionComponent,
    SpecialsComponent,
    ContactComponent,
    BlogDetailsComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    SwiperModule
  ],
  exports:[
    NgxPaginationModule,
    SwiperModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
