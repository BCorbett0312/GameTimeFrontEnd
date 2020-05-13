import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  authService: AuthenticationService;

  jwt: string;

  constructor(authService: AuthenticationService) {
    this.authService = authService;



  }

  ngOnInit() {
  }

  async signIn(){
    await this.authService.signin(this.username, this.password).subscribe(jwt => this.jwt = jwt);
  }

}
