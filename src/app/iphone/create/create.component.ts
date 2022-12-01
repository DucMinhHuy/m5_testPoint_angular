import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ServiceService} from "../../service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  productForm : FormGroup=new FormGroup({
    id:new FormControl(),
    title:new FormControl(),
    price:new FormControl(),
    description:new FormControl()
  });
  constructor(private productService:ServiceService) {
  }
  submit(){
    const product=this.productForm.value;
    this.productService.saveProduct(product).subscribe(()=>{
      this.productForm.reset();
      alert('tao thanh cong');
    },e=>{
      console.log(e);
    });
  }
}
