import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AuthStoreService } from './auth-store.service';

describe('AuthStoreService', () => {
  let spec: SpectatorService<AuthStoreService>;
  let service: AuthStoreService;
  const createService = createServiceFactory({
    service: AuthStoreService,
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
