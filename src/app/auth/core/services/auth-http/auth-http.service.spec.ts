import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AuthHttpService } from './auth-http.service';

describe('AuthHttpService', () => {
  let spec: SpectatorService<AuthHttpService>;
  let service: AuthHttpService;
  const createService = createServiceFactory({
    service: AuthHttpService,
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
