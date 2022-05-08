import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private readonly baseURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(`${this.baseURL}/api/movimentacoes`)
  }

 /* create(movimentacao:any): Observable<any> {
    return this.http.post(`${this.baseURL}/api/movimentacoes`,movimentacao);
 }*/

 create(movimentacao: any){
  console.log("clichegou service")
  console.log(movimentacao);
  return this.http.post<any>(`${this.baseURL}/api/movimentacoes`, movimentacao).pipe(first());
}

findByIdConta(idConta:any): Observable<any> {
  return this.http.get(`${this.baseURL}/api/movimentacoes/${idConta}`);
}

}

