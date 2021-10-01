import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  retornaHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'response',
    };
    return httpOptions;
  }

  constructor(private httpService: HttpClient) { }

  get<T>(resource: string): Observable<HttpResponse<T>> {
    return this.httpService.get<T>(resource, this.retornaHeader());
  }
}
