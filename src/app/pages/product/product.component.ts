import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  data:any=[]

  constructor(public api: ApiService){ }
  ngOnInit()
  {
    this.api.getData().subscribe(response =>{
      this.data=response
    })
  }
}
