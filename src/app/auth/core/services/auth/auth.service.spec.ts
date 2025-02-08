import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let spec: SpectatorService<AuthService>;
  let service: AuthService;
  const createService = createServiceFactory({
    service: AuthService,
    providers: [provideHttpClient(), provideHttpClientTesting()],
  });

  beforeEach(() => {
    spec = createService();
    service = spec.service;
  });

  it('should...', () => {
    expect(service).toBeTruthy();
  });
});
