import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStoreService } from '../../services/auth-store';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authStoreService = inject(AuthStoreService);
  const router = inject(Router);

  if (!authStoreService.user()) {
    return true;
  }
  return router.navigate(['/']);
};
