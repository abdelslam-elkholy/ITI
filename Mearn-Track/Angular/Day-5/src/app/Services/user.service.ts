import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/iuser';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = {};

  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }
  signUpUser(newUser: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.BaseApiURL}/users`,
      JSON.stringify(newUser),
      this.http
    );
  }
}
