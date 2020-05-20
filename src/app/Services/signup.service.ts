import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signUp = false;

  constructor() { }


  getsignUp(){
    return this.signUp;
  }

  switchsignUp(){
    if (this.signUp === false){
      this.signUp = true;
    } else{this.signUp = false; }
  }

}
