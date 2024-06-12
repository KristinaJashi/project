import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseURL = 'https://api.everrest.educata.dev/auth/'

  constructor(
    private http: HttpClient
  ) { }

  public registration(obj:any):Observable<any>{
    return this.http.post<any>(this.baseURL + 'sign_up', obj )
  }

  public signIn(obj:any):Observable<any>{
    return this.http.post<any>(this.baseURL + 'sign_in', obj )
  }
  
}
