import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http:HttpClient) { }
  private getAuthHeader(): HttpHeaders {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem("authToken");
    if (token === null) {
      throw null;
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }  

  private readonly API_URL="http://localhost:8080/api/owners"

  getOwners(): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.get<any>(this.API_URL,header);
    
  }

  addOwner(data:any):Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
return this.http.post(this.API_URL,data,header);
  }

  updateOwner(id:number,data:any):Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.put(`${this.API_URL}/${id}`,data,header)
  }

  deleteOwner(id:number):Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.delete(`${this.API_URL}/${id}`,header)
  }


}
