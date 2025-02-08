import { inject, Injectable } from '@angular/core';
import { AuthHttpService } from '../auth-http/auth-http.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly authHttp = inject(AuthHttpService);

  login(body: any) {
    return this.authHttp.login(body);
  }

  logout() {
    return this.authHttp.logout();
  }

  signup(body: any) {
    return this.authHttp.signup(body);
  }
}
