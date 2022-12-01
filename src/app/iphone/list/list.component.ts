import {Component, OnInit} from '@angular/core';
import {Products} from "../../products";
import {ServiceService} from "../../service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{
  product : Products[]=[];
  constructor(private productsService : ServiceService) {
  }
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.productsService.getAll().subscribe(product=>{
      this.product=product;
    })
  }
}
