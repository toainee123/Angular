import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IProduct } from "src/model/Products";


@Injectable({
    providedIn: 'root'
})

export class ProductService {
    API_URL = `http://localhost:3001/products`;

    constructor(private http: HttpClient) {}
    getProduct(id:number): Observable<IProduct>{
        return this.http.get<IProduct>(`${this.API_URL}/${id}`)
    }
    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(`${this.API_URL}`)
    }
    addProduct(product: any): Observable<IProduct>{
        return this.http.post<IProduct>(`${this.API_URL}`, product)
    }
    updateProduct(product:any): Observable<IProduct>{
        return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product)
    }
    removeProduct(id: number): Observable<IProduct>{
        return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
    }
}
