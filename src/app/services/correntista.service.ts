import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  private readonly baseURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(`${this.baseURL}/api/correntista`)
  }

  create(correntista:any): Observable<any> {
    return this.http.post(`${this.baseURL}/api/correntista`,correntista);
  }


}
