import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./iphone/list/list.component";
import {CreateComponent} from "./iphone/create/create.component";
import {UpdateComponent} from "./iphone/update/update.component";
import {DeleteComponent} from "./iphone/delete/delete.component";

const routes: Routes = [{
  path : 'product/list',
  component:ListComponent
},
  {
    path:'product/creat',
    component:CreateComponent
  },
  {
    path:'edit/:id',
    component:UpdateComponent
  },
  {
    path:'delete/:id',
    component:DeleteComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
