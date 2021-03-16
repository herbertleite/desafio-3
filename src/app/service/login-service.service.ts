import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  

  constructor(private http: HttpClient, private router: Router) { }

    login(usuario){
          this.router.navigate(['home']);
    }

}
