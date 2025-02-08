import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthStateI } from '../../models/auth.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
  private readonly authService = inject(AuthService);

  private readonly authState = signal<AuthStateI | null>(null);

  readonly user = computed(() => this.authState()?.user);
  readonly token = computed(() => this.authState()?.token);
  readonly error = computed(() => this.authState()?.error);
  readonly loading = computed(() => this.authState()?.loading);

  login(body: any): void {
    this.mutateState('loading', true);
    this.mutateState('error', null);
    this.authService.login(body).subscribe({
      next: (r) => {
        console.log('login success', r);
        this.mutateState('user', r);
      },
      error: (err) => this.mutateState('error', err.message),
      complete: () => this.mutateState('loading', false),
    });
  }

  logout(): void {
    this.mutateState('loading', true);
    this.mutateState('error', null);
    this.authService.logout().subscribe({
      next: (r) => {
        console.log('logout success', r);
        this.mutateState('user', null);
        this.mutateState('token', null);
      },
      error: (err) => this.mutateState('error', err.message),
      complete: () => this.mutateState('loading', false),
    });
  }

  signup(body: any): void {
    this.mutateState('loading', true);
    this.mutateState('error', null);
    this.authService.signup(body).subscribe({
      next: (r) => {
        console.log('signup success', r);
        this.mutateState('user', r);
      },
      error: (err) => this.mutateState('error', err.message),
      complete: () => this.mutateState('loading', false),
    });
  }

  private mutateState(k: string, v: any) {
    this.authState.update((e) => ({ ...e, [k]: v }));
  }
}
