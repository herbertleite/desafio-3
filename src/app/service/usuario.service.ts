import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {
  }

  getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseURL);
  }

  getStudant(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseURL + id);
  }


  salvarUsuario(user) : Observable<any> {
    return this.http.post<any>(AppConstants.baseURL, user);
  }

    updateUsuario(user) : Observable<any> {
    return this.http.put<any>(AppConstants.baseURL, user);
  }

   deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseURL + id);
  }

}
