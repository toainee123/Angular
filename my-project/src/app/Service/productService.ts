import { Injectable} from '@angular/core'
import mockdata from 'src/data'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../Model/product';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    API_url: string = 'http://localhost:3000/products';
    constructor(private http: HttpClient){}
    getProduct(id: number): Observable<Iproduct>{
        
    }
    
    
}