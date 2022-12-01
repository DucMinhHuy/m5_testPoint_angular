import { Component } from '@angular/core';
import {ServiceService} from "../../service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  // @ts-ignore
  productForm:FormGroup;
// @ts-ignore
  id:number;
  constructor(private productService : ServiceService,
              private activatedRouted : ActivatedRoute) {
    this.activatedRouted.paramMap.subscribe((paramMap : ParamMap)=>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product =this.getProduct(this.id);
    });
  }
  getProduct(id:number){
    return this.productService.findById(id).subscribe(product=>{
      this.productForm=new FormGroup({
        id:new FormControl(product.id),
        title: new FormControl(product.title),
        price :new FormControl(product.price),
        description :new FormControl(product.description),
      });
    });
  }
  updateProduct(id:number){
    const product = this.productForm.value;
    this.productService.Update(id,product).subscribe(()=>{
      alert('thanh cong');
    },e=>{
      console.log(e);
    });
  }

}
