import { Component } from '@angular/core';
import {ServiceService} from "../../service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  // @ts-ignore
  productForm : FormGroup;
  // @ts-ignore
  id:number;

  constructor(private productService : ServiceService,
              private router:Router,
              private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap)=>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }
  getProduct(id:number){
    return this.productService.findById(id).subscribe(product =>{
      this.productForm =new FormGroup({
        title:new FormControl(product.title),

      });
    });
  }
  deleteProduct(id:number){
    this.productService.delete(id).subscribe(()=>{
      this.router.navigate(['/product/list']);
    },e=>{
      console.log(e);
    });
  }
}
