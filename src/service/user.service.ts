import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Iuser } from "src/model/User";
@Injectable({
    providedIn: 'root'
})
export class userService{
    API_URL = `http://localhost:3001/user`
    constructor(
        private http: HttpClient
    ){}
    signIn(user: any): Observable<Iuser>{
        return this.http.post<Iuser>(`${this.API_URL}`, user)
    }
    signUp(user: any): Observable<Iuser>{
        return this.http.post<Iuser>(`${this.API_URL}`, user)
    }
    listUser():Observable<Iuser[]>{
        return this.http.get<Iuser[]>(`${this.API_URL}`)
    }
    deleteUser(id:any): Observable<Iuser>{
        return this.http.delete<Iuser>(`${this.API_URL}/${id}`)
    }
}