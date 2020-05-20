import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../Models/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authUrl: string;
  public newUserUrl: string;
  public validateUrl: string;
  public authUser: User;


  constructor(private http: HttpClient) {
    this.authUrl = environment.apiUrl + '/signin';
    this.newUserUrl = environment.apiUrl + '/signup';
    this.validateUrl = environment.apiUrl + '/me';
    this.authUser = new User();
  }

  signin(username: string, password: string): Observable<string> {
    return this.http.post(this.authUrl, {}, {
      params: {username, password},
      responseType: 'text'
    });
  }

  signup(username: string, password: string, email: string) {
    const toSend = new User();
    toSend.setUsername(username);
    toSend.setPassword(password);
    toSend.setEmail(email);
    return this.sendSignUpRequest(toSend);
  }

  sendSignUpRequest(user: User): Observable<string>{
    console.log(user);
    return this.http.post(this.newUserUrl, user, {responseType: 'text'} );
  }
}
