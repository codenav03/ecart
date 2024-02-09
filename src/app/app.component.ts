import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { ProductComponent } from './pages/product/product.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './single/single.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,NavbarComponent,FooterComponent,AboutComponent,ContactComponent,HomeComponent,SingleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecart';
data:any=[]

constructor(public api: ApiService){}
ngOninit()
{
  this.api.getData().subscribe(response =>{
    this.data=response
  })
}
}
