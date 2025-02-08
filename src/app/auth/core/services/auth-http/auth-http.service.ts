import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class AuthHttpService {
  private readonly baseAuthUrl = environment.baseAuthUrl;
  private readonly endpoints = environment.endpoints;
  private readonly http = inject(HttpClient);

  readonly httpOptions: { headers: HttpHeaders; withCredentials: boolean } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  };

  login(body: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseAuthUrl}${this.endpoints['login']}`,
      body,
      this.httpOptions,
    );
  }

  logout(): Observable<any> {
    return this.http.post<any>(
      `${this.baseAuthUrl}${this.endpoints['logout']}`,
      null,
      this.httpOptions,
    );
  }

  signup(body: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseAuthUrl}${this.endpoints['signup']}`,
      body,
      this.httpOptions,
    );
  }
}
