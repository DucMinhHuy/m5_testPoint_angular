import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Products} from "./products";
import {enviroments} from "./enviroment/enviroments";
const API_URL=`${enviroments.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http : HttpClient) { }
  getAll(): Observable<Products[]>{
    return this.http.get<Products[]>(API_URL+'/products');
  }
  saveProduct(product:any):Observable<Products>{
    return this.http.post<Products>(API_URL +'/products',product);
  }
  findById(id:number):Observable<Products>{
    return this.http.get<Products>(`${API_URL}/products/${id}`);
  }
  Update(id:number,product:Products):Observable<Products>{
    return this.http.put<Products>(`${API_URL}/products/${id}`,product);
  }
  delete(id:number):Observable<Products>{
    return this.http.delete<Products>(`${API_URL}/products/${id}`);
  }
}
