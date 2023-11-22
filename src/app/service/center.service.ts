import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Center } from 'src/app/models/center.model';


@Injectable({
  providedIn: 'root'
})
export class CenterService {

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

  API_URL:string ="http://localhost:8080/api/centers"

  getCenters(): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.get<any>(this.API_URL,header)
  }

  postCenter(data : any): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.post<any>(this.API_URL,data,header)
  }

  updateCenter(id:number,data:any): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.put(`${this.API_URL}/${id}`,data,header)
  }

  deleteCenter(id:any): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
return this.http.delete<any>(`${this.API_URL}/${id}`,header)
  }


  
}
