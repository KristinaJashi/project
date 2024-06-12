import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetprodactsService {

  baseURL = 'https://api.everrest.educata.dev/shop/products/'
  
  constructor(
    private http: HttpClient
  ) { }

  public getAllProducts():Observable<any>{
    return this.http.get<any>(this.baseURL + 'all' )
      .pipe(
        map((response) => response.products)
      );
  }
}
