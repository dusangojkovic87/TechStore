import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NewCollectionComponent } from './pages/new-collection/new-collection.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SpecialsComponent } from './pages/specials/specials.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'new-collection',component:NewCollectionComponent},
  {path:'specials',component:SpecialsComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/:id',component:BlogDetailsComponent},
  {path:'product-details/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
