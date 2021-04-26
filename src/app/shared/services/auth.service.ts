import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API } from '../others/http.api';
import { Login } from '../others/type';
import { LoginInfo } from '../../shared/others/type'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  login(data: Login): Observable<any> {
    return this.http.post(API.login, data)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  isLogged(): boolean {
    return localStorage.getItem('session') ? true : false
  }

  Logged(): LoginInfo {
    const session = localStorage.getItem('session') as string
    return JSON.parse(session).data
  }

  logout(): void {
    localStorage.clear()
    this.router.navigate(['login'])
  }

  isTeach() : boolean {
     let result:boolean = false
    if(this.isLogged()) {
      if(this.Logged().role){
        result = true
      }
    }
    return result
  }
}
