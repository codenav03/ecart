import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'product',component: ProductComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'about',component: AboutComponent},
  {path: 'product/:id',component: SingleComponent},
];
