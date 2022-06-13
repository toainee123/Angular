import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Iuser } from "src/model/User";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class userService{
    constructor(
        private http: HttpClient
    ){}
    signIn(user: any): Observable<Iuser>{
        return this.http.post<Iuser>(`${environment.signIn}`, user)
    }
    signUp(user: any): Observable<Iuser>{
        return this.http.post<Iuser>(`${environment.signUp}`, user)
    }
    listUser():Observable<Iuser[]>{
        return this.http.get<Iuser[]>(`${environment.listUser}`)
    }
    deleteUser(id:any): Observable<Iuser>{
        return this.http.delete<Iuser>(`${environment.deleteUser}/${id}`)
    }
}