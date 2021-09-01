import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DesktopsComponent } from './pages/desktops/desktops.component';
import { HomeComponent } from './pages/home/home.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCollectionComponent } from './pages/new-collection/new-collection.component';
import { PeripheralsComponent } from './pages/peripherals/peripherals.component';
import { PhonesComponent } from './pages/phones/phones.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { ScannersComponent } from './pages/scanners/scanners.component';
import { SpecialsComponent } from './pages/specials/specials.component';
import { WatchesComponent } from './pages/watches/watches.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'new-collection',component:NewCollectionComponent},
  {path:'specials',component:SpecialsComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'blog/:id',component:BlogDetailsComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'cart',component:CartComponent},
  {path:'desktops',component:DesktopsComponent,pathMatch:'full'},
  {path:'laptops',component:LaptopsComponent,pathMatch:'full'},
  {path:'cameras',component:CamerasComponent,pathMatch:'full'},
  {path:'phones',component:PhonesComponent,pathMatch:'full'},
  {path:'scanners',component:ScannersComponent,pathMatch:'full'},
  {path:'watches',component:WatchesComponent,pathMatch:'full'},
  {path:'peripherals',component:PeripheralsComponent,pathMatch:'full'},
  {path:'product-details/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
