import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API } from '../others/http.api';
import { Mark } from '../../shared/others/type'

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) {}

  userInfo(id: number): Observable<any> {
    return this.http.get(`${API.student}/${id}`)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }

  classes(): Observable<any> {
    return this.http.get(API.classes)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }

  class(id:number): Observable<any> {
    return this.http.get(`${API.students}/${id}`)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }

  mark(data: Mark): Observable<any> {
    return this.http.post(API.mark,data)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
