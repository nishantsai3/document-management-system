import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

login(data: any) {
  return this.http.post(
    'http://localhost:5000/api/auth/login',
    data
  );
}

register(data: any) {
  return this.http.post(
    'http://localhost:5000/api/auth/register',
    data
  );
}

}
