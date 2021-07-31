import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'product-details/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
