import { Injectable } from '@angular/core';
import { UserI } from '../../models/auth.model';

const FALSE_EQUIVALENT = ['undefined', 'null', null, 0, undefined, false, ''];

@Injectable({ providedIn: 'root' })
export class AuthLocalstorageService {
  private readonly storageI = localStorage;
  private readonly tokenKey = 'token';
  private readonly userKey = 'user';

  // user methods
  saveUser(user: UserI): void {
    this.storageI.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): UserI {
    const user = this.storageI.getItem(this.userKey);
    return FALSE_EQUIVALENT.includes(user) ? null : JSON.parse(user as string);
  }

  removeUser(): void {
    this.storageI.removeItem(this.userKey);
  }

  // token methods
  saveAuthToken(token: string): void {
    this.storageI.setItem(this.tokenKey, JSON.stringify(token));
  }

  getAuthToken(): string | null {
    const token = this.storageI.getItem(this.tokenKey);
    return FALSE_EQUIVALENT.includes(token)
      ? null
      : JSON.parse(token as string);
  }

  removeAuthToken(): void {
    this.storageI.removeItem(this.tokenKey);
  }
}
