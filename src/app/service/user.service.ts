import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postUser(user: User): Observable<any>{
    return of(null);
    // return this.httpClient.post<any> (url do endpoint, user);
  }
}
