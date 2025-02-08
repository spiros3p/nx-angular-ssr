import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AuthLocalstorageService } from './auth-localstorage.service';

describe('AuthLocalstorageService', () => {
  let spec: SpectatorService<AuthLocalstorageService>;
  let service: AuthLocalstorageService;
  const createService = createServiceFactory({
    service: AuthLocalstorageService,
  });

  beforeEach(() => {
    spec = createService();
    service = spec.service;
  });

  it('should...', () => {
    expect(service).toBeTruthy();
  });
});
