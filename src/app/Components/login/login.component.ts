import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {TokenService} from '../../Services/token.service';
import {SignupService} from '../../Services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  private authService: AuthenticationService;
  tokenService: TokenService;
  signupService: SignupService;

  constructor(authService: AuthenticationService, tokenService: TokenService, signupService: SignupService) {
    this.authService = authService;
    this.tokenService = tokenService;
    this.signupService = signupService;
  }

  ngOnInit() {
  }

  async signIn(){
    await this.authService.signin(this.username, this.password).subscribe(jwt => {
      this.tokenService.setToken(jwt);
      this.tokenService.setIsLoggedIn(true);
    });
  }

  activateSignUp(){
    this.signupService.switchsignUp();
  }

  async signUp(){
    await this.authService.signup(this.username, this.password, this.email).subscribe(jwt => {
      this.tokenService.setToken(jwt);
      this.tokenService.setIsLoggedIn(true);
    });
  }


}
