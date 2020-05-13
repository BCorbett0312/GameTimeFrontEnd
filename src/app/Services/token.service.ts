import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string;
  private isLoggedIn = false;

  constructor() { }

  getToken(): string {
    return this.token;
  }

  setToken(value: string) {
    this.token = value;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
