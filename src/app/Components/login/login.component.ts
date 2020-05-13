import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {TokenService} from '../../Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  private authService: AuthenticationService;
  tokenService: TokenService;

  constructor(authService: AuthenticationService, tokenService: TokenService) {
    this.authService = authService;
    this.tokenService = tokenService;
  }

  ngOnInit() {
  }

  async signIn(){
    await this.authService.signin(this.username, this.password).subscribe(jwt => {
      this.tokenService.setToken(jwt);
      this.tokenService.setIsLoggedIn(true);
    });
  }

}
