import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [SingleComponent,SlicePipe,RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
 constructor(private routeId: ActivatedRoute,private api: ApiService){}
   data: any= []
   rating: number =0
   ngOnInit()
   {
    this.api.getData().subscribe((res: any)=>{
      let id = this.routeId.snapshot.paramMap.get('id')
      let response = res
      let product = response.filter((e: any) => e.id == id)
      this.data=product[0]
    })
   }
 }
