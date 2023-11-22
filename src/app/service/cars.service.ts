import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

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

  API_URL:string ="http://localhost:8080/api/sedan"

  getCars() : Observable<any> {
    const header = {
      headers: this.getAuthHeader(),
    };
return this.http.get<any>(this.API_URL,header);

  }

    
      updateCarOwner(id:number,data:any):Observable<any>{
        const header = {
          headers: this.getAuthHeader(),
        }
        return this.http.patch(`${this.API_URL}/${id}`,data,header)
      }
    
 

   
}
