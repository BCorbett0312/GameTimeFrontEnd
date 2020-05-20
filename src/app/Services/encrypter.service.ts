import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncrypterService {


  constructor() { }

  encrypt(value: string): string{
    return CryptoJS.AES.encrypt(value, environment.secretkey.trim()).toString();
  }
}
